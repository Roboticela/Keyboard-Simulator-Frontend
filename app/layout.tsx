import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${SITE_NAME} – Interactive 3D Keyboard Simulation`,
  description:
    'Cross-platform 3D keyboard simulator with real-time typing feedback, five laptop models, animated hands, and eight themes. Free and open source.',
  keywords:
    'keyboard simulator, 3D keyboard, typing tutor, laptop keyboard, keyboard visualization, Tauri, React Three Fiber, education',
  authors: [{ name: 'Roboticela' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: `${SITE_NAME} – Interactive 3D Keyboard Simulation`,
    description:
      'Experience laptop keyboards in stunning 3D with live typing feedback. Free, open source, and cross-platform.',
    type: 'website',
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
