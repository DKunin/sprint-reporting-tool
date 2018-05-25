<template>
  <div class="cluster">
      <vuestic-widget class="no-padding no-v-padding">
        <div class="info-widget-inner">
          <h4 @click="openPage('/team/team-x')">Unit: Lorem </h4>
          <div class="team-statuses">
            <div class="team-status">
              Team X: <div @click="openPage('/team/team-x')" title="team-x" class="btn btn-micro btn-primary btn-with-icon rounded-icon"></div></div>
            <div class="team-status">
              Team Y: <div @click="openPage('/team/team-y')" title="team-y" class="btn btn-micro btn-warning btn-with-icon rounded-icon"></div></div>
            <div class="team-status">
              Team Z: <div @click="openPage('/team/team-z')" title="team-z" class="btn btn-micro btn-warning btn-with-icon rounded-icon"></div></div>
          </div>
          
          <a href="" class="unit-lead">@leaderperson</a>
        </div>
      </vuestic-widget>
      <vuestic-widget class="no-padding no-v-padding">
        <div class="info-widget-inner">
          <h4 @click="openPage('/team/team-y')">Unit: Ipsum &nbsp;&nbsp;
            
          </h4>
          <div class="team-statuses">
            <div class="team-status">
              Team Q: <div @click="openPage('/team/team-q')" title="team-q" class="btn btn-micro btn-warning btn-with-icon rounded-icon"></div>
            </div>
          </div>
          <a href="" class="unit-lead">@leaderperson</a>
        </div>
      </vuestic-widget>
      <vuestic-widget class="no-padding no-v-padding">
        <div class="info-widget-inner">
          <h4 @click="openPage('/team/team-z')">Unit: Dolor &nbsp;&nbsp;
          </h4>
          <div class="team-statuses">
            <div class="team-status">
              Team U: <div @click="openPage('/team/team-u')" title="team-u" class="btn btn-micro btn-primary btn-with-icon rounded-icon"></div>
            </div>
            <div class="team-status">
              Team L: <div @click="openPage('/team/team-l')" title="team-l" class="btn btn-micro btn-danger btn-with-icon rounded-icon"></div>
            </div>
          </div>

          <a href="" class="unit-lead">@leaderperson</a>
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
  .info-widget-inner {
    display: flex;
    align-items:center;
    justify-content: space-around;
  }

  .info-widget-inner > h4 {
    margin: 0;
    padding: 10px;
  }

  .btn.btn-primary {
    box-shadow: none;
  }
  .team-status {
    display: block;
    padding: 10px;
  }
  .team-statuses {
    width: 70%;
  }
  .team-status .btn-micro {
    margin-left: 20px;
  }
</style>
