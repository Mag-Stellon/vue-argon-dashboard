<template>
<div>
  <!-- Header -->
  <base-header class="base-header pb-6 pb-8 pt-5 pt-md-8">
    <!-- Description -->
    <div class="row">
      <div class="col-xl-6 col-lg-4">
        <p class="text-white mt-0 mb-5">
          Fly before you hit the pipes !<br/>
          This highly addictive arcade game has spawned a worldwide Flappy Bird craze. You have to react quickly to slip in each set of pipes.<br />
          Make every move pass perfectly to keep flying and set a high score!
        </p>
      </div>
      <!-- Card stats -->
      <div class="col-xl-3 col-lg-4">
        <stats-card title="Your time" type="gradient-green" :sub-title="currentTime" icon="ni ni-chart-bar-32" class="mb-4 mb-xl-0">
          <template slot="footer">
            <span class="text-nowrap">Progression of </span>
            <span v-if="currentPerformance < 0" class="text-danger mr-2">{{currentPerformance}}%</span>
            <span v-if="currentPerformance >= 0" class="text-success mr-2">{{currentPerformance}}%</span>
          </template>
        </stats-card>
      </div>
      <!-- Card stats -->
      <div class="col-xl-3 col-lg-4">
        <stats-card title="Best Time" type="gradient-info" :sub-title="bestTime()" icon="ni ni-trophy" class="mb-4 mb-xl-0">
          <template slot="footer">
            <span class="text-nowrap">Made in <span class="font-italic">{{currentBestDate}}</span></span>
          </template>
        </stats-card>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-xl-12 text-center">
        <button v-if="!isStart" @click="start" type="button" class="btn btn-success"><i class="fa fa-play mr-2" aria-hidden="true"></i> Let's go</button>
        <button v-if="isStart" @click="stop" type="button" class="btn btn-danger"><i class="fa fa-stop mr-2" aria-hidden="true"></i> Stop</button>
      </div>
    </div>
  </base-header>

  <!-- Content -->
  <div v-if="isStart" class="container-fluid mt--7 content">
    <div class="row">
      <div class="col">
        <div class="card shadow">
          <div class="card-body">
            <div class="row">
              <Flappy @win="win" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <modal :show.sync="modal" gradient="success" modal-classes="modal-danger modal-dialog-centered">
    <h4 slot="header" class="modal-title" id="modal-title-notification">Good Game !</h4>
    <div class="py-3 text-center">
      <i class="fa fa-gamepad ni-3x mb-4"></i>
      <p>You enter the competition with this victory.</p>
    </div>
  </modal>

</div>
</template>

<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import BTooltipDirective from 'bootstrap-vue/es/directives/tooltip'

Vue.use(VueClipboard)

import Flappy from '@/components/Flappy/Game'
import Storage from '@/storage.js'

export default {
  components: {
    Flappy,
  },
  directives: {
    'b-tooltip': BTooltipDirective
  },
  data() {
    return {
      modal: false,
      isStart: false,
      isRunning: false,
      timer: 0,
      currentTime: '0.00',
      startTime: new Date()
    }
  },
  methods: {
    start() {
      this.isStart = true;
      this.run();
    },
    stop() {
      clearInterval(this.timer);
      this.isStart = false;
      this.isRunning = false;
    },
    run() {
      this.isRunning = true;
      this.startTime = new Date();
      this.score();
      this.timer = setInterval(this.score, 100);
    },
    win() {
      this.modal = true;
      Storage.set('flappy', {
        bestTime: {
          date: this.currentBestDate,
          value: this.currentBestTime,
        }
      });
      this.stop();
    },
    score() {
      this.currentTime = ((new Date() - this.startTime) / 1000).toFixed(2);
    },
    bestTime() {
      const bestTime = Storage.get('flappy').bestTime;
      return bestTime ? bestTime.value : `0`;
    },
    bestDate() {
      const bestDate = Storage.get('flappy').bestTime;
      return bestDate ? bestDate.date : this.startTime.toDateString();
    }
  },
  computed: {
    currentPerformance() {
      return parseInt(this.currentTime * 100 / this.bestTime()) - 100;
    },
    currentBestTime() {
      return Math.max(this.bestTime(), this.currentTime).toFixed(2);
    },
    currentBestDate() {
      return this.currentBestTime === this.bestTime() ? this.bestDate() : this.startTime.toDateString();
    },
  },
  destroyed() {
    clearInterval(this.timer);
  }
};
</script>

<style>
.base-header {
  background-image: linear-gradient(to left bottom, #21242b, #3a383f, #544c53, #6f6366, #887b7a, #968986, #a39893, #b0a7a0, #b6aea8, #bcb5af, #c3bdb7, #c9c4bf) !important;
}

.content .card-body {
  margin: 0 auto;
}

.progress-wrapper {
  margin: 0 auto;
}

.progress-wrapper .progress-bar {
  background-color: #6f6366 !important;
}

.progress-label span {
  color: #544c53;
  background-color: #F5F5F8;
}
</style>
