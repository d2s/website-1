import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import Wrapper from '../wrapper'
import LocationCard from './location-card'
import JoinCard from './join-card'
import berlin from '../../static/Map_Germany.png'
import amsterdam from '../../static/Map_Netherlands.png'
import links from './location-links.json'
const images = { berlin, amsterdam }

export default () => (
  <NamespacesConsumer ns={'about'}>
    {t => (
      <Wrapper nowrap>
        <div className="c-location-wall">
          {['berlin', 'amsterdam'].map((name, i) => (
            <LocationCard
              key={++i}
              map={images[name]}
              show={t(`where.show`)}
              city={t(`where.${i}.city`)}
              address={t(`where.${i}.street`)}
              link={links[name]}
            />
          ))}
          <JoinCard />
        </div>
      </Wrapper>
    )}
  </NamespacesConsumer>
)
