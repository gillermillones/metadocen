'use client'

import { DeleteProfile } from '@/app/ui/profile/buttons';
import { useState } from 'react'
import { TrashIcon } from '@heroicons/react/24/outline';

export default function ProfileModal({ id }: { id: string }) {
    const [modal, setModal] = useState<string | null>(null);
    const showModal = (uid : string) => {setModal(modal === uid ? null : uid)}

    return (
        <div>
            <button onClick={() => showModal(id)} className="flex h-10 width-maxflex ml-4 items-center justify-between gap-2 md:gap-1 rounded-lg bg-red-400 px-4 text-sm font-medium text-white transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                <span className="block">Eliminar perfil</span>{' '}
                <TrashIcon className="w-5 md:ml-4" />
            </button>
            {modal && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/25">
                    <div className="absolute flex flex-col p-8 gap-4 rounded-md bg-white">
                        <p className="text-sm text-center">
                            Seguro que quieres eliminar tu perfil?
                        </p>
                        <p className="text-sm text-center">
                            Esta accion no se puede deshacer
                        </p>
                        <div className="flex flex-row justify-between">
                            <button type="button" onClick={() => showModal(modal)} className="rounded-md border p-2 bg-blue-300 hover:bg-blue-500">
                                <span>No, cancelar</span>
                            </button>
                            <DeleteProfile id={modal} onDelete={() => showModal(modal)} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}