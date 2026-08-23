'use server';

import { deleteUser } from '@/app/lib/actions';

export default async function DeleteUserAction(id: string) {
  await deleteUser(id);
}