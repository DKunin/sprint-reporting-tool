<template>
  <div class="cluster">

      <vuestic-widget v-for="(singleTeam, singleTeamKey) in teams" class="no-padding no-v-padding" :key="singleTeam.id" v-if="singleTeam.id">
        <div class="info-widget-inner">

          <h4>{{ singleTeam.name }} </h4>

          <div class="team-statuses">
            <div class="team-status" v-for="featureTeam in singleTeam.teams" @click="openPage(`/singleteam/${singleTeamKey}?featureTeam=${featureTeam.id}`)">
              {{ featureTeam.name }}
            </div>
          </div>
          
          <a href="" class="unit-lead">{{ singleTeam.leader }}</a>
        </div>
      </vuestic-widget>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'cluster',
    components: {},
    computed: {
      ...mapGetters([
        'teams'
      ]),
    },
    mounted () {

    },
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
