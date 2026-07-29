import { PlusIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { removeFriend, addFriend, acceptFriend } from '@/app/lib/actions';

export function AddFriend({ id }: { id: string | undefined }) {

    return (
    <form action={async () => {
      'use server';
      await addFriend(id);
    }}>
      <button type="submit" className="rounded-md border p-2 bg-green-300 hover:bg-green-400">
        <span className="sr-only">Agregar Amigo</span>
        <PlusIcon className="w-4" />
      </button>
    </form>
  );
}

export function AcceptFriend({ id }: { id: string }) {
  
    return (
    <form action={async () => {
      'use server';
      await acceptFriend(id);
    }}>
      <button type="submit" className="rounded-md border p-2 bg-green-300 hover:bg-green-400">
        <span className="sr-only">Aceptar Solicitud</span>
        <CheckIcon className="w-4" />
      </button>
    </form>
  );
}

export function RemoveFriend({ id }: { id: string | undefined }) {
    
  return (
    <form action={async () => {
      'use server';
      await removeFriend(id);
    }}>
      <button type="submit" className="rounded-md border p-2 bg-red-400 hover:bg-red-500">
        <span className="sr-only">Eliminar</span>
        <XMarkIcon className="w-4" />
      </button>
    </form>
  );
}