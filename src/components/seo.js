import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { NamespacesConsumer } from 'react-i18next'
import getCurrentPage from '../utils/page'

export default ({ page }) => {
  return (
    <NamespacesConsumer ns={'seo'}>
      {t => (
        <Helmet>
          <title>{t(`${page}.title`)}</title>
          <meta name="description" content={t(`${page}.description`)} />
        </Helmet>
      )}
    </NamespacesConsumer>
  )
}
