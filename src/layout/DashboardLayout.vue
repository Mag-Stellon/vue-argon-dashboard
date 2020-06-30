<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Statly"
      title="Statly"
    >
      <!--
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-primary',
            path: '/dashboard'
          }"
        />

        <sidebar-item :link="{name: 'Icons', icon: 'ni ni-planet text-blue', path: '/icons'}"/>
        <sidebar-item :link="{name: 'Maps', icon: 'ni ni-pin-3 text-orange', path: '/maps'}"/>
        <sidebar-item :link="{name: 'User Profile', icon: 'ni ni-single-02 text-yellow', path: '/profile'}"/>
        <sidebar-item :link="{name: 'Tables', icon: 'ni ni-bullet-list-67 text-red', path: '/tables'}"/>
        <sidebar-item :link="{name: 'Login', icon: 'ni ni-key-25 text-info', path: '/login'}"/>
        <sidebar-item :link="{name: 'Register', icon: 'ni ni-circle-08 text-pink', path: '/register'}"/>

      </template>
      -->

      <template slot="free">
        <sidebar-item :link="{name: 'Slider', icon: 'fa fa-puzzle-piece text-orange', path: '/slider'}"/>
        <sidebar-item :link="{name: 'Memory', icon: 'fa fa-memory text-blue', path: '/memory'}"/>
      </template>

      <template slot="starter">
        <sidebar-item :link="{name: 'Sudoku', icon: 'fa fa-infinity text-green', path: '/sudoku'}"/>
      </template>

      <template slot="premium">
        <sidebar-item :link="{name: 'Sudoku', icon: 'fa fa-infinity text-green', path: '/sudoku'}"/>
      </template>

      <template slot="ultimate">
        <sidebar-item :link="{name: 'Sudoku', icon: 'fa fa-infinity text-green', path: '/sudoku'}"/>
        <sidebar-item :link="{name: 'Flappy', icon: 'fa fa-feather text-red', path: '/flappy'}"/>
      </template>


    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <!-- <content-footer v-if="!$route.meta.hideFooter"></content-footer> -->
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  // import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      // ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
</style>
