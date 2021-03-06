import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import PositionCard from './position-card'
import dev from '../../static/software-devs.svg'
import expert from '../../static/data-experts.svg'
import talent from '../../static/product-talents.svg'
import lead from '../../static/engineering-lead.svg'

export default () => (
  <NamespacesConsumer ns={'tech-hiring'}>
    {t => (
      <div className="position-overview">
        <h2 className="position-overview__headline center">
          {t('position.headline')}
        </h2>
        <div className="position-overview__wrapper">
          {[dev, talent, lead, expert].map((i, k) => (
            <div key={k.toString()} className="position-overview__item">
              <PositionCard image={i} index={k + 1} />
            </div>
          ))}
        </div>
      </div>
    )}
  </NamespacesConsumer>
)
