export const languages = {
  en: 'EN',
  vi: 'VI',
};

export const defaultLang = 'en';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function getTranslatedPath(pathname: string, lang: string) {
  const segments = pathname.split('/');
  if (segments[1] === 'en' || segments[1] === 'vi') {
    segments[1] = lang;
    return segments.join('/') || '/';
  }
  return `/${lang}${pathname === '/' ? '' : pathname}`;
}
