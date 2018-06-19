<template>
  <div>
      <div class="row">
        <div class="col-md-6">
          <h5>{{ sprintDetails.dates.startDateObject ? sprintDetails.dates.startDateObject.toLocaleDateString() : null }} - {{ sprintDetails.dates.endDateObject ? sprintDetails.dates.endDateObject.toLocaleDateString() : null }}</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <vuestic-widget :class="smallWidgetClassPercent(sprintDetails.percent)">
            <div class="info-widget-inner">
              <div class="stats">
                <div class="stats-number">
                  {{ sprintDetails.percent }} %
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
                {{ sprintDetails.completed.estimation }}/{{ sprintDetails.totalStoryPoints }}
              </div>
              <div class="stats-title">Story Points</div>
            </div>
          </div>
        </vuestic-widget>
        </div>

        <div class="col-md-2">
          <vuestic-widget :class="smallWidgetClass(lsr.length)">
          <div class="info-widget-inner">
            <div class="stats">
              <div class="stats-number">
                {{ lsr.length }}
              </div>
              <div class="stats-title">LSR</div>
              <div class="small-list">
                <div v-for="lsrIssue in lsr.issues">
                  <a target="_blank" :href="generateLink(lsrIssue)">{{ lsrIssue.key }}</a>
                </div>
              </div>
            </div>
          </div>
          </vuestic-widget>
        </div>

        <div class="col-md-2">
          <vuestic-widget :class="smallWidgetClass(pzeroBugs.length)">
            <div class="info-widget-inner">
              <div class="stats">
                <div class="stats-number">
                  {{ pzeroBugs.length }}
                </div>
                <div class="stats-title">P0/P1 bugs</div>
                <div class="small-list">
                  <div v-for="pzeroBugIssue in pzeroBugs.issues">
                    <a target="_blank" :href="generateLink(pzeroBugIssue)">{{ pzeroBugIssue.key }}</a>
                  </div>
                </div>
              </div>
            </div>
          </vuestic-widget>
        </div>

        <div class="col-md-2">
          <vuestic-widget :class="smallWidgetClass(supportBugs.length)">
          <div class="info-widget-inner">
            <div class="stats">
              <div class="stats-number">
                {{ supportBugs.length }}
              </div>
              <div class="stats-title">Support Bugs</div>
                <div class="small-list">
                  <div v-for="supportBugsIssue in supportBugs.issues">
                    <a target="_blank" :href="generateLink(supportBugsIssue)">{{ supportBugsIssue.key }}</a>
                  </div>
                </div>
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

  </div>
</template>

<script>

  export default {
    name: 'singleTeamInfo',
    props: {
      sprintDetails: {
        type: Object,
        required: true
      },
      lsr: {
        type: Object
      },
      pzeroBugs: {
        type: Object
      },
      supportBugs: {
        type: Object
      },
    },
    methods: {
      generateLink (issue) {
        return issue.self.split('/rest')[0] + '/browse/' + issue.key
      },
      smallWidgetClass (amount) {
        return `info-widget ${amount <= 2 && amount > 0 ? 'info-widget-warning' : amount > 2 ? 'info-widget-danger' : ''}`
      },
      smallWidgetClassPercent (amount) {
        return `info-widget ${amount <= 80 ? 'info-widget-danger' : ''}`
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
