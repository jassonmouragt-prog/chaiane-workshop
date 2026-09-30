import type { Metadata } from "next";
import { Albert_Sans, Manrope } from "next/font/google";
import { Suspense } from "react";
import { MetaPixel } from "@/components/meta-pixel";
import { META_PIXEL_ID } from "@/lib/meta-pixel";
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
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1" />`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
