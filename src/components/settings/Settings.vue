<template>

    <div class="row">
    <div class="col-md-12">
        <vuestic-widget headerText="Settings">
          <form>
            <div class="row">
              <div class="col-md-6">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="inputWithDescription" required title="" v-model="jiraKey"/>
                      <label class="control-label" for="simple-input">Jira API endpoint</label><i
                      class="bar"></i>
                    </div>
                  </div>
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
    name: 'Settings',
    computed: {
      jiraKey: {
        get () {
          return this.$store.getters.config.jira.apiKey
        },
        set (value) {
          this.$store.commit('JIRA_API_KEY_SET', value)
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
