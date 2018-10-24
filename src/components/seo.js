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
          <meta name="og:title" content={t(`${page}.og-title`)} />
          <meta name="og:description" content={t(`${page}.og-description`)} />
          <meta name="og:image" content={withPrefix(image)} />
          <meta name="og:image:alt" content={t(`${page}.og-image-alt`)} />
        </Helmet>
      )}
    </NamespacesConsumer>
  )
}
