import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import OpensourceCard from './opensource-card'
import github from '../../static/github-icon.png'
import reina from '../../static/reina-icon.png'
import searchspot from '../../static/searchspot-icon.png'
import CaptionBar from '../caption'

export default () => (
  <div className="container-fluid bg-stripes">
    <NamespacesConsumer ns={'community'}>
      {t => (
        <div>
          <CaptionBar page="community" topic="opensource" />
          <div className="c-opensource-wall">
            {[[searchspot, 671], [reina, 212], [github, 308]].map(
              ([image, stars], i) => (
                <OpensourceCard
                  key={++i}
                  image={image}
                  headline={t(`opensource.${i}.name`)}
                  text={t(`opensource.${i}.text`)}
                  link={t(`opensource.${i}.link`)}
                  link_text={t(`opensource.link-text`)}
                  stars={stars}
                />
              )
            )}
          </div>
        </div>
      )}
    </NamespacesConsumer>
  </div>
)
