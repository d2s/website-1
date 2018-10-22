import React, { Component } from 'react'
import { NamespacesConsumer } from 'react-i18next'
import { getLang } from '../../utils/i18n'
import zalando from '../../static/logos/Zalando_Logo.png'
import helpling from '../../static/logos/Helpling.png'
import n26 from '../../static/logos/N26_Logo.png'
import onefootball from '../../static/logos/Onefootball_Logo.png'
import travis from '../../static/logos/TravisCI_Logo.png'
import xing from '../../static/logos/Xing.png'
import zenmate from '../../static/logos/Zenmate_Logo.png'
import adyen from '../../static/logos/Adyen_Logo.png'
import hey from '../../static/logos/Hey_Car_Logo.png'
import dept from '../../static/logos/Dept_Logo.png'
import pro from '../../static/logos/ProSieben_Logo.png'
import pay from '../../static/logos/Payconiq_Logo.png'
import uw from '../../static/logos/United_Wardrobe_Logo.png'
import fp from '../../static/logos/Foodpanda_Logo.png'
import app from '../../static/logos/AppLift_Logo.png'
import imp from '../../static/logos/Impraise_Logo.png'
import pub from '../../static/logos/PubNative_Logo.png'
import exact from '../../static/logos/ExactLive_Logo.png'
import cata from '../../static/logos/CataWiki_Logo.png'
import ev from '../../static/logos/Engels_Voelkers_Logo.png'
import threed from '../../static/logos/3DHubs_Logo.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.scss'

const component = 'company-bar'
const companies = [
  zalando,
  helpling,
  n26,
  onefootball,
  travis,
  xing,
  zenmate,
  adyen,
  hey,
  dept,
  pro,
  pay,
  uw,
  fp,
  app,
  imp,
  pub,
  exact,
  cata,
  ev,
]
const settings = {
  slidesToShow: 6,
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
}
const companies_index = [zalando, travis, cata, adyen, n26, pro, onefootball]
const companies_nl = [cata, adyen, threed, travis, n26, zalando, uw]
export default ({ page }) => {
  const index_comp = getLang() === 'nl' ? companies_nl : companies_index
  return (
    <NamespacesConsumer ns={'index'}>
      {t => (
        <div className="company-bar">
          <div className="company-bar__tagline">
            {t(`${component}.tagline`)}
          </div>
          {(page === 'tech-hiring' && (
            <Slider {...settings}>
              {companies.map((c, i) => (
                <div key={i}>
                  <img src={c} className="company-bar__logo" />
                </div>
              ))}
            </Slider>
          )) || (
            <div className="company-bar__logos">
              {index_comp.map((c, i) => (
                <div key={i}>
                  <img src={c} className="company-bar__logo" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </NamespacesConsumer>
  )
}
