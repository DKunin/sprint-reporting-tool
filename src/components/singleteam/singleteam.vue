<template>
  <div class="singleTeam">
      
    <h2>Team: Main Team, Unit: Trust&Safety </h2>

      <vuestic-widget v-for="sprint in teams.tns.sprints" :key="sprint.id">
        <div class="row" @click="openSprint(sprint.id)">
          <div :class="'col-md-12 sprint-short ' + (teams.openedSprint === sprint.id ? 'opened' : ' ')">
            <h4>{{sprint.name}}</h4> 
            <div :class="sprintStateClass(sprint.state)">{{sprint.state}}</div>
          </div>
        </div>

        <div v-if="teams.openedSprint === sprint.id">

          <div class="row">
            <div class="col-md-6">
              <h5>{{teams.sprintDetails.dates.startDateObject.toLocaleDateString()}} - {{teams.sprintDetails.dates.endDateObject.toLocaleDateString()}}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <vuestic-widget class="info-widget">
                <div class="info-widget-inner">
                  <div class="stats">
                    <div class="stats-number">
                      {{ teams.sprintDetails.percent }} %
                    </div>
                  </div>
                </div>
              </vuestic-widget>
            </div>
            <div class="col-md-2">
              <vuestic-widget class="info-widget">
              <div class="info-widget-inner">
                <div class="stats">
                  <div class="stats-number">
                    {{ teams.sprintDetails.completed.estimation }}/{{ teams.sprintDetails.totalStoryPoints }}
                  </div>
                  <div class="stats-title">Story Points</div>
                </div>
              </div>
            </vuestic-widget>
            </div>

            <div class="col-md-2">
              <vuestic-widget class="info-widget brand-danger">
              <div class="info-widget-inner">
                <div class="stats">
                  <div class="stats-number">
                    {{ teams.lsr }}
                  </div>
                  <div class="stats-title">LSR</div>
                </div>
              </div>
              </vuestic-widget>
            </div>

            <div class="col-md-2">
              <vuestic-widget class="info-widget info-widget-danger">
                <div class="info-widget-inner">
                  <div class="stats">
                    <div class="stats-number">
                      {{ teams.pzeroBugs }}
                    </div>
                    <div class="stats-title">P0/P1 bugs</div>
                  </div>
                </div>
              </vuestic-widget>
            </div>

            <div class="col-md-2">
              <vuestic-widget class="info-widget info-widget-warning">
              <div class="info-widget-inner">
                <div class="stats">
                  <div class="stats-number">
                    {{ teams.supportBugs }}
                  </div>
                  <div class="stats-title">Support Bugs</div>
                </div>
              </div>
              </vuestic-widget>
            </div>

            <div class="col-md-2" v-if="false">
              <vuestic-widget headerText="Backglog" class="widget-short-info">
              <div class="widget-inner">
                  <div class="stats-title">formed: <i class="fa fa-check success-icon icon-right input-icon"></i></div>
                  <div class="stats-title">estimated: <i class="fa fa-check success-icon icon-right input-icon"></i></div>
                  <div class="stats-title">groomed: <i class="fa fa-exclamation-triangle icon-right input-icon error-icon"></i></div>
              </div>
              </vuestic-widget>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4" v-if="false">
              <vuestic-widget headerText="Burndown">
                <vuestic-chart :data="teams.sprintDetails.lineChartData" type="line"></vuestic-chart>
              </vuestic-widget>
            </div>
            <div class="col-md-4" v-if="false">
              <vuestic-widget headerText="Velocity">
                <vuestic-chart :data="unitVelocity" type="vertical-bar"></vuestic-chart>
              </vuestic-widget>
            </div>
            <div class="col-md-4">
              <vuestic-widget class="chart-widget" headerText="Tasks">
                <vuestic-chart :data="teams.sprintDetails.tasksPie" type="pie"></vuestic-chart>
              </vuestic-widget>
            </div>
          </div>

          <div v-if="false" class="row row-padding-bottom">
            <div class="col-md-4">
                <h3>Executive Summary</h3>
                <div class="well">
                  {{ paragraph() }}
                </div>
            </div>
            <div class="col-md-4">
                <h3>Product Increment</h3>
                <div class="well">
                  {{ paragraph() }}
                </div>
            </div>
            <div class="col-md-4">
              <h3>Tech Increment</h3>
                <div class="well">
                  {{ paragraph() }}
                </div>
            </div>
          </div>

          <div class="row" v-if="false">
              <div class="col-md-4">
                <div class="table-responsive">
                <table class="table table-striped table-sm color-icon-label-table">
                  <tbody>
                  <tr class="table-danger">
                    <td>
                      <span class="badge badge-pill badge-danger">DANGER</span>
                    </td>
                    <td>Service 1</td>
                    <td>69.99%</td>
                  </tr>
                  <tr class="table-success">
                    <td>
                      <span class="badge badge-pill badge-primary">SUCCESS</span>
                    </td>
                    <td>Service 1</td>
                    <td>99.99%</td>
                  </tr>
                  <tr class="table-warning">
                    <td>
                      <span class="badge badge-pill badge-warning">WARNING</span>
                    </td>
                    <td>Service 1</td>
                    <td>99.49%</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              </div>
              <div class="col-md-4">
                  <div>
                    <ul class="vue-unordered">
                      <li><a href="">Retrospective</a></li>
                    </ul>
                  </div>
              </div>
          </div>

        </div>
      </vuestic-widget>

  </div>
</template>

<script>
  import faker from 'faker'
  import store from 'vuex-store'
  import {mapGetters, mapActions} from 'vuex'


  let palette = store.getters.palette

  export default {
    name: 'singleTeam',
    components: {},
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
