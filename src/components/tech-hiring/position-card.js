import React from 'react'
import { NamespacesConsumer } from 'react-i18next'

export default ({ image, index }) => (
  <NamespacesConsumer ns={'tech-hiring'}>
    {t => (
      <div className="position-card center">
        <img className="position-card__icon" src={image} />
        <h4 className="position-card__headline">
          {t(`position.${index}.headline`)}
        </h4>
        <p className="position-card__text">{t(`position.${index}.text`)}</p>
      </div>
    )}
  </NamespacesConsumer>
)
