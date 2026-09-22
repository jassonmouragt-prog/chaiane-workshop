import type { Metadata } from "next";
import { Albert_Sans, Manrope } from "next/font/google";
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
  title: "Workshop Molde F1 | Chaiane Pasquali",
  description:
    "Uma imersão ao vivo para aperfeiçoar sua técnica com Molde F1 e transformar seu trabalho em conteúdo estratégico.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${body.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
