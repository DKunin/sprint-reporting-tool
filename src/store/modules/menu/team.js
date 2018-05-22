import lazyLoading from './lazyLoading'

export default {
  name: 'Team',
  path: '/team/:name',
  component: lazyLoading('team/Team'),
  meta: {
    default: false,
    title: 'menu.team',
    iconClass: ''
  }
}
