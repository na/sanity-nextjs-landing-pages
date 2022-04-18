export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '625dbe6aec90cc005f0dd1d8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kcg6113v',
                  apiId: '1d25371c-abb5-4ab7-b792-31ef64155908'
                },
                {
                  buildHookId: '625dbe6aec90cc005f0dd1d9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bx6ch4qp',
                  apiId: '4ed41b61-f101-460c-9927-00036729473c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/na/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bx6ch4qp.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
