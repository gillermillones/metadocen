import EditPasswordForm from '@/app/ui/profile/edit-password-form';
import { Metadata } from 'next';
import { notFound, forbidden } from 'next/navigation';
import { getFullUserById } from '@/auth';
import { getSession } from '@/app/lib/actions';
import Breadcrumbs from '@/app/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'Cambiar Contraseña',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const user = await getFullUserById(id);
    if (!user) {
        notFound();
    }
  
    const session = await getSession();
    if(session.userId.localeCompare(user?.id) != 0){
        forbidden();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Tu Perfil', href: `/dashboard/profile/${user?.id}` },
                    {
                        label: 'Cambiar contraseña',
                        href: `/dashboard/profile/${user?.id}/editPassword`,
                        active: true,
                    },
                ]}
            />
            <div className="flex flex-col w-full items-start justify-start pt-4">
                <div className="flex justify-end gap-2">
                    <EditPasswordForm user={user}></EditPasswordForm>
                </div>
            </div>
        </main>
    );
}