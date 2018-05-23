<template>
  <div class="team">
      <h2>Unit: {{ pageName() }}</h2>

    <div class="row">
      <div class="col-md-6">
        <vuestic-widget class="no-padding no-v-padding">
          <div class="info-widget-inner">
            
              <div title="team-x" class="btn btn-micro btn-primary btn-with-icon rounded-icon"></div>
              <div @click="openPage('/singleteam/team-x')" class="title">&nbsp;&nbsp;Lorem X</div>
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
              <a href="" class="unit-lead">@leaderperson</a>

          </div>
        </vuestic-widget>
        <vuestic-widget class="no-padding no-v-padding">
          <div class="info-widget-inner">
              <div title="team-x" class="btn btn-micro btn-primary btn-with-icon rounded-icon"></div>
              <div @click="openPage('/singleteam/team-y')" class="title">&nbsp;&nbsp;Lorem Y</div>
              <div class="trend">
                <trend
                  :data="[60, 55, 50, 50, 48, 40, 21]"
                  :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                  :min="0"
                  :max="100"
                  auto-draw
                  :height="100"
                  >
                </trend>
              </div>
              <a href="" class="unit-lead">@leaderperson</a>

          </div>
        </vuestic-widget>
        <vuestic-widget class="no-padding no-v-padding">
          <div class="info-widget-inner">
              <div title="team-x" class="btn btn-micro btn-danger btn-with-icon rounded-icon"></div>
              <div @click="openPage('/singleteam/team-z')" class="title">&nbsp;&nbsp;Lorem Z</div>
              <div class="trend">
                <trend
                  :data="[60, 55, 50, 50, 50, 50, 50]"
                  :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                  :min="0"
                  :max="100"
                  auto-draw
                  :height="100"
                  >
                </trend>
              </div>
              <a href="" class="unit-lead">@leaderperson</a>

          </div>
        </vuestic-widget>
        <vuestic-widget>
        <h4>Unit Impediment list</h4>
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
            <vuestic-widget>
              <h4>Unit Teams Velocity</h4>
              <vuestic-chart :data="unitVelocity" type="vertical-bar"></vuestic-chart>
            </vuestic-widget>
          </div>
          <div class="col-md-6">
            <vuestic-widget>
              <h4>Bugs P0/P1</h4>
              <vuestic-chart :data="unitVelocity" type="vertical-bar"></vuestic-chart>
            </vuestic-widget>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <vuestic-widget>
              <h4>Support Bugs</h4>
              <vuestic-chart :data="unitVelocity" type="vertical-bar"></vuestic-chart>
            </vuestic-widget>
          </div>
          <div class="col-md-6">
            <vuestic-widget>
              <h4>SLAs</h4>
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
            </vuestic-widget>
          </div>
        </div>


      </div>
    </div>
  


  </div>
</template>

<script>
  import unitVelocity from 'data/charts/unitVelocity'

  export default {
    name: 'team',
    components: {},
    methods: {
      openPage (page) {
        this.$router.push(page)
      }
    },
    data () {
      return {
        unitVelocity: unitVelocity,
        pageName: () => this.$route.params.name
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
