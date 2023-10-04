import { createI18nMiddleware } from "next-international/middleware";
import type { NextRequest } from "next/server";

import { i18n } from "./locales";

const I18nMiddleware = createI18nMiddleware({
  ...i18n,
  urlMappingStrategy: "rewriteDefault",
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
