export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f9303c9f6aab7008a0c6ea5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-beta-studio',
                  apiId: 'b9fce70f-55e7-4195-91ea-5cf61a8ca0f5'
                },
                {
                  buildHookId: '5f9303ca0a3951008893a11f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-beta',
                  apiId: '2187c1dc-742b-4200-b26e-fb9a4b726f07'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/netmet12/sanity-nextjs-landing-pages-beta',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-beta.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
