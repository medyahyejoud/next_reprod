import clsx from "clsx";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";

import { getI18n, getStaticParams } from "@/locales/server";

import "./globals.css";

export function generateStaticParams() {
  return getStaticParams();
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: t("meta-title"),
    description: t("meta-description"),
  };
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body
        className={clsx(
          "bg-light-gray font-body text-black selection:bg-primary selection:text-white dark:bg-black dark:text-white dark:selection:bg-primary-400 dark:selection:text-black",
          inter.className,
          sora.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
