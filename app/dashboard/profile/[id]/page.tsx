import { getSession } from '@/app/lib/actions';
import { Metadata } from 'next';
import { getUserById, getFullUserById } from '@/auth';
import { notFound, forbidden } from 'next/navigation';
import OwnProfileTable from '@/app/ui/profile/table';
import FriendProfileTable from '@/app/ui/profile/friend-table';
import UnknownProfileTable from '@/app/ui/profile/unknown-table';
import { areWeFriends, areWeRequested } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Perfil',
};

export default async function Page({ 
    params,
    searchParams,
  }: {
    params: Promise<{ id: string }> ;
    searchParams: Promise<{ page?: string }>;
}) {
  const { id } = await params;
  const sp = await searchParams;
  const user = await getUserById(id);
  if (!user) {
    notFound();
  }
  const currentPage = Number(sp?.page) || 1;
  const session = await getSession();
  const friendship = await areWeFriends(session.userId, id);
  const requested = await areWeRequested(session.userId, id);
  const fullUser = await getFullUserById(id);
  
  if(session.userId.localeCompare(user?.id) == 0){
    return (
      <div className="w-full">
        <OwnProfileTable id={session.userId} />
      </div>
    );
  }else if(friendship == true){
    return (
      <div className="w-full">
        <FriendProfileTable user={fullUser} pageAct={currentPage}/>
      </div>
    );
  }

  return (
    <div className="w-full">
      <UnknownProfileTable user={user} requested={requested}/>
    </div>
  );
}