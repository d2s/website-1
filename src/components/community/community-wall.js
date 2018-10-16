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
  return images.map(([image, color, i, lnr]) => {
    let links = [];
    if(lnr > 1) {
      for(let j = 1; j<=lnr; j++) {
        links.push([t(`meet.${i}.link.${j}.link`), t(`meet.${i}.link.${j}.link-text`)])
      }
    } else {
      links.push([t(`meet.${i}.link`), t('meet.link-text')])
    }
    return <CommunityCard
      key={i}
      image={image}
      text={t(`meet.${i}.text`)}
      headline={t(`meet.${i}.headline`)}
      links={ links }
      color={color}
    />
  })
}

export default () => (
  <Wrapper nowrap>
    <NamespacesConsumer ns={'community'}>
      {t => (
        <div className="c-community-wall">
          <div className="c-community-wall__left">
            <div className="c-community-wall__intro">
              <TextBox headline={t('meet.headline')} text={t('meet.tagline')} />
            </div>
            {createCardsFor(
              [[hrintech, 'gray', 4, 1], [techtalk, 'yellow', 3, 2]],
              t
            )}
          </div>
          <div className="c-community-wall__right">
            {createCardsFor([[hive, 'blue', 2, 1], [graphql, 'pink', 1, 1]], t)}
          </div>
        </div>
      )}
    </NamespacesConsumer>
  </Wrapper>
)
