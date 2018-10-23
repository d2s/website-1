import React from 'react'
import Layout from '../components/layout'
import getCurrentPage from '../utils/page'

export default ({ data }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
    <Layout smallerHeader page={getCurrentPage()}>
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
