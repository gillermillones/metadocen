'use client';

import { FullUser } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateProfile, ProfileState } from '@/app/lib/actions';
import { useActionState } from 'react';
import { formatDateToISO } from '@/app/lib/utils'

export default function EditProfileForm({ user }: {user: FullUser }) {
    const updateUserProfile = updateProfile.bind(null, user.id);
    const initialState: ProfileState = { message: null, errors: {} };
    const [state, formAction] = useActionState(updateUserProfile, initialState);

    return (
        <form action={formAction}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6" aria-describedby="general-error">
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Correo electronico
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="peer block w-full rounded-md border border-gray-200 px-2 py-2 outline-2">
                          <h1 id="email">{user.email}</h1>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Nombre de usuario
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="peer block w-full rounded-md border border-gray-200 px-2 py-2 outline-2">
                          <h1 id="name">{user.name}</h1>
                        </div>
                    </div>
                </div>
                {/* Fullname */}
                <div className="mb-4">
                    <label htmlFor="fullname" className="mb-2 block text-sm font-medium">
                        Nombre completo
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="fullname"
                                name="fullname"
                                type="text"
                                placeholder="Nombre completo"
                                defaultValue={user.fullname}
                                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="fullname-error"
                            />
                        </div>
                        <div id="fullname-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.fullname &&
                            state.errors.fullname.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Gender */}
                <div className="mb-4">
                    <label htmlFor="gender" className="mb-2 block text-sm font-medium">
                        Genero
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                           <select
                                id="gender"
                                name="gender"
                                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={user.gender}
                                aria-describedby="gender-error"
                            >
                                <option key="standard" value="">
                                    Selecciona un genero
                                </option>
                                <option key="Masculino" value="Masculino">
                                    Masculino
                                </option>
                                <option key="Femenino" value="Femenino">
                                    Femenino
                                </option>
                                <option key="Otro" value="Otro">
                                    Otro
                                </option>
                            </select>
                        </div>
                        <div id="gender-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.gender &&
                            state.errors.gender.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Birthday */}
                <div className="mb-4">
                    <label htmlFor="birthday" className="mb-2 block text-sm font-medium">
                        Fecha de nacimiento
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                type="date"
                                id="birthday"
                                name="birthday"
                                className="width-maxflex rounded-md border border-gray-200 py-2 px-2 outline-2"
                                defaultValue={formatDateToISO(user.birthday)}
                                min="1900-01-01"
                                max="2018-12-31" 
                            />
                        </div>
                    </div>
                </div>
                {/* Workplace */}
                <div className="mb-4">
                    <label htmlFor="workplace" className="mb-2 block text-sm font-medium">
                        Lugar de trabajo
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="workplace"
                                name="workplace"
                                type="text"
                                placeholder="Lugar de trabajo"
                                defaultValue={user.workplace}
                                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="workplace-error"
                            />
                        </div>
                        <div id="workplace-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.workplace &&
                            state.errors.workplace.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Password */}
                <div className="mb-4">
                    <label htmlFor="password" className="mb-2 block text-sm font-medium">
                        Introduzca su contraseña
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Contraseña"
                                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="password-error"
                            />
                        </div>
                        <div id="password-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.password &&
                            state.errors.password.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div id="general-error" aria-live="polite" aria-atomic="true">
                {state.message ?
                    <p className="mt-2 text-sm text-red-500" key={state.message}>
                    {state.message}
                    </p>
                    : <></>
                }
            </div>
            <div className="mt-6 flex justify-between gap-4">
                <Link
                href={`/dashboard/profile/${user.id}`}
                className="flex h-10 items-center rounded-lg bg-red-400 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-red-500"
                >
                    Cancelar
                </Link>
                <Button type="submit">Confirmar</Button>
            </div>
        </form>
    );
}