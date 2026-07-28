'use client';

import { FullUser } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateProfile, ProfileState } from '@/app/lib/actions';
import { useActionState } from 'react';

export default function EditProfileForm({ user }: {user: FullUser }) {
    const updateUserProfile= updateProfile.bind(null, user.id);
    const initialState: ProfileState = { message: null, errors: {} };
    const [state, formAction] = useActionState(updateUserProfile, initialState);

    return (
        <form action={formAction}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6" aria-describedby="general-error">
                {/* Password */}
                <div className="mb-4">
                    <label htmlFor="password" className="mb-2 block text-sm font-medium">
                        Contraseña
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                defaultValue={user.password}
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
                {/* Password 2 */}
                <div className="mb-4">
                    <label htmlFor="password2" className="mb-2 block text-sm font-medium">
                        Repetir contraseña
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="password2"
                                name="password2"
                                type="password"
                                defaultValue={user.password}
                                placeholder="Repetir contraseña"
                                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="password2-error"
                            />
                        </div>
                        <div id="password2-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.password2 &&
                            state.errors.password2.map((error: string) => (
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
                                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={user.gender}
                                aria-describedby="gender-error"
                            >
                                <option value="" disabled>
                                    Selecciona un genero
                                </option>
                                <option key="masculino" value="masculino">
                                    Masculino
                                </option>
                                <option key="femenino" value="femenino">
                                    Femenino
                                </option>
                                <option key="otro" value="otro">
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
                                defaultValue={user.birthday}
                                min="1900-01-01"
                                max="2018-12-31" 
                            />
                        </div>
                        <div id="birthday-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.birthday &&
                            state.errors.birthday.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                                </p>
                            ))}
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