import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import PersonCard from '../person-card'
import felix from '../../static/Advisor_Felix_Plog.jpg'
import torsten from '../../static/Advisor_Torsten.jpg'
import konstantin from '../../static/Advisor_Konstantin.jpg'
import timo from '../../static/Advisor_Timo.jpg'

export default () => (
  <NamespacesConsumer ns={'about'}>
    {t => (
      <div className="c-advisors-wall">
        <div className="c-advisors-wall__wrapper">
          {[felix, konstantin, timo, torsten].map((image, i) => (
            <PersonCard
              key={(++i).toString()}
              image={image}
              name={t(`advisors.${i}.name`)}
              text={t(`advisors.${i}.text`)}
            />
          ))}
        </div>
      </div>
    )}
  </NamespacesConsumer>
)
