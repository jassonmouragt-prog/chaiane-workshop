"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { META_PIXEL_ID } from "@/lib/meta-pixel";

type PixelWindow = Window & {
  fbq?: (command: "trackSingle", pixelId: string, event: "PageView") => void;
};

export function MetaPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [ready, setReady] = useState(false);
  const lastPageView = useRef<string | null>(null);
  const query = searchParams.toString();
  const pageUrl = query ? `${pathname}?${query}` : pathname;

  useEffect(() => {
    const fbq = (window as PixelWindow).fbq;
    if (!ready || !pathname || !fbq) return;

    function trackPageView() {
      const query = new URLSearchParams(window.location.search).toString();
      const url = query ? `${window.location.pathname}?${query}` : window.location.pathname;
      if (lastPageView.current === url) return;

      // Hash-only links and repeated renders are not new page views.
      lastPageView.current = url;
      fbq?.("trackSingle", META_PIXEL_ID, "PageView");
    }

    trackPageView();
    // Native anchor history entries may not contain Next.js router state.
    window.addEventListener("popstate", trackPageView);
    return () => window.removeEventListener("popstate", trackPageView);
  }, [ready, pathname, pageUrl]);

  return (
    <Script
      id="meta-pixel"
      strategy="afterInteractive"
      onReady={() => setReady(true)}
    >
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq.disablePushState = true;
        fbq('init', '${META_PIXEL_ID}');
      `}
    </Script>
  );
}
