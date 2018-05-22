<template>
  <div class="cluster">
      <vuestic-widget>
        <div class="info-widget-inner">
          <a href="" class="unit-lead">@leaderperson</a>
          <h4>Lorem &nbsp;&nbsp;
            <div @click="openPage('/team/team-x')" title="team-x" class="btn btn-micro btn-primary btn-with-icon rounded-icon"></div>
            <div @click="openPage('/team/team-y')" title="team-y" class="btn btn-micro btn-warning btn-with-icon rounded-icon"></div>
            <div @click="openPage('/team/team-z')" title="team-z" class="btn btn-micro btn-warning btn-with-icon rounded-icon"></div>
          </h4>
        </div>
      </vuestic-widget>
      <vuestic-widget>
        <div class="info-widget-inner">
          <a href="" class="unit-lead">@leaderperson</a>
          <h4>Ipsum &nbsp;&nbsp;
            <div @click="openPage('/team/team-q')" title="team-q" class="btn btn-micro btn-warning btn-with-icon rounded-icon"></div>
          </h4>
        </div>
      </vuestic-widget>
      <vuestic-widget>
        <div class="info-widget-inner">
          <a href="" class="unit-lead">@leaderperson</a>
          <h4>Dolor &nbsp;&nbsp;
            <div @click="openPage('/team/team-u')" title="team-u" class="btn btn-micro btn-primary btn-with-icon rounded-icon"></div>
            <div @click="openPage('/team/team-l')" title="team-l" class="btn btn-micro btn-danger btn-with-icon rounded-icon"></div>
          </h4>
        </div>
      </vuestic-widget>
  </div>
</template>

<script>

  export default {
    name: 'cluster',
    components: {},

    methods: {
      openPage (page) {
        this.$router.push(page)
      }
    }
  }

</script>
<style lang="scss" scoped>
  @import "../../sass/_variables.scss";
  .info-widget-inner > h4 {
    margin: 0;
  }
  .unit-lead {
    float: right;
  }
  .btn.btn-primary {
    box-shadow: none;
  }
</style>
