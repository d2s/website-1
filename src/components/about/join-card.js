import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import bear from '../../static/employees/Bearpot_Team.jpg'

export default () => (
  <NamespacesConsumer ns={'about'}>
    {t => (
      <div className="c-join-card c-card">
        <img className="c-join-card__image" src={bear} />
        <h4 className="c-join-card__text">{t('join.text')}</h4>
        <a
          target="_blank"
          rel="noopener
          noreferrer"
          href="https://jobs.lever.co/honeypot"
          className="button button--blue c-join-card__link"
        >
          {t('join.show')}
        </a>
      </div>
    )}
  </NamespacesConsumer>
)
