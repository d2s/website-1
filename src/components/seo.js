import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { NamespacesConsumer } from 'react-i18next'
import getCurrentPage from '../utils/page'
import { getLang } from '../utils/i18n'
import { withPrefix } from 'gatsby'
import { vmoScripts } from './vwo-scripts'

 const injectMarketingScripts = () => {
  if (process.env.INCLUDE_MARKETING_SCRIPTS !== "true") {
    return null;
  };
  // all marketing prod scripts go here
  return (
    <script src="https://bae46957d1da4ad39e84912610a75c6d.js.ubembed.com" async></script>
  );
 }

export default ({ page, lang }) => {
  let image = 'default-og.png'
  if (page === 'about' || page === 'community') {
    image = `${page}-og.jpg`
  }
  const pageTitle = page === 'index' ? '' : page
  const langs = ['en', 'de', 'nl'].filter(l => l !== lang)
  return (
    <NamespacesConsumer ns={'seo'}>
      {t => (
        <Helmet>
          <html lang={lang} />
          <title>{t(`${page}.title`)}</title>
          {/* <link rel="shortcut icon" type="image/svg" href="/favicon.svg" /> */}
          {langs.map(l => (
            <link
              key={l}
              rel="alternate"
              href={`/${l}/${pageTitle}`}
              hrefLang={l}
            />
          ))}
          <meta name="description" content={t(`${page}.description`)} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={t(`${page}.og-title`)} />
          <meta property="og:url" content={`/${lang}/${pageTitle}`} />
          <meta
            property="og:description"
            content={t(`${page}.og-description`)}
          />
          <meta property="og:image" content={`/${image}`} />
          <meta property="og:image:alt" content={t(`${page}.og-image-alt`)} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:image" content={`/${image}`} />
          <meta
            property="twitter:description"
            content={t(`${page}.og-description`)}
          />
          <meta property="twitter:title" content={t(`${page}.og-title`)} />
          <meta name="google-site-verification" content="y7RH4nna34BHMme9iRo-fSyKxXNTp6_k5ghKEaKY0bI" />
          <meta name="msvalidate.01" content="7B285FD20E71ED936D884CFB9D360466" />
          { injectMarketingScripts() }
          {process.env.GATSBY_VWO_ID ? vmoScripts.map((content, i) => (
            <script type="text/javascript" key={i}>{content}</script>
          )) : null}
        </Helmet>
      )}
    </NamespacesConsumer>
  )
}
