import React from 'react'
import TextBox from './text-box'
import { NamespacesConsumer } from 'react-i18next'

export default () => (
  <NamespacesConsumer ns={'community'}>
    {t => (
      <div className="c-documentary-box">
        <div className="c-documentary-box__thumbnail">
          <iframe
            src="https://www.youtube.com/embed/lxYFOM3UJzo"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <div className="c-documentary-box__text">
          <TextBox
            headline={t('documentaries.elixir.headline')}
            text={t('documentaries.elixir.text')}
            links={[
              [
                'http://doc.honeypot.io/elixir-documentary-2018/',
                t('documentaries.elixir.link-text'),
              ],
            ]}
            small
          />
        </div>
      </div>
    )}
  </NamespacesConsumer>
)
