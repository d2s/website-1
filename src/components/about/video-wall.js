import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import VideoCard from './video-card'
import work from '../../static/work.png'
import offsite from '../../static/offsite.png'
import teamevent from '../../static/teamevent.png'

export default () => (
  <NamespacesConsumer ns={'about'}>
    {t => (
      <div className="c-video-wall">
        {[work, offsite, teamevent].map((image, i) => {
          return (
            <VideoCard
              key={i.toString()}
              text={t(`life.${i + 1}.text`)}
              image={image}
            />
          )
        })}
      </div>
    )}
  </NamespacesConsumer>
)
