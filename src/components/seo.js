import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { NamespacesConsumer } from 'react-i18next'
import getCurrentPage from '../utils/page'
import { withPrefix } from 'gatsby'

export default ({ page }) => {
  let image = 'default-og.png'
  if (page === 'about' || page === 'community') {
    image = `${page}-og.jpg`
  }
  return (
    <NamespacesConsumer ns={'seo'}>
      {t => (
        <Helmet>
          <title>{t(`${page}.title`)}</title>
          <meta name="description" content={t(`${page}.description`)} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={t(`${page}.og-title`)} />
          <meta
            property="og:description"
            content={t(`${page}.og-description`)}
          />
          <meta property="og:image" content={withPrefix(image)} />
          <meta property="og:image:alt" content={t(`${page}.og-image-alt`)} />
        </Helmet>
      )}
    </NamespacesConsumer>
  )
}
