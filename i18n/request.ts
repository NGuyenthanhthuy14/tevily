import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';
import { defaultLocale, Locale, locales } from './config';
 
export default getRequestConfig(async () => {
	const cookieStore = await cookies()
	const localeCookie = cookieStore.get("locale")?.value

    const locale: Locale =
        localeCookie && locales.includes(localeCookie as Locale) ? (localeCookie as Locale) : defaultLocale;
  return {
    locale,
    messages: (await import(`@/i18n/messages/${locale}.json`)).default,
  };
});