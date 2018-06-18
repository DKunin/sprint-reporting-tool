<template>
  <div class="singleTeam">
      
    <h2>Team: Main Team, Unit: Trust&Safety </h2>

      <vuestic-widget v-for="sprint in teams.tns.sprints" :key="sprint.id">
        <div class="row" @click="openSprint(sprint.id)">
          <div :class="'col-md-12 sprint-short'">
            <h4>{{sprint.name}}</h4> 
            <div :class="sprintStateClass(sprint.state)">{{sprint.state}}</div>
          </div>
        </div>
        <SingleTeamInfo 
          v-if="teams.sprintDetails && sprint.id === teams.openedSprint"
          :sprintDetails="teams.sprintDetails"
          :lsr="teams.lsr"
          :pzeroBugs="teams.pzeroBugs"
          :supportBugs="teams.supportBugs"
          />
      </vuestic-widget>
      
  </div>
</template>

<script>
  import faker from 'faker'
  import store from 'vuex-store'
  import {mapGetters, mapActions} from 'vuex'
  import SingleTeamInfo from 'components/singleteam/single-team-info'

  let palette = store.getters.palette

  export default {
    name: 'singleTeam',
    components: {
      SingleTeamInfo
    },
    mounted () {
      this.getSprintList()
    },
    methods: {
      ...mapActions([
        'getSprintList',
        'openSprint'
      ]),
      sprintStateClass (state) {
        return {
          'sprit-status sprit-status-past btn btn-micro': true,
          'btn-pale': state === 'CLOSED',
          'btn-warning': state === 'FUTURE'
        }
      }
    },
    computed: {
      ...mapGetters([
        'teams'
      ])
    },
    data () {
      return {
        unitVelocity: {
          labels: ['January', 'February', 'March'],
          datasets: [
            {
              label: 'team x',
              backgroundColor: palette.primary,
              data: [22, 25, 30]
            }
          ]
        },
        sprintName: faker.name.findName,
        sprintStart: () => faker.date.past().toLocaleDateString(),
        paragraph: () => faker.lorem.paragraph(),
        sprintEnd: () => faker.date.future().toLocaleDateString(),
        pageName: () => this.$route.params.name
      }
    }
  }

</script>
<style lang="scss" scoped>
  @import "../../sass/_variables.scss";
  .sprit-status {
    font-size: 10px;
  }

.stats-number, .stats-title {
    line-height: 1;
  }

  .info-widget .info-widget-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;

    &.has-chart {
      justify-content: space-between;
    }

    .stats {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }

  .stats-number {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 2.625rem;
    margin-bottom: 0.5rem;

    .stats-icon {
      font-size: 1.5625rem;
      position: absolute;
      top: 0.625rem;
      left: -1.25rem;

      &.icon-wide {
        left: -1.875rem;
      }
    }
  }
  .vuestic-chart {
    height: 200px;
  }
  .sprit-status-past {
    filter: saturate(40%);
  }
  .sprit-status-future {
    filter: saturate(0);
  }
  .sprint-short.opened {
    margin-bottom: 20px;
  }

  .sprint-short {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .widget.info-widget.info-widget-warning {
    border-top-color: $brand-warning;
  }

  .widget.info-widget.info-widget-danger {
    border-top-color: $brand-danger;
  }
  .row-padding-bottom {
    padding-bottom: 20px;
  }

  .widget-short-info .widget-body {
    padding-top: 2px;
  }
</style>
