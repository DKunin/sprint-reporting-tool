<template>
  <div class="team">
      <h2>Unit: {{ pageName() }}</h2>

    <div class="row">
      <div class="col-md-6">
        <!-- Feature Teams -->
        <vuestic-widget class="no-padding no-v-padding" v-for="featureTeam in teams.tns.teams" key="featureTeam.id">
          <div class="info-widget-inner">
            
              <div title="team-x" class="btn btn-micro btn-primary btn-with-icon rounded-icon"></div>
              <div @click="openPage('/singleteam/' + featureTeam.id)" class="title">&nbsp;&nbsp;{{ featureTeam.name }}</div>
              <div class="trend">
                <trend
                  :data="[60, 55, 55, 55, 40, 40, 25]"
                  :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                  :min="0"
                  :max="100"
                  auto-draw
                  :height="100"
                  >
                </trend>
              </div>
              <a href="" class="unit-lead">{{ featureTeam.leader }}</a>

          </div>
        </vuestic-widget>

        <!-- Impediment list -->
        <vuestic-widget headerText="Impediment list">
          <form>
            <div class="col-md-12">
            <div class="row">
                <fieldset>
                  <vuestic-checkbox
                    label="lorem ipsum stuff"
                    :id="'checkbox1'"/>
                  <vuestic-checkbox
                    label="lorem ipsum stuff"
                    :id="'checkbox2'"/>
                  <vuestic-checkbox
                    label="lorem ipsum stuff"
                    :id="'checkbox3'"/>
                  <vuestic-checkbox
                    label="lorem ipsum stuff"
                    :id="'checkbox4'"/>
                </fieldset>

            </div>
            </div>
          </form>
      </vuestic-widget>
      </div>

      <div class="col-md-6">
        
        <div class="row">
          <div class="col-md-6">
            <vuestic-widget headerText="Teams Velocity">
              <vuestic-chart :data="unitVelocity" type="vertical-bar"></vuestic-chart>
            </vuestic-widget>
          </div>
          <div class="col-md-6">
            <vuestic-widget headerText="Bugs P0/P1">
              <vuestic-chart :data="unitVelocity" type="vertical-bar"></vuestic-chart>
            </vuestic-widget>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <vuestic-widget headerText="Support Bugs">
              <vuestic-chart :data="unitVelocity" type="vertical-bar"></vuestic-chart>
            </vuestic-widget>
          </div>
          <div class="col-md-6">
            <vuestic-widget headerText="SLAs">
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
            </vuestic-widget>
          </div>
        </div>


      </div>
    </div>
  


  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import unitVelocity from 'data/charts/unitVelocity'

  export default {
    name: 'team',
    components: {},
    methods: {
      openPage (page) {
        this.$router.push(page)
      }
    },
    computed: {
      ...mapGetters([
        'teams'
      ]),
    },
    data () {
      return {
        unitVelocity,
        pageName: () => {
          return this.teams.tns.name
        }
      }
    }
  }

</script>
<style lang="scss" scoped>
  @import "../../sass/_variables.scss";
  .info-widget-inner {
    margin: 0;
  }
  .info-widget-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .info-widget-inner .title {
    white-space: nowrap;
    padding: 0 10px;
    font-size: 20px;
  }
  .vuestic-chart {
    height: 200px;
  }
</style>
