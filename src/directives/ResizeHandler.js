import store from 'vuex-store'

export default {
  inserted: function (el) {
    el.addEventListener('transitionend', function () {
      store.dispatch('isToggleWithoutAnimation', false)
    })
  }
}

