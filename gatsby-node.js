const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                langKey
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/text-page.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
            langKey: node.fields.langKey,
          },
        })
      })
      resolve()
    })
  })
}

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig()

  const imageRule = config.module.rules.find(
    rule =>
      String(rule.test) === `/\\.(ico|svg|jpg|jpeg|png|gif|webp)(\\?.*)?$/`
  )
  imageRule.use[0].options.name = imageRule.use[0].options.name.replace(
    '-[hash]',
    ''
  )
}
