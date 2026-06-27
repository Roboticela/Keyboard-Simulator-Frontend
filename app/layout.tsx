import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import Script from 'next/script';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Interactive 3D Keyboard Simulation`,
    template: `%s – ${SITE_NAME}`,
  },
  description:
    'Cross-platform 3D keyboard simulator with real-time typing feedback, five laptop models, animated hands, and eight themes. Free and open source.',
  keywords:
    'keyboard simulator, 3D keyboard, typing tutor, laptop keyboard, keyboard visualization, Tauri, React Three Fiber, education',
  authors: [{ name: 'Roboticela', url: 'https://roboticela.com' }],
  creator: 'Roboticela',
  publisher: 'Roboticela',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    siteName: SITE_NAME,
    locale: 'en_US',
    images: [
      {
        url: '/apple-touch-icon.png',
        width: 180,
        height: 180,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} – Interactive 3D Keyboard Simulation`,
    description:
      'Experience laptop keyboards in stunning 3D with live typing feedback. Free, open source, and cross-platform.',
    images: ['/apple-touch-icon.png'],
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Cross-platform 3D keyboard simulator with real-time typing feedback, five laptop models, animated hands, and eight themes.',
    publisher: {
      '@type': 'Organization',
      name: 'Roboticela',
      url: 'https://roboticela.com',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8NELPL2FXP"
          strategy="lazyOnload"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-8NELPL2FXP');
            `,
          }}
        />
        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9014031373485007"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "viwp403njf");
            `,
          }}
        />
      </body>
    </html>
  );
}
