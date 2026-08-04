'use client';

import {
  UserIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavLinks({ userId }: { userId: string }){
  const pathname = usePathname();
  const links = [
    { name: 'Pagina principal', href: '/dashboard', icon: HomeIcon },
    { name: 'Archivos', href: '/dashboard/files', icon: DocumentDuplicateIcon },
    { name: 'Graficas', href: '/dashboard/graphs/' + userId, icon: ChartBarIcon },
    { name: 'Perfil', href: '/dashboard/profile/' + userId, icon: UserIcon },
    { name: 'Sobre nosotros', href: '/dashboard/about', icon: ClipboardDocumentListIcon },
  ];

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
