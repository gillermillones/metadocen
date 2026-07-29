import ItemForm from '@/app/ui/items/create-form';
import { Metadata } from 'next';
import Breadcrumbs from '@/app/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'Nuevo Archivo',
};

export default async function Page() {
  
  return (
    <main>
      <Breadcrumbs
          breadcrumbs={[
              { label: 'Tus Archivos', href: '/dashboard/files' },
              {
                  label: 'Nuevo Archivo',
                  href: '/dashboard/files/create',
                  active: true,
              },
          ]}
       />
      <div className="flex w-full items-center justify-between pt-4">
        <div className="flex justify-end gap-2">
            <ItemForm />
        </div>
      </div>
    </main>
  );
}