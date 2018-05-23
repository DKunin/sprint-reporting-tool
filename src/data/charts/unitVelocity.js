import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      label: 'team x',
      backgroundColor: palette.primary,
      data: [22, 25, 30]
    },
    {
      label: 'team y',
      backgroundColor: palette.info,
      data: [18, 24, 20]
    },
    {
      label: 'team z',
      backgroundColor: palette.lighterGray,
      data: [40, 41, 42]
    }
  ]
}
