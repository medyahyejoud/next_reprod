import { setStaticParamsLocale } from "next-international/server";

import HeroSection from "@/components/hero-section";
import type { Locale } from "@/locales";

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setStaticParamsLocale(locale);

  return <HeroSection />;
}
