import { PencilIcon } from '@heroicons/react/24/outline';
import DeleteUserAction from '@/app/ui/profile/delete-button';
import Link from 'next/link';

export function UpdateProfile({ id }: { id: string }) {
  return (
      <Link
        href={`/dashboard/profile/${id}/edit`}
        className="flex h-10 ml-4 items-center justify-between gap-2 md:gap-1 rounded-lg bg-blue-400 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <span className="block">Editar perfil</span>{' '}
        <PencilIcon className="h-5 md:ml-4" />
      </Link>
  );
}

export function UpdatePassword({ id }: { id: string }) {
  return (
      <Link
        href={`/dashboard/profile/${id}/editPassword`}
        className="flex h-10 ml-4 items-center justify-between gap-2 md:gap-1 rounded-lg bg-purple-400 px-4 text-sm font-medium text-white transition-colors hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <span className="block">Cambiar contraseña</span>{' '}
        <PencilIcon className="h-5 md:ml-4" />
      </Link>
  );
}

export function DeleteProfile({ id, onDelete }: { id: string; onDelete?: () => void }) {
  return (
    <form action={DeleteUserAction.bind(null, id)} onSubmit={() => {onDelete?.();}}>
      <button type="submit" className="rounded-md border p-2 bg-red-300 hover:bg-red-500">
        <span>Si, eliminar</span>
      </button>
    </form>
  );
}