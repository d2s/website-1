import i18n from 'i18next'
import { getCurrentLangKey } from 'ptz-i18n'
import general from '../locales/general.json'
import footer from '../locales/footer.json'
import header from '../locales/header.json'
import seo from '../locales/seo.json'
import index from '../locales/index.json'
import techHiring from '../locales/tech-hiring.json'
import faq from '../locales/faq.json'
import cookie from '../locales/cookie.json'
import about from '../locales/about.json'
import community from '../locales/community.json'

export const languages = ['en', 'de', 'nl', 'es']
const defaultLang = 'en'

// Doesn't exist in some node versions yet.
Object.fromEntries = l => l.reduce((a, [k, v]) => ({ ...a, [k]: v }), {});

const resources = Object.fromEntries(languages.map((shortCode) => {
  const ifExists = function(file) {
    if (file[shortCode]) {
      return file[shortCode];
    } else {
      // FIXME: log missing translations as errors?
      return file.defaultLang;
    }
  };

  const translations = {
    // special case
    general,

    footer: ifExists(footer),
    header: ifExists(header),
    seo: ifExists(seo),
    index: ifExists(index),
    'tech-hiring': ifExists(techHiring),
    faq: ifExists(faq),
    cookie: ifExists(cookie),
    about: ifExists(about),
    community: ifExists(community),
  };

  return [shortCode, translations];
}));

i18n.init({
  lng: defaultLang,
  fallbackLng: defaultLang,
  defaultNS: 'general',
  fallbackNS: 'general',
  resources
})

export default i18n

export function getPath() {
  return typeof window !== 'undefined'
    ? // account for feature stagings
      window.location.pathname
        .replace(/^\/pr-\d+/, '')
        // Always remove trailing slashes
        .replace(/\/$/, '')
    : ''
}

export function getLang() {
  return getCurrentLangKey(languages, defaultLang, getPath())
}

export function getPathLang() {
  return getCurrentLangKey(languages, 'en', getPath())
}
