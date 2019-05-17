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
                  buildHookId: '5cdef56c8b167b018059ffb5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-z3ctjin4',
                  apiId: '1ec852d4-1cf3-4e49-a483-11bf26d7e558'
                },
                {
                  buildHookId: '5cdef56c8b167b017a59ffb6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ahautdv2',
                  apiId: '464dd83b-3d53-428d-8ead-45bc64904aaf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dennzimm/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ahautdv2.netlify.com', category: 'apps'}
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
