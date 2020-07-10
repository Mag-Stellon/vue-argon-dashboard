<template>
<base-nav class="navbar-top navbar-dark" id="navbar-main" :show-toggle-button="false" expand>
  <router-link v-if="!isProfile" to="/profile" class="navbar-nav align-items-center d-none d-md-flex avatar">
    <div class="icon text-white rounded-circle shadow">
      <avatar />
    </div>
  </router-link>
</base-nav>
</template>

<script>
import Avatar from '@/components/Avatar'

export default {
  components: {
    Avatar
  },
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  },
  computed: {
    isProfile(){
      return this.$route.name == "profile";
    }
  }
};
</script>

<style scoped>
.navbar-nav {
  margin-left: auto !important;
}

.media {
  cursor: pointer;
}

.media .avatar {
  background-color: #22211F !important;
  cursor: pointer;
}

.avatar .icon {
  padding: 0;
}

.avatar, .btn-default {
  background-color: #3a383f;
}

.btn-default:hover {
  background-color: #21242b;
}
</style>
