import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { Locale } from "@/locales";

export const setCookie = (locale: Locale) => {
  document.cookie = `NEXT_LOCALE=${locale}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
};

export const sentenceSplit = (str: string, sliceOn = 1) => {
  if (typeof str !== "string" || typeof sliceOn !== "number") return [];

  const strArray = str.split(" ");
  const firstPart = strArray.slice(0, sliceOn);
  const secondPart = strArray.slice(sliceOn, strArray.length);

  return [firstPart.join(" "), secondPart.join(" ")];
};

export const getMaxLogoWidth = (
  width: number,
  height: number,
  area: number,
) => {
  const maxWidth = Math.round(width * Math.sqrt(area / (width * height)));
  return maxWidth;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
