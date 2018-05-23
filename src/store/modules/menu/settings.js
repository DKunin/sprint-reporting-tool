import lazyLoading from './lazyLoading.js'

export default {
  name: 'settings',
  meta: {
    title: 'menu.settings',
    iconClass: ''
  },
  path: '/settings',
  component: lazyLoading('settings/Settings')
}
