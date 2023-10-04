export const LOCALE_NAMES = {
  en: "English",
  fr: "Français",
} as const;

export const i18n = {
  defaultLocale: "fr",
  locales: Object.keys(LOCALE_NAMES) as (keyof typeof LOCALE_NAMES)[],
} as const;

export type Locale = (typeof i18n)["locales"][number];
