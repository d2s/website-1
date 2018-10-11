import React from 'react'
import Layout from '../components/layout'
import '../styles/main.scss'
import CommunityWall from '../components/community/community-wall'
import CaptionBar from '../components/caption'
import OpensourceWall from '../components/community/opensource-wall'

export default () => (
  <Layout smallerHeader>
    <CommunityWall />

    <CaptionBar page="community" topic="documentaries" />

    <OpensourceWall />
  </Layout>
)
