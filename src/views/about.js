import React from 'react'
import Layout from '../components/layout'
import TextImageWrapper from '../components/text-image-wrapper'
import CaptionBar from '../components/caption'
import DoubleTextBox from '../components/about/double-text-box'
import header from '../static/about.header.png'
import success from '../static/img-success.png'
import care from '../static/we-care-too.png'
import TeamPicture from '../components/about/team-picture'
import VideoWall from '../components/about/video-wall'
import AdvisorsWall from '../components/about/advisors-wall'
import NewsText from '../components/about/news-text'
import CareText from '../components/about/care-text'
import EmployeeWall from '../components/about/employee-wall'
import LocationWall from '../components/about/location-wall'

import '../styles/main.scss'

export default () => (
  <Layout smallerHeader>
    <TextImageWrapper img={header}>
      <h1 className="c-about-header">
        Life at
        <br />
        <b>Honeypot</b>
      </h1>
    </TextImageWrapper>

    <DoubleTextBox page="about" />

    <TeamPicture />

    <CaptionBar page="about" topic="life" />

    <VideoWall />

    <CaptionBar page="about" topic="team" />

    <EmployeeWall />

    <CaptionBar page="about" topic="advisors" />

    <AdvisorsWall />

    <TextImageWrapper img={success} imageRight>
      <NewsText />
    </TextImageWrapper>

    <TextImageWrapper img={care}>
      <CareText />
    </TextImageWrapper>

    <CaptionBar page="about" topic="where" />

    <LocationWall />
  </Layout>
)
