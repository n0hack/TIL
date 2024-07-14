import { defaultLang, ui, type Language, type UI } from './ui';

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');

  if (lang in ui) return lang as Language;
  return defaultLang;
}

export function useTranslations<L extends Language, C extends keyof UI[L]>(lang: L, category: C) {
  return function t(key: keyof UI[L][C]) {
    return ui[lang][category][key] || (ui[defaultLang] as UI[L])[category][key];
  };
}

export function useTranslatedPath<L extends Language>(lang: L) {
  return function translatePath(path: string, l: string = lang) {
    return `/${l}${path}`;
  };
}
