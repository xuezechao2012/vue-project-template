const aboutRouter = {
  path: '/about',
  name: 'about',
  meta: {
    title: 'about'
  },
  component: () => import('@/views/About')
}
export default aboutRouter
