const listRouter = {
  path: '/list',
  name: 'list',
  meta: {
    title: 'list'
  },
  component: () => import('@/views/List')
}
export default listRouter
