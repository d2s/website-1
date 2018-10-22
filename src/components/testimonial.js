import React from 'react'
import SideBackground from './side-bg'
import { NamespacesConsumer } from 'react-i18next'

const injectHTML = (t, index) =>
  // Because we need to be able to set a newline (\n) in the translation file
  // we postprocess the output and replace the newline with a break element
  // (<br />).
  ({ __html: t(`testimonial.${index}.position`).replace(/\n/g, '<br />') })

export default ({ index: [nr, image], page, left, right }) => {
  if (left) {
    left = Array.isArray(left) ? left : ['left']
  }
  if (right) {
    right = Array.isArray(right) ? right : ['right']
  }
  return (
    <NamespacesConsumer ns={page}>
      {t => (
        <div className="testimonial-wrapper">
          {left && <SideBackground settings={['left', page, ...left]} />}
          {right && <SideBackground settings={['right', page, ...right]} />}
          <div className="testimonial wrapper">
            <div className="testimonial__text">
              "{t(`testimonial.${nr}.text`)}"
            </div>
            <div className="testimonial__person">
              <img className="testimonial__avatar" src={image} />
              <div className="testimonial__description">
                <div>
                  <p className="testimonial__name">
                    {t(`testimonial.${nr}.name`)}
                  </p>
                </div>
                <div className="testimonial__position">
                  <p dangerouslySetInnerHTML={injectHTML(t, nr)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </NamespacesConsumer>
  )
}
