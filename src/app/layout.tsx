<<<<<<< HEAD
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CATA TSA',
  description: 'Technology Student Association at Central Academy of Technology and Arts - Innovating the Future, Today.',
  icons: {
    icon: '/images/tsa-logo.png',
    shortcut: '/images/tsa-logo.png',
    apple: '/images/tsa-logo.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
=======
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CATA TSA",
  description: "CATA TSA Website",
>>>>>>> 8d5a374 (Initial commit: CATA TSA Next.js project)
};

export default function RootLayout({
  children,
<<<<<<< HEAD
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="icon" href="/images/tsa-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/images/tsa-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/tsa-logo.png" />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
=======
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
>>>>>>> 8d5a374 (Initial commit: CATA TSA Next.js project)
