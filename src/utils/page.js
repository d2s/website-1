import { getPath, getLang, getPathLang } from './i18n'

export default function getCurrentPage() {
  const path = getPath()
  const parts = path.split('/')
  const last = parts.pop()
  if (last.length > 1 && last !== getLang()) {
    return last
  }
  return 'index'
}

export function getLinkTo(page) {
  const lang = getPathLang()
  const prefix = lang ? lang + '/' : lang
  return prefix + page
}

export function grabUrlParams() {
  const urlParams = window.location.search;
  document.querySelector('.js-signup').href += urlParams;
}