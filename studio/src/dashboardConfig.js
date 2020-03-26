export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7cd2f6e94bff8548f845bb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ivcw7rz5',
                  apiId: '9705774a-097d-41f3-98a9-0f6cb907ec2b'
                },
                {
                  buildHookId: '5e7cd2f7010dcd777f89460b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-kagtw7d4',
                  apiId: '3f883705-db46-4c3b-8312-93a2788e3194'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mustaphaLounici/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-kagtw7d4.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
