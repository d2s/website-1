import React from 'react'
import Layout from '../components/layout'
import header from '../static/company_invite.svg'

export default o => {
  const lang = o.pageContext.langKey
  return (
    <Layout smallerHeader page="invite" lang={'en'}>
      <div className="container-fluid">
        <div className="container wrapper">
          <div className="company-invite-received">
            <div className="u-text-center">
              <img src={header} />
              <h3 className="company-invite-received__header-heading">
                Thank you for signing up to Honeypot!
              </h3>
              <h4 className="company-invite-received__header-subheading">
                We are reviewing your request and will be in touch shortly.
              </h4>
              <hr className="company-invite-received__header-divider" />
            </div>

            <h4 className="company-invite-received__next-steps">
              The next steps:
            </h4>
            <ol className="step-list company-invite-received__step-list">
              <li className="step-list__item">
                We call you to get to know your hiring needs
              </li>
              <li className="step-list__item">
                You get access to the platform and pre-screened developers
              </li>
              <li className="step-list__item">Start hiring!</li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  )
}
