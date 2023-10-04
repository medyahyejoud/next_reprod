import { setStaticParamsLocale } from "next-international/server";

import BanksSection from "@/components/Sections/banks-section";
import CTASection from "@/components/Sections/cta-section";
import HeroSection from "@/components/Sections/hero-section";
import ProductsSection from "@/components/Sections/products-section";
import ReferencesSection from "@/components/Sections/references-section";
import ServicesSection from "@/components/Sections/services-section";
import type { Locale } from "@/locales";

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setStaticParamsLocale(locale);

  return (
    <>
      <HeroSection />
      <ProductsSection />
      <ServicesSection />
      <BanksSection />
      <ReferencesSection />
      <CTASection />
    </>
  );
}
