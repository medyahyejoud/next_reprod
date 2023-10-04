import Link from "next/link";

import { sentenceSplit } from "@/lib/utils";
import { getI18n } from "@/locales/server";

import Button from "./button";
import Container from "./container";
import Heading from "./heading";
import Text from "./text";
import TypedHeading from "./typed-heading";

async function HeroSection() {
  const t = await getI18n();
  const headingString = sentenceSplit(t("home.hero-heading"));

  return (
    <div className="flex bg-hero-pattern-light bg-center pb-24 pt-32 dark:bg-hero-pattern-dark tablet:pt-48 desktop:pb-40 desktop:pt-60">
      <Container>
        <div className="flex flex-col-reverse items-center justify-between tablet:flex-row tablet:items-start">
          <div className="basis-1/2 space-y-5 desktop:space-y-8">
            <div>
              {headingString.map((word, idx, arr) => {
                const lastEl = idx === arr.length - 1;
                return (
                  <Heading className="text-center tablet:text-left" key={word}>
                    {word}{" "}
                    {lastEl ? (
                      // <I18nProviderClient>
                      <TypedHeading
                        strings={[
                          t("home.hero-heading-word-1"),
                          t("home.hero-heading-word-2"),
                          t("home.hero-heading-word-3"),
                          t("home.hero-heading-word-4"),
                        ]}
                      />
                    ) : // </I18nProviderClient>
                    null}
                  </Heading>
                );
              })}
            </div>
            <Text className="max-w-md text-center tablet:max-w-xl tablet:text-left">
              {t("home.hero-text")}
            </Text>
            <div className="flex items-center justify-center tablet:block">
              <Link href="/contact-us">
                <Button>{t("contact-us")}</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
