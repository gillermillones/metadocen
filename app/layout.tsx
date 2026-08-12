import '@/app/ui/global.css';
import { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Metadocen',
    default: 'Metadocen',
  },
  creator: 'Guillermo Colorado',
  description: 'Obten metadatos para tus recursos digitales segun la Norma 71362:2020 de la UNE',
  metadataBase: new URL('https://metadocen.vercel.app'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}