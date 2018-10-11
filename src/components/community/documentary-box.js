import React from 'react'
import TextBox from './text-box'
import { NamespacesConsumer } from 'react-i18next'

export default () =>
  <NamespacesConsumer ns={'community'}>
    {
      t =>
      <div className="c-documentary-box">
        <div className="c-documentary-box__thumbnail">
          <iframe
            width="400"
            height="250"
            src="https://www.youtube.com/embed/lxYFOM3UJzo"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen />
        </div>
        <div className="c-documentary-box__text">
          <TextBox
            headline={ t('documentaries.elixir.headline') }
            text={ t('documentaries.elixir.text') }
            link={ 'http://doc.honeypot.io/elixir-documentary-2018/' }
            link_text={ t('documentaries.elixir.link-text')}
            small
          />
        </div>
      </div>
    }
  </NamespacesConsumer>
