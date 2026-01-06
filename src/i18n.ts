import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales as availableLocales } from './navigation';

export const locales = availableLocales;
export const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
