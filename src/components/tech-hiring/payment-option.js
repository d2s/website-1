import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import i18n, { getLang } from '../../utils/i18n'
const ns = 'tech-hiring'

export default ({ option, modifier }) => {
  const lang = getLang()
  // Get the whole list of options as object
  const list = i18n.getResource(lang, ns, `payment-options.${option}.list`)
  // Get its keys to iterate over all possible entries
  const keys = Object.keys(list || {})
  return (
    <NamespacesConsumer ns={ns}>
      {t => (
        <div className="payment-option">
          <p
            className={`payment-option__name payment-option__name--${modifier}`}
          >
            {t(`payment-options.${option}.name`)}
          </p>
          <h3 className="payment-option__tagline">
            {t(`payment-options.${option}.tagline`)}
          </h3>
          <hr className="payment-option__divider" />
          <ul
            className={`payment-option__list payment-option__list--${modifier}`}
          >
            {keys &&
              keys.map(i => (
                <li className="payment-option__list-item" key={i.toString()}>
                  {t(`payment-options.${option}.list.${i}`)}
                </li>
              ))}
          </ul>
          <a
            href="/invite_requests/new"
            target="_blank"
            rel="noopener
            noreferrer"
            className={`button button--${modifier} payment-option__start`}
          >
            {t(`payment-options.${option}.start`)}
          </a>
        </div>
      )}
    </NamespacesConsumer>
  )
}
