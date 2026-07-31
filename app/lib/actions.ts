'use server';

import { z } from 'zod';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getUserById, signIn } from '@/auth';
import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt';
import { getIronSession, IronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/app/lib/session";
import { nameRepeated, emailRepeated, fetchUserByName } from "@/app/lib/data";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const RegisterFormSchema = z.object({
  id: z.string(),
  name: z.string().min(1, { message: 'User name can not be empty' }),
  email: z.string().min(1, { message: 'Email can not be empty' }).email({ message: "Email is invalid" }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  password2: z.string().min(6, { message: 'Passwords do not match' }),
});

const ProfileFormSchema = z.object({
  id: z.string(),
  password: z.string(),
  gender: z.enum(['masculino', 'femenino', 'otro'], { invalid_type_error: 'Error en el genero' }).optional().or(z.literal('')),
  birthday: z.string().optional(),
  workplace: z.string().optional().or(z.literal('')),
});

const PasswordFormSchema = z.object({
  id: z.string(),
  newPassword: z.string().min(6, { message: 'New password must be at least 6 characters' }),
  newPassword2: z.string().min(6, { message: 'Passwords do not match' }),
  oldPassword: z.string(),
});

const ItemsFormSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    name: z.string().min(1, { message: 'Name can not be empty' }),
    extension: z.string().min(1, { message: 'File extension can not be empty' }),
    summary: z.string(),
    description: z.enum(['1', '2', '3', '4', '5', '6'], {message: 'Please select a value',}).transform(Number),
    quality: z.enum(['1', '2', '3', '4', '5', '6', '7'], {message: 'Please select a value',}).transform(Number),
    capacity: z.enum(['1', '2', '3', '4'], {message: 'Please select a value',}).transform(Number),
    adaptable: z.enum(['1', '2', '3', '4', '5'], {message: 'Please select a value',}).transform(Number),
    interaction: z.enum(['1', '2', '3', '4', '5'], {message: 'Please select a value',}).transform(Number),
    motivation: z.enum(['1', '2', '3', '4', '5'], {message: 'Please select a value',}).transform(Number),
    design: z.enum(['1', '2', '3', '4', '5', '6', '7', '8'], {message: 'Please select a value',}).transform(Number),
    reusable: z.enum(['1', '2', '3'], {message: 'Please select a value',}).transform(Number),
    portable: z.enum(['1', '2', '3', '4', '5'], {message: 'Please select a value',}).transform(Number),
    toughness: z.enum(['1', '2', '3', '4'], {message: 'Please select a value',}).transform(Number),
    structure: z.enum(['1', '2', '3', '4'], {message: 'Please select a value',}).transform(Number),
    navigation: z.enum(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'], {message: 'Please select a value',}).transform(Number),
    operable: z.enum(['1', '2', '3', '4', '5', '6'], {message: 'Please select a value',}).transform(Number),
    av_accessible: z.enum(['1', '2', '3', '4', '5', '6', '7'], {message: 'Please select a value',}).transform(Number),
    text_accessible: z.enum(['1', '2', '3', '4', '5', '6', '7'], {message: 'Please select a value',}).transform(Number),
    date: z.string(),
});

const RegisterUser = RegisterFormSchema.omit({ id: true });
const UpdateProfile = ProfileFormSchema.omit({ id: true, birthday: true });
const UpdatePassword = PasswordFormSchema.omit({ id: true });
const CreateItem = ItemsFormSchema.omit({ id: true, user_id: true, date: true });
const UpdateItem = ItemsFormSchema.omit({ id: true, user_id: true, date: true });

export type SimpleState = {
  message?: string | null;
};

export type RegisterState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    password2?: string[];
  };
  message?: string | null;
};

export type ProfileState = {
  errors?: {
    password?: string[];
    gender?: string[];
    workplace?: string[];
  };
  message?: string | null;
};

export type PasswordState = {
  errors?: {
    newPassword?: string[];
    newPassword2?: string[];
    oldPassword?: string[];
  };
  message?: string | null;
};

export type ItemState = {
  errors?: {
    name?: string[];
    extension?: string[];
    summary?: string[];
    description?: string[];
    quality?: string[];
    capacity?: string[];
    adaptable?: string[];
    interaction?: string[];
    motivation?: string[];
    design?: string[];
    reusable?: string[];
    portable?: string[];
    toughness?: string[];
    structure?: string[];
    navigation?: string[];
    operable?: string[];
    av_accessible?: string[];
    text_accessible?: string[];
  };
  message?: string | null;
};

export async function getSession() {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(
        cookieStore,
        sessionOptions,
    );

    return session;
}

