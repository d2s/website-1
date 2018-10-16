import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import Layout from '../components/layout'
import Wrapper from '../components/wrapper'
import idealRole from '../static/illustration-idealrole.png'
import illustrationProcess from '../static/illustration-process.svg'
import techStack from '../static/illustration-stack.svg'
import location from '../static/illustration-location.svg'
import support from '../static/worth-pic.svg'
import worth from '../static/illustration-worth.svg'
import TextBox from '../components/text-box'
import TextImageWrapper from '../components/text-image-wrapper'
import signUp from '../static/illustration-sign-up.svg'
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

export default () => (
  <Layout>
    <TextImageWrapper page="index" topic="join" img={idealRole} sign />

    <TextImageWrapper img={signUp} rightImage>
      <SignUp />
    </TextImageWrapper>

    <TextImageWrapper page="index" topic="stack" img={techStack} sign />

    <Testimonial left page="index" index={[1, shuhei]} />

    <TextImageWrapper
      page="index"
      topic="location"
      img={location}
      sign
      rightImage
    />

    <TestimonialGroup
      page="index"
      indexes={[[2, emil], [3, veronica], [4, sashen]]}
    />

    <TextImageWrapper page="index" topic="support" img={support} sign />

    <Testimonial left right={['rotate']} page="index" index={[5, peter]} />

    <TextImageWrapper page="index" topic="worth" img={worth} sign rightImage />

    {/*<Newsletter />*/}
  </Layout>
)
