import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function UpdateProfile({ id }: { id: string }) {
  return (
      <Link
        href={`/dashboard/profile/${id}/edit`}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <PencilIcon className="w-5" />
      </Link>
  );
}
/*
export function DeleteProfile({ id }: { id: string }) {
  return (
    <form action={deleteItemAction.bind(null, id)}>
      <button
        type="submit"
        className="rounded-md border p-2 bg-red-400 hover:bg-red-500"
      >
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}*/