export async function searchUserByName(prevState: SimpleState, formData: FormData) {
    const name = <string>formData.get('username');
    let user;
  try {
    user = await fetchUserByName(name);
    if(!user){
        return {
            message: 'No user matches your search',
        };
    }
  } catch (error) {
    return {
        message: 'Search error',
    };
  }
  redirect('/dashboard/profile/' + user.id);
}

export async function createItem(prevState: ItemState, formData: FormData) {
    const validatedFields = CreateItem.safeParse({
        name: formData.get('name'),
        extension: formData.get('extension'),
        summary: formData.get('summary'),
        description: formData.get('description'),
        quality: formData.get('quality'),
        capacity: formData.get('capacity'),
        adaptable: formData.get('adaptable'),
        interaction: formData.get('interaction'),
        motivation: formData.get('motivation'),
        design: formData.get('design'),
        reusable: formData.get('reusable'),
        portable: formData.get('portable'),
        toughness: formData.get('toughness'),
        structure: formData.get('structure'),
        navigation: formData.get('navigation'),
        operable: formData.get('operable'),
        av_accessible: formData.get('av_accessible'),
        text_accessible: formData.get('text_accessible'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create your item.',
        };
    }

    const { name, extension, summary, description, quality, capacity, adaptable, interaction, motivation, design, 
        reusable, portable, toughness, structure, navigation, operable, av_accessible, text_accessible } = validatedFields.data;
    const session = await getSession();

    try{
        await sql`
            INSERT INTO "data" (user_id, name, extension, summary, description, quality, capacity, adaptable, 
                interaction, motivation, design, reusable, portable, toughness, structure, 
                navigation, operable, av_accessible, text_accessible)
            VALUES (${session.userId}, ${name}, ${extension}, ${summary}, ${description}, ${quality}, ${capacity}, 
                ${adaptable}, ${interaction}, ${motivation}, ${design}, ${reusable}, ${portable}, 
                ${toughness}, ${structure}, ${navigation}, ${operable}, ${av_accessible}, ${text_accessible})
        `;
    }catch(error){
        return {
            message: 'Database Error: Failed to Create item.',
        };
    }

    revalidatePath('/dashboard/files');
    redirect('/dashboard/files');
}

export async function updateItem(id: string, prevState: ItemState, formData: FormData) {
    const validatedFields = UpdateItem.safeParse({
        name: formData.get('name'),
        extension: formData.get('extension'),
        summary: formData.get('summary'),
        description: formData.get('description'),
        quality: formData.get('quality'),
        capacity: formData.get('capacity'),
        adaptable: formData.get('adaptable'),
        interaction: formData.get('interaction'),
        motivation: formData.get('motivation'),
        design: formData.get('design'),
        reusable: formData.get('reusable'),
        portable: formData.get('portable'),
        toughness: formData.get('toughness'),
        structure: formData.get('structure'),
        navigation: formData.get('navigation'),
        operable: formData.get('operable'),
        av_accessible: formData.get('av_accessible'),
        text_accessible: formData.get('text_accessible'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update your item.',
        };
    }

    const { name, extension, summary, description, quality, capacity, adaptable, interaction, motivation, design, 
        reusable, portable, toughness, structure, navigation, operable, av_accessible, text_accessible } = validatedFields.data;

    try{  
        await sql`
            UPDATE "data"
            SET name = ${name}, extension = ${extension}, summary = ${summary}, description = ${description}, quality = ${quality}, capacity = ${capacity}, adaptable = ${adaptable},
                interaction = ${interaction}, motivation = ${motivation}, design = ${design}, reusable = ${reusable}, portable = ${portable}, toughness = ${toughness},
                structure = ${structure}, navigation = ${navigation}, operable = ${operable}, av_accessible = ${av_accessible}, text_accessible = ${text_accessible}
            WHERE id = ${id}
        `;
    }catch(error){
        console.error(error);

        return {
            message: 'Database Error: Failed to Update your file',
        };
    }
 
  revalidatePath('/dashboard/files');
  redirect('/dashboard/files');
}

export async function deleteItem(id: string) {
    try{
        await sql`DELETE FROM "data" WHERE id = ${id}`;
    }catch(error){
        console.error(error);
    }

  revalidatePath('/dashboard/files');
}

export async function removeFriend(id: string | undefined) {
    const session = await getSession();

    if(id != undefined){
        try{
            await sql`
                DELETE FROM friends 
                WHERE ("userIdSource" = ${session.userId} AND "userIdTarget" = ${id})
                OR ("userIdSource" = ${id} AND "userIdTarget" = ${session.userId})
            `;
        }catch(error){
            console.error(error);
        }
    }

  revalidatePath('/dashboard/profile/' + session.userId);
}

export async function acceptFriend(id: string) {
    const session = await getSession();

    try{
        await sql`
            UPDATE friends
            SET accepted = true
            WHERE "userIdSource" = ${id} AND "userIdTarget" = ${session.userId}
        `;
    }catch(error){
        console.error(error);
    }

  revalidatePath('/dashboard/profile/' + session.userId);
}

export async function addFriend(id: string | undefined) {
    const session = await getSession();

    if(id != undefined){
        try{
            await sql`
                INSERT INTO friends ("userIdSource", "userIdTarget", accepted)
                VALUES (${session.userId}, ${id}, false)
            `;
        }catch(error){
            console.error(error);
        }
    }else{
        console.error("404 Id not found");
    }

  revalidatePath('/dashboard/profile/' + session.userId);
}

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function registerUser(prevState: RegisterState, formData: FormData) {
    const validatedFields = RegisterUser.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        password2: formData.get('password2'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Register User.',
        };
    }

    const { name, email, password, password2 } = validatedFields.data;

    if (password.localeCompare(password2) != 0) {
        return {
            message: 'Passwords do not match',
        };
    }
    if (await emailRepeated(email)) {
        return {
            message: 'Email already in use',
        };
    }
    if (await nameRepeated(name)) {
        return {
            message: 'User name already in use',
        };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try{
        await sql`
            INSERT INTO users (name, email, password)
            VALUES (${name}, ${email}, ${hashedPassword})
        `;
    }catch(error){
        return {
            message: 'Database Error: Failed to Register User.',
        };
    }

    try {
        formData.delete("name");
        formData.delete("password2");
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return {
                        message:'Invalid credentials.'
                    };
                default:
                    return {
                        message: 'Something went wrong.'
                    };
            }
        }
        throw error;
    }

    redirect('/dashboard');
}

