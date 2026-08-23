'use server';

import { deleteItem } from '@/app/lib/actions';

export default async function DeleteItemAction(id: string) {
  await deleteItem(id);
}