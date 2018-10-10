import { getPath, getLang, getPathLang } from './i18n'

export default function getCurrentPage() {
  const path = getPath()
  const parts = path.split('/')
  const last = parts.pop()
  if (parts.length > 1 && last !== getLang()) {
    return last
  }
  return 'index'
}

export function getLinkTo(page) {
  const lang = getPathLang()
  const prefix = lang ? lang + '/' : lang
  return prefix + page
}
