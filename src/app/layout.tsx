import type { Metadata } from "next";
import { Albert_Sans, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const body = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lapidando Nails | Técnica e Presença Digital",
  description:
    "Uma imersão ao vivo com Chaiane Pasquali para aperfeiçoar sua técnica com Molde F1 e transformar seu trabalho em conteúdo estratégico.",
  openGraph: {
    title: "Lapidando Nails | Técnica e Presença Digital",
    description:
      "Aperfeiçoe sua técnica com Molde F1 e aprenda a valorizar seu trabalho por meio de conteúdos estratégicos.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${body.variable} ${display.variable}`}>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '4617166801835983');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=4617166801835983&ev=PageView&noscript=1" />',
          }}
        />
        {children}
      </body>
    </html>
  );
}