export async function updateProfile(id: string, prevState: ProfileState, formData: FormData) {
    const validatedFields = UpdateProfile.safeParse({
        password: formData.get('password'),
        gender: formData.get('gender'),
        workplace: formData.get('workplace'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Faltan campos. Por favor, completa los obligatorios.',
        };
    }

    const { password, gender, workplace } = validatedFields.data;
    const target = await getUserById(id);
    if(target == undefined){
        return {
            message: 'Id de usuario invalido',
        };
    }
    const passwordsMatch = await bcrypt.compare(password, target.password);

    if (!passwordsMatch) {
        return {
            message: 'Contraseña erronea',
        };
    }

    const date = <string>formData.get('birthday')
    const dateFix = date ? new Date(date) : null;

    try{  
        await sql`
            UPDATE users
            SET gender = ${gender ?? null}, birthday = ${dateFix}, workplace = ${workplace ?? null}
            WHERE id = ${id}
        `;
    }catch(error){
        console.error(error);

        return {
            message: 'Error en base de datos: fallo al actualizar tu perfil',
        };
    }
 
  revalidatePath('/dashboard/profile/' + id);
  redirect('/dashboard/profile/' + id);
}

export async function updatePassword(id: string, prevState: PasswordState, formData: FormData) {
    const validatedFields = UpdatePassword.safeParse({
        newPassword: formData.get('newPassword'),
        newPassword2: formData.get('newPassword2'),
        oldPassword: formData.get('oldPassword'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Faltan campos. Por favor, completalos',
        };
    }

    const { newPassword, newPassword2, oldPassword } = validatedFields.data;
    const target = await getUserById(id);
    if(target == undefined){
        return {
            message: 'Id de usuario invalido',
        };
    }

    if (newPassword.localeCompare(newPassword2) != 0) {
        return {
            message: 'Las contraseñas no coinciden',
        };
    }
    if (newPassword.localeCompare(oldPassword) == 0) {
        return {
            message: 'Las contraseñas no pueden ser iguales',
        };
    }

    const oldPasswordsMatch = await bcrypt.compare(oldPassword, target.password);
    if (!oldPasswordsMatch) {
        return {
            message: 'Contraseña incorrecta',
        };
    }

    const newHashedPassword = await bcrypt.hash(newPassword, 10);

    try{  
        await sql`
            UPDATE users
            SET password = ${newHashedPassword}
            WHERE id = ${id}
        `;
    }catch(error){
        console.error(error);

        return {
            message: 'Error en base de datos: fallo al actualizar tu contraseña',
        };
    }
 
  revalidatePath('/dashboard/profile/' + id);
  redirect('/dashboard/profile/' + id);
}