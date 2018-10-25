import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import getCurrentPage from '../utils/page'

export default o => {
  const { markdownRemark } = o.data
  const { html } = markdownRemark
  const lang = o.pageContext.langKey || 'en'
  const page = o.pageContext.slug
    .split('/')
    .slice(1, -1)
    .pop()
  return (
    <Layout smallerHeader page={page} lang={lang}>
      <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
  query TOSQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`
