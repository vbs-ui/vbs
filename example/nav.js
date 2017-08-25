import components from './components'
export default [
  {
    group: 'Getting started',
    children: [
      { name: 'Introduction', link: 'getting-started/introduction' },
      { name: 'Bootstrap', link: 'getting-started/bootstrap' }
    ]
  },
  {
    group: 'Layout',
    children: [
      { name: 'Overview', link: 'layout/overview' }
    ]
  },
  {
    group: 'Components',
    children: components.map(comp => {
      return { name: comp.name, link: `/components/${comp.link}` }
    })
  }
]
