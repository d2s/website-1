import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import VideoCard from './video-card'
import work from '../../static/work.png'
import offsite from '../../static/offsite.png'
import teamevent from '../../static/teamevent.png'
import links from './video-links.json'

export default () => (
  <NamespacesConsumer ns={'about'}>
    {t => (
      <div className="c-video-wall">
        {[
          ['work', links.work],
          ['offsite', links.offsite],
          ['teamevent', links.teamevent],
        ].map(([name, link], i) => {
          return (
            <VideoCard
              key={i.toString()}
              text={t(`life.${i + 1}.text`)}
              imageName={name}
              link={link}
            />
          )
        })}
      </div>
    )}
  </NamespacesConsumer>
)
