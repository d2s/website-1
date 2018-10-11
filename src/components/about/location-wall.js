import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import Wrapper from '../wrapper'
import LocationCard from './location-card'
import JoinCard from './join-card'
import berlin from '../../static/Schonhauser.png'
import amsterdam from '../../static/Wework.png'

export default () => (
  <NamespacesConsumer ns={'about'}>
    {t => (
      <Wrapper nowrap>
        <div className="c-location-wall">
          {[berlin, amsterdam].map((image, i) => (
            <LocationCard
              key={++i}
              map={image}
              show={t(`where.show`)}
              city={t(`where.${i}.city`)}
              address={t(`where.${i}.street`)}
              link={t(`where.${i}.link`)}
            />
          ))}
          <JoinCard />
        </div>
      </Wrapper>
    )}
  </NamespacesConsumer>
)
