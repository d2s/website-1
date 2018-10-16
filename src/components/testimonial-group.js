import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import SmallTestimonial from './small-testimonial'

export default ({ page, indexes }) => (
  <NamespacesConsumer ns={page}>
    {t => (
      <div className="container">
        <div className="testimonial-group wrapper">
          <h2 className="testimonial-group__headline">
            {t('testimonial.headline')}
          </h2>
          <p className="testimonial-group__tagline">
            {t('testimonial.tagline')}
          </p>
          <div className="testimonial-group__wrapper">
            {indexes.map((input, i) => (
              <div
                key={i.toString()}
                className="testimonial-group__testimonial"
              >
                <SmallTestimonial page={page} index={input} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </NamespacesConsumer>
)
