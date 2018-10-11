import React from 'react'
import Layout from '../components/layout'
import '../styles/main.scss'
import CommunityWall from '../components/community/community-wall'
import CaptionBar from '../components/caption'

export default () => (
  <Layout smallerHeader>
    <CommunityWall />

    <CaptionBar page="community" topic="documentaries" />

    <CaptionBar page="community" topic="open-source" />
  </Layout>
)
