import React, { Component } from 'react'
import { NamespacesConsumer } from 'react-i18next'
import artboard from '../../static/logos/Artboard.png'
import helpling from '../../static/logos/Helpling.png'
import n26 from '../../static/logos/N26.png'
import onefootball from '../../static/logos/Bitmap.png'
import travis from '../../static/logos/travisCI.png'
import xing from '../../static/logos/Xing.png'
import zenmate from '../../static/logos/Zenmate.png'

const component = 'company-bar'
const companies = [artboard, helpling, n26, onefootball, travis, xing, zenmate]
export default class CompanyBar extends Component {
  render() {
    return (
      <NamespacesConsumer ns={'index'}>
        {t => (
          <div className="company-bar">
            <span className="company-bar__tagline">
              {t(`${component}.tagline`)}
            </span>
            {companies.map((c, i) => (
              <img key={i.toString()} src={c} className="company-bar__logo" />
            ))}
          </div>
        )}
      </NamespacesConsumer>
    )
  }
}
