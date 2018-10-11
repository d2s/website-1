import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import Wrapper from '../wrapper'
import CommunityCard from './community-card'
import hive from '../../static/hive-logo.png'
import hrintech from '../../static/hrintech-logo.png'
import graphql from '../../static/logo.png'
import techtalk from '../../static/techtalk-logo.png'
import TextBox from './text-box'

function createCardsFor(images, t) {
  return images.map(([image, color], i) => (
    <CommunityCard
      key={++i}
      image={image}
      text={t(`meet.${i}.text`)}
      headline={t(`meet.${i}.headline`)}
      link={t(`meet.${i}.link`)}
      link_text={t(`meet.link-text`)}
      color={color}
    />
  ))
}

export default () => (
  <Wrapper>
    <NamespacesConsumer ns={'community'}>
      {t => (
        <div className="c-community-wall">
          <div className="c-community-wall__left">
            <div className="c-community-wall__intro">
              <TextBox headline={t('meet.headline')} text={t('meet.tagline')} />
            </div>
            {createCardsFor([[hrintech, 'gray'], [techtalk, 'yellow']], t)}
          </div>
          <div className="c-community-wall__right">
            {createCardsFor([[hive, 'blue'], [graphql, 'pink']], t)}
          </div>
        </div>
      )}
    </NamespacesConsumer>
  </Wrapper>
)
