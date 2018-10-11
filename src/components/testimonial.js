import React from 'react'
import SideBackground from './side-bg'
import { NamespacesConsumer } from 'react-i18next'

const injectHTML = (t, index) =>
  // Because we need to be able to set a newline (\n) in the translation file
  // we postprocess the output and replace the newline with a break element
  // (<br />).
  ({ __html: t(`testimonial.${index}.position`).replace(/\n/g, '<br />') })

export default ({ index, page, left, right }) => {
  left = Array.isArray(left) ? left : [left]
  right = Array.isArray(right) ? right : [right]
  return (
    <NamespacesConsumer ns={page}>
      {t => (
        <div className="testimonial-wrapper">
          {left && <SideBackground settings={['left', page, ...left]} />}
          {right && <SideBackground settings={['right', page, ...right]} />}
          <div className="testimonial wrapper">
            <div className="testimonial__text">
              "{t(`testimonial.${index}.text`)}"
            </div>
            <div className="testimonial__person">
              <img
                className="testimonial__avatar"
                src={t(`testimonial.${index}.image`)}
              />
              <div className="testimonial__description">
                <div className="testimonial__name">
                  <p>{t(`testimonial.${index}.name`)}</p>
                </div>
                <div className="testimonial__position">
                  <p dangerouslySetInnerHTML={injectHTML(t, index)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </NamespacesConsumer>
  )
}
