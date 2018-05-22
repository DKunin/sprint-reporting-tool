import lazyLoading from './lazyLoading'

export default {
  name: 'SingleTeam',
  path: '/singleteam/:name',
  component: lazyLoading('singleteam/singleteam'),
  meta: {
    default: true,
    title: 'menu.cluster'
  }
}
