<template>
  <div class="team">
      <h2>Team: {{ pageName() }}</h2>
    <div class="col-md-12">
      <vuestic-widget>
        <div class="info-widget-inner">

          <h4>
            <div title="team-x" class="btn btn-micro btn-primary btn-with-icon rounded-icon"></div>
            <div class="title">&nbsp;&nbsp;Lorem</div>
            <div class="trend">
              <trend
                :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
                :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                auto-draw
                :height="100"
                >
              </trend>
            </div>
            <a href="" class="unit-lead">@leaderperson</a>
          </h4>

        </div>
      </vuestic-widget>
      <vuestic-widget>
        <div class="info-widget-inner">
          <h4>
            <div title="team-x" class="btn btn-micro btn-primary btn-with-icon rounded-icon"></div>
            <div class="title">&nbsp;&nbsp;Lorem</div>
            <div class="trend">
              <trend
                :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
                :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                auto-draw
                :height="100"
                >
              </trend>
            </div>
            <a href="" class="unit-lead">@leaderperson</a>
          </h4>

        </div>
      </vuestic-widget>
      <vuestic-widget>
        <div class="info-widget-inner">
          <h4>
            <div title="team-x" class="btn btn-micro btn-primary btn-with-icon rounded-icon"></div>
            <div class="title">&nbsp;&nbsp;Lorem</div>
            <div class="trend">
              <trend
                :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
                :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                auto-draw
                :height="100"
                >
              </trend>
            </div>
            <a href="" class="unit-lead">@leaderperson</a>
          </h4>

        </div>
      </vuestic-widget>
    </div>
    <div class="col-md-5">
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
  </div>
</template>

<script>

  export default {
    name: 'team',
    components: {},

    data () {
      return {
        pageName: () => this.$route.params.name
      }
    }
  }

</script>
<style lang="scss" scoped>
  @import "../../sass/_variables.scss";
  .info-widget-inner > h4 {
    margin: 0;
  }
  .info-widget-inner > h4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

</style>
