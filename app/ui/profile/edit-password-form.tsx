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
import { updatePassword, PasswordState } from '@/app/lib/actions';
import { useActionState } from 'react';
import { formatDateToLocal } from '@/app/lib/utils'

export default function EditPasswordForm({ user }: {user: FullUser }) {
    const updateUserPassword= updatePassword.bind(null, user.id);
    const initialState: PasswordState = { message: null, errors: {} };
    const [state, formAction] = useActionState(updateUserPassword, initialState);

    return (
        <form action={formAction}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6" aria-describedby="general-error">
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Correo electronico
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                          <h1 id="email">{user.email}</h1>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Nombre de usuario
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                          <h1 id="name">{user.name}</h1>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="gender" className="mb-2 block text-sm font-medium">
                        Genero
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                           <h1 id="gender">{user.gender}</h1>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="birthday" className="mb-2 block text-sm font-medium">
                        Fecha de nacimiento
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <h1 id="birthday">{formatDateToLocal(user.birthday)}</h1>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="workplace" className="mb-2 block text-sm font-medium">
                        Lugar de trabajo
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <h1 id="workplace">{user.workplace}</h1>
                        </div>
                    </div>
                </div>
                {/* New Password */}
                <div className="mb-4">
                    <label htmlFor="newPassword" className="mb-2 block text-sm font-medium">
                        Introduzca la nueva contraseña
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="newPassword"
                                name="newPassword"
                                type="password"
                                placeholder="Nueva contraseña"
                                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="newPassword-error"
                            />
                        </div>
                        <div id="newPassword-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.newPassword &&
                            state.errors.newPassword.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                {/* New Password 2 */}
                <div className="mb-4">
                    <label htmlFor="newPassword2" className="mb-2 block text-sm font-medium">
                        Repita la nueva contraseña
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="newPassword2"
                                name="newPassword2"
                                type="password"
                                placeholder="Repetir contraseña"
                                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="newPassword2-error"
                            />
                        </div>
                        <div id="newPassword2-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.newPassword2 &&
                            state.errors.newPassword2.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Old Password */}
                <div className="mb-4">
                    <label htmlFor="oldPassword" className="mb-2 block text-sm font-medium">
                        Introduzca la anterior contraseña
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="oldPassword"
                                name="oldPassword"
                                type="password"
                                placeholder="Contraseña anterior"
                                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="oldPassword-error"
                            />
                        </div>
                        <div id="oldPassword-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.oldPassword &&
                            state.errors.oldPassword.map((error: string) => (
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