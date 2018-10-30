import React from 'react'
import Layout from '../components/layout'
import CommunityWall from '../components/community/community-wall'
import CaptionBar from '../components/caption'
import OpensourceWall from '../components/community/opensource-wall'
import DocumentaryBox from '../components/community/documentary-box'
import CommunityHeader from '../components/community/community-header.js'
import ArticlesWall from '../components/community/articles-wall'

export default o => {
  const lang = o.pageContext.langKey
  return (
    <Layout smallerHeader page="community" lang={lang}>
      <CommunityHeader />

      <CommunityWall />

      <CaptionBar page="community" topic="documentaries" />

      <DocumentaryBox />

      <OpensourceWall />

      <ArticlesWall />
    </Layout>
  )
}
