import Image from "next/image";
import Link from "next/link";

import { getI18n } from "@/locales/server";

import { cn, sentenceSplit } from "../../lib/utils";
import HeroImage from "../../public/images/hero-image.png";
import Button from "../button";
import Container from "../container";
import Heading from "../heading";
import Text from "../text";
import TypedHeading from "../typed-heading";

const bubbleSizes = {
  default: "text-sm desktop:text-xl",
  large: "text-lg desktop:text-2xl",
};

type TextBubbleProps = {
  children: React.ReactNode;
  size?: "large" | "default";
  className?: string;
};

function TextBubble({
  children,
  size = "default",
  className = "",
}: TextBubbleProps) {
  return (
    <div
      className={cn(
        "text-2x absolute animate-zoom rounded-large bg-white px-8 py-2 font-display font-bold shadow-meduim dark:bg-dark-gray desktop:px-12 desktop:py-4",
        bubbleSizes[size],
        className,
      )}
    >
      {children}
    </div>
  );
}

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
          <div className="dra relative m-0 w-60 select-none tablet:my-6 tablet:ml-16 tablet:mr-4 desktop:my-12 desktop:mr-12 desktop:w-[360px]">
            <Image
              alt="Hero image representing Next technology products"
              draggable={false}
              src={HeroImage}
            />
            <TextBubble
              className="-left-6 -top-4 desktop:-left-10 desktop:-top-6"
              size="large"
            >
              DigiPay
            </TextBubble>
            <TextBubble className="animation-delay-2000 -right-2 top-6">
              Flow
            </TextBubble>
            <TextBubble
              className="animation-delay-4000 -left-8 top-20 desktop:-left-14 desktop:top-28"
              size="large"
            >
              FastPay
            </TextBubble>
            <TextBubble className="-right-10 top-[88px] desktop:-right-8 desktop:top-32">
              CashApp
            </TextBubble>
            <TextBubble
              className="animation-delay-2000 -right-6 bottom-10 desktop:-right-8 desktop:bottom-16"
              size="large"
            >
              NexConnect
            </TextBubble>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
