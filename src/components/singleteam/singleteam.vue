<template>
  <div class="singleTeam">
      
    <h2>Team: {{ pageName() }}, Unit: Lorem, Cluster </h2>
    <ul class="sprint-short">
      
      <li><h4>{{ sprintName() }}  {{ sprintStart() }} - {{ sprintEnd() }}</h4> <div class="sprit-status-future sprit-status btn btn-micro btn-secondary" disabled>Future</div></li>

      <li><h4>{{ sprintName() }}  {{ sprintStart() }} - {{ sprintEnd() }}</h4> <div class="sprit-status btn btn-micro btn-primary">In progress</div></li>

      <li><h4>{{ sprintName() }}  {{ sprintStart() }} - {{ sprintEnd() }}</h4> <div class="sprit-status sprit-status-past btn btn-micro btn-danger">finished</div></li>

      <vuestic-widget>
      <div class="row">
        <div class="col-md-2">
          <vuestic-widget class="info-widget">
          <div class="info-widget-inner">
            <div class="stats">
              <div class="stats-number">
                <vuestic-progress-bar type="circle" ref="circle"></vuestic-progress-bar>
              </div>
              <div class="stats-title"></div>
            </div>
          </div>
        </vuestic-widget>
        </div>
        <div class="col-md-2">
          <vuestic-widget class="info-widget">
          <div class="info-widget-inner">
            <div class="stats">
              <div class="stats-number">
                30/40
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
                0
              </div>
              <div class="stats-title">LSR</div>
            </div>
          </div>
          </vuestic-widget>
        </div>

        <div class="col-md-2">
          <vuestic-widget class="info-widget">
          <div class="info-widget-inner">
            <div class="stats">
              <div class="stats-number">
                <i class="ion ion-md-arrow-up text-primary stats-icon"></i>
                3
              </div>
              <div class="stats-title">P0/P1 bugs</div>
            </div>
          </div>
          </vuestic-widget>
        </div>

        <div class="col-md-2">
          <vuestic-widget class="info-widget">
          <div class="info-widget-inner">
            <div class="stats">
              <div class="stats-number">
                <i class="ion ion-md-arrow-down text-primary stats-icon"></i>
                3
              </div>
              <div class="stats-title">Support Bugs</div>
            </div>
          </div>
          </vuestic-widget>
        </div>

      </div>

      <div class="row">
        <div class="col-md-4">
          <vuestic-widget>
            <h4>Burndown</h4>
            <vuestic-chart :data="lineChartData" type="line"></vuestic-chart>
          </vuestic-widget>
        </div>
        <div class="col-md-4">
          <vuestic-widget>
            <h4>Velocity</h4>
            <vuestic-chart :data="unitVelocity" type="vertical-bar"></vuestic-chart>
          </vuestic-widget>
        </div>
        <div class="col-md-4">
          <vuestic-widget class="chart-widget">
            <h4>Tasks</h4>
            <vuestic-chart :data="pieChartData" type="pie"></vuestic-chart>
          </vuestic-widget>
        </div>
      </div>
      <div class="row">
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

        <div class="row">
          <div class="col-md-4">
            <div class="table-responsive">
            <table class="table table-striped table-sm color-icon-label-table">
              <thead>
              <tr>
                <td></td>
                <td>Service</td>
                <td>SLA</td>
              </tr>
              </thead>
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
              <ul class="vue-unordered">
                <li><a href="">Backlog</a></li>
                <li><a href="">Retrospective</a></li>
              </ul>
          </div>
      </div>
    </vuestic-widget>

      <li><h4>{{ sprintName() }}  {{ sprintStart() }} - {{ sprintEnd() }}</h4> <div class="sprit-status sprit-status-past btn btn-micro btn-primary">finished</div></li>

      <li><h4>{{ sprintName() }}  {{ sprintStart() }} - {{ sprintEnd() }}</h4> <div class="sprit-status sprit-status-past btn btn-micro btn-warning">finished</div></li>
    </ul>


  </div>
</template>

<script>
  import faker from 'faker'
  import utils from 'services/utils'
  import store from 'vuex-store'

  let palette = store.getters.palette

  export default {
    name: 'singleTeam',
    components: {},
    mounted () {
      this.$refs['circle'].$data.value = 80
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
        pieChartData: {
          labels: ['Improvement', 'Refactoring', 'Bugs'],
          datasets: [{
            label: 'Population (millions)',
            backgroundColor: [palette.primary, palette.lighterGray, palette.danger],
            data: [100, 50, 25]
          }]
        },
        lineChartData: {
          labels: ['mon', 'tue', 'wed', 'thu', 'friday'],
          datasets: [
            {
              label: 'Fact',
              backgroundColor: utils.hex2rgb(palette.primary, 0.6).css,
              borderColor: palette.transparent,
              data: [90, 88, 80, 50, 20]
            }, {
              label: 'Plan',
              backgroundColor: utils.hex2rgb(palette.info, 0.6).css,
              borderColor: palette.transparent,
              data: [100, 80, 60, 40, 20]
            }
          ],
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
  .sprint-short h4 {
    margin-bottom: 0;
  }
  .sprint-short li {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>