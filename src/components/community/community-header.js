import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import Wrapper from '../wrapper'
import header from '../../static/community-collage.png'
import header2 from '../../static/community-mobile.header.png'

export default () => (
  <Wrapper>
    <NamespacesConsumer ns={'community'}>
      {t => (
        <div className="c-community-header">
          <h1 className="c-community-header__headline">
            {t('headline.1')}
            <br />
            <b>{t('headline.2')}</b>
          </h1>
          <img className="c-community-header__image" src={header} />
          <img className="c-community-header__image2" src={header2} />
        </div>
      )}
    </NamespacesConsumer>
  </Wrapper>
)
