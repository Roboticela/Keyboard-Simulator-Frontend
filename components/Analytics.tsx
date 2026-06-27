'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const enable = () => setEnabled(true);

    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(enable, { timeout: 5000 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = window.setTimeout(enable, 3500);
    return () => window.clearTimeout(timer);
  }, []);

  if (!enabled) return null;

  return (
    <>
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
    </>
  );
}
