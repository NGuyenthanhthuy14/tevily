export const locales = ["vi", "en"] as const
export const defaultLocale = "en" as const;

export type Locale = (typeof locales)[number];
