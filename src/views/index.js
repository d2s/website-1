import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import Layout from '../components/layout'
import Wrapper from '../components/wrapper'
import idealRole from '../static/illustration-idealrole.png'
import idealRole2x from '../static/illustration-idealrole@2x.png'
import illustrationProcess from '../static/illustration-process.svg'
import techStack from '../static/illustration-stack.png'
import techStack2x from '../static/illustration-stack@2x.png'
import location from '../static/illustration-location.png'
import location2x from '../static/illustration-location@2x.png'
import support from '../static/worth-pic.png'
import support2x from '../static/worth-pic@2x.png'
import worth from '../static/illustration-worth.svg'
import worth2x from '../static/illustration-worth@2x.png'
import TextBox from '../components/text-box'
import TextImageWrapper from '../components/text-image-wrapper'
import signUp from '../static/illustration-sign-up.png'
import signUp2x from '../static/illustration-sign-up@2x.png'
import SignUp from '../components/index/sign-up'
import Testimonial from '../components/testimonial'
import Newsletter from '../components/newsletter'
import TestimonialGroup from '../components/testimonial-group'
import sashen from '../static/testimonials/Testimonial_Sashen.jpg'
import shuhei from '../static/testimonials/Testimonial_Honeypot_Shuhei.jpg'
import emil from '../static/testimonials/testimonial_emil.png'
import veronica from '../static/testimonials/Testimonial_Veronica.png'
import peter from '../static/testimonials/Testimonial_Peter_Ringelmann.jpg'

import '../styles/main.scss'

export default o => {
  const lang = o.pageContext.langKey
  const page = o.pageContext.slug
    .split('/')
    .slice(1, -1)
    .pop()
  return (
    <Layout page="index" lang={lang}>
      <TextImageWrapper
        page="index"
        topic="join"
        img={idealRole}
        responsive={true}
        sign
      />

      <TextImageWrapper img={signUp} responsive={true} rightImage>
        <SignUp />
      </TextImageWrapper>

      <TextImageWrapper
        page="index"
        topic="stack"
        img={techStack}
        responsive={true}
        sign
      />

      <Testimonial left page="index" index={[1, shuhei]} />

      <TextImageWrapper
        page="index"
        topic="location"
        img={location}
        responsive={true}
        sign
        rightImage
      />

      <TestimonialGroup
        page="index"
        indexes={[[2, emil], [3, veronica], [4, sashen]]}
      />

      <TextImageWrapper
        page="index"
        topic="support"
        img={support}
        responsive={true}
        sign
      />

      <Testimonial left right={['rotate']} page="index" index={[5, peter]} />

      <TextImageWrapper
        page="index"
        topic="worth"
        img={worth}
        responsive={true}
        sign
        rightImage
      />

      {/*<Newsletter />*/}
    </Layout>
  )
}
