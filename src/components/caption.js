import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import Wrapper from './wrapper'

export default ({ page, topic }) => (
  <NamespacesConsumer ns={page}>
    {t => (
      <Wrapper>
        <div className="c-caption">
          <h2>{t(`${topic}.headline`)}</h2>
          <p>{t(`${topic}.tagline`)}</p>
        </div>
      </Wrapper>
    )}
  </NamespacesConsumer>
)
