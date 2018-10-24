import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import OpensourceCard from './opensource-card'
import github from '../../static/github-icon.png'
import reina from '../../static/reina-icon.png'
import searchspot from '../../static/searchspot-icon.png'
import CaptionBar from '../caption'

export default () => (
  <div className="container-fluid bg-stripes-os">
    <NamespacesConsumer ns={'community'}>
      {t => (
        <div>
          <CaptionBar page="community" topic="opensource" />
          <div className="c-opensource-wall">
            {[
              [searchspot, 'https://github.com/honeypotio/searchspot'],
              [reina, 'https://github.com/honeypotio/reina'],
              [github, 'https://github.com/honeypotio'],
            ].map(([image, link], i) => (
              <OpensourceCard
                key={++i}
                image={image}
                headline={t(`opensource.${i}.name`)}
                text={t(`opensource.${i}.text`)}
                link={link}
                link_text={t(`opensource.link-text`)}
              />
            ))}
          </div>
        </div>
      )}
    </NamespacesConsumer>
  </div>
)
