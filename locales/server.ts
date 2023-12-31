import { createI18nServer } from "next-international/server";

import fr from "./fr";

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer(
    {
      en: () => import("./en"),
      fr: () => import("./fr"),
    },
    {
      fallbackLocale: fr,
      segmentName: "locale",
    },
  );
