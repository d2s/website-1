import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import Layout from '../components/layout'
import TextImageWrapper from '../components/text-image-wrapper'
import TextBox from '../components/text-box'
import Testimonial from '../components/testimonial'
import access from '../static/access.png'
import access2x from '../static/access@2x.png'
import hire from '../static/hire.png'
import hire2x from '../static/hire@2x.png'
import visa from '../static/visa.png'
import visa2x from '../static/visa@2x.png'
import skills from '../static/skills.png'
import skills2x from '../static/skills@2x.png'
import employer from '../static/employer.png'
import employer2x from '../static/employer@2x.png'
import PaymentOptions from '../components/tech-hiring/payment-options'
import PositionOverview from '../components/tech-hiring/position-overview'
import julia from '../static/testimonials/Testimonial_Julia.jpg'
import sellin from '../static/testimonials/Testimonial_Selin-Glispa.png'

export default o => {
  const lang = o.pageContext.langKey
  const page = o.pageContext.slug
    .split('/')
    .slice(1, -1)
    .pop()

  return (
    <Layout page={page} lang={lang}>
      <TextImageWrapper
        left
        page="tech-hiring"
        topic="access"
        img={access}
        responsive={true}
      />

      <TextImageWrapper
        page="tech-hiring"
        topic="hire"
        rightImage
        img={hire}
        responsive={true}
      />

      <TextImageWrapper
        page="tech-hiring"
        topic="skills"
        sign
        img={skills}
        responsive={true}
      />

      <Testimonial right={['flip-h']} page="tech-hiring" index={[1, julia]} />

      <TextImageWrapper
        page="tech-hiring"
        topic="visa"
        img={visa}
        responsive={true}
        rightImage
      />

      <PaymentOptions />

      <TextImageWrapper page="tech-hiring" img={employer} responsive={true}>
        <TextBox small page="tech-hiring" topic="employer.1" />
        <TextBox small page="tech-hiring" topic="employer.2" />
        <TextBox small page="tech-hiring" topic="employer.3" />
      </TextImageWrapper>

      <PositionOverview />

      <Testimonial
        left={['flip-v']}
        right={['flip-h']}
        page="tech-hiring"
        index={[2, sellin]}
      />
    </Layout>
  )
}
