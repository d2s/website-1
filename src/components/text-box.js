import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import Link from 'gatsby-link'
import arrow from '../static/arrow_blue.svg'

export default ({ page, topic, sign, small }) => {
  const headline = `text-box__headline text-box__headline--${
    small ? 'small' : ''
  }`
  return (
    <NamespacesConsumer ns={page}>
      {t => (
        <div className="text-box">
          <h2 className={headline}>{t(`${topic}.headline`)}</h2>
          <p className="text-box__text">{t(`${topic}.text`)}</p>
          {sign && (
            <a
              className="text-link text-link--blue text-link--arrow"
              href="http://www.honeypot.io/users/sign_up"
            >
              {t('sign-up')}
            </a>
          )}
        </div>
      )}
    </NamespacesConsumer>
  )
}
