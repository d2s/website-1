import React from 'react'
import { NamespacesConsumer } from 'react-i18next'

export default ({ index: [nr, image], page }) => (
  <NamespacesConsumer ns={page}>
    {t => (
      <div className="small-testimonial">
        <img className="small-testimonial__avatar" src={image} />
        <h4 className="small-testimonial__name">
          {t(`testimonial.${nr}.name`)}
        </h4>
        <p className="small-testimonila__position">
          {t(`testimonial.${nr}.position`)}
        </p>
        <p className="small-testimonial__text">
          "{t(`testimonial.${nr}.text`)}"
        </p>
      </div>
    )}
  </NamespacesConsumer>
)
