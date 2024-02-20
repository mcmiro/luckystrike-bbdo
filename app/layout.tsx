import localFont from 'next/font/local';
import './styles/globals.css';
import './styles/template.css';

const VeloWWangleRegular = localFont({
  src: [
    {
      path: './fonts/VeloWWangle-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/VeloWWangle-Medium.woff2',
      weight: '600',
      style: 'semi-bold',
    },
    {
      path: './fonts/VeloWWangle-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={VeloWWangleRegular.className}>{children}</body>
    </html>
  );
}
