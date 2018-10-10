import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import Wrapper from '../wrapper'

export default ({ page }) => (
  <NamespacesConsumer ns={page}>
    {t => (
      <Wrapper nowrap>
        <div className="c-double-text-box">
          <div className="c-double-text-box__left">
            <h3>{t('story.left.headline')}</h3>
            <p>{t('story.left.text')}</p>
          </div>
          <div className="c-double-text-box__seperator" />
          <div className="c-double-text-box__right">
            <h3>{t('story.right.headline')}</h3>
            <p>{t('story.right.text')}</p>
          </div>
        </div>
      </Wrapper>
    )}
  </NamespacesConsumer>
)
