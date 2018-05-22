import lazyLoading from './lazyLoading'

export default {
  name: 'Cluster',
  path: '/',
  component: lazyLoading('cluster/Cluster'),
  meta: {
    default: true,
    title: 'menu.cluster',
    iconClass: 'vuestic-icon vuestic-icon-cluster'
  }
}
