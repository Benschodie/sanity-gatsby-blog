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
                  buildHookId: '5fef121111e18bf14d5aa53a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-hwt42ew8',
                  apiId: '1027c8f9-0c89-4258-8d28-dc5771ad97ac'
                },
                {
                  buildHookId: '5fef121111e18beb895aa75b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tgxquhdn',
                  apiId: '5004a2e3-08de-4ba9-bd32-adb57814bf0f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Benschodie/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tgxquhdn.netlify.app', category: 'apps' }
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
