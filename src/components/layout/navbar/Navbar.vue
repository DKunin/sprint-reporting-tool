<template>
  <nav class="navbar app-navbar navbar-toggleable-md">

    <div class="navbar-brand-container d-flex align-items-center justify-content-start">
      <router-link class="navbar-brand" to="/">
        Sprint reporting tool
      </router-link>
    </div>

    <div class="row navbar-container">

      <div v-if="false" class="menu-icon-container d-flex align-items-center justify-content-center justify-content-lg-start col">
      </div>

      <div class="navbar-text offset-md-1 col-md-7 d-none d-lg-flex align-items-center justify-content-center">
        
      </div>

      <div class="col nav-item d-flex align-items-center justify-content-center">
        <a class="nav-link d-flex align-items-center justify-content" href="#/settings">
          <span class="vuestic-icon vuestic-icon-settings"></span>
        </a>
      </div>

    </div>
  </nav>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import LanguageSelector from './LanguageSelector'

  export default {
    name: 'navbar',

    components: {
      LanguageSelector
    },

    data () {
      return {
        langs: [
          {
            code: 'gb',
            name: 'english'
          },
          {
            code: 'es',
            name: 'spanish'
          }
        ]
      }
    },

    computed: {
      ...mapGetters([
        'sidebarOpened',
        'toggleWithoutAnimation'
      ])
    },

    methods: {
      ...mapActions([
        'closeMenu',
        'toggleSidebar',
        'isToggleWithoutAnimation'
      ])
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";
  @import "~bootstrap/scss/mixins/breakpoints";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";

  .navbar {
    .layout-fixed & {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1;
    }
  }

  .navbar.app-navbar {
    .navbar-container {
      width: 100%;
      height: 100%;
      margin: 0;
    }

    height: $top-nav-height;
    padding-left: $nav-padding-left;
    padding-right: $nav-padding-right;
    background-color: $top-nav-bg;

    .avatar-container {
      display: inline-block;
      width: 50px;
      height: 50px;
      background-color: white;
      border-radius: 50%;
      border: 2px solid $lighter-gray;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .menu-icon-container {
      padding: 0;
      font-size: $font-size-base;
    }

    .navbar-brand-container {
      position: absolute;
      z-index: 3;
      height: 100%;
      left: $navbar-brand-container-left;
      top: 0;
    }

    .nav-item {
      padding: 0;
      height: 100%;
    }

    .i-nav-notification.notify::after {
      right: -4px;
      top: 0;
    }

    @include media-breakpoint-down(md) {
      height: $top-mobile-nav-height;
      padding: $nav-mobile-pt $nav-mobile-padding-h $nav-mobile-pb $nav-mobile-padding-h;

      .navbar-brand-container {
        width: $nav-mobile-brand-width;
        top: $nav-mobile-brand-top;
        left: $nav-mobile-brand-left;
        height: auto;
        .navbar-brand {
          height: $font-size-smaller;
          padding: 0;
          font-size: $font-size-smaller;
        }
      }

    }
  }
</style>
