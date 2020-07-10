<template>
<nav class="navbar" :class="[
            {'navbar-expand-md': expand},
            {'navbar-transparent': transparent},
            {[`bg-${type}`]: type}
         ]">
  <div :class="containerClasses">
    <slot name="brand">
      <p class="h4 mb-0 text-white text-uppercase d-lg-inline-block brand-title">
        <i :class="`${icon} mr-2`"></i>
        {{title}}
      </p>
    </slot>
    <navbar-toggle-button v-if="showToggleButton" :toggled="toggled" :target="contentId" @click.native.stop="toggled = !toggled">
      <span class="navbar-toggler-icon"></span>
    </navbar-toggle-button>

    <div class="collapse navbar-collapse" :class="{show: toggled}" :id="contentId" v-click-outside="closeMenu">

      <slot :close-menu="closeMenu"></slot>
    </div>
  </div>
</nav>
</template>

<script>
import NavbarToggleButton from "./NavbarToggleButton";

export default {
  name: "base-nav",
  components: {
    NavbarToggleButton
  },
  props: {
    type: {
      type: String,
      default: "",
      description: "Navbar type (e.g default, primary etc)"
    },
    contentId: {
      type: [String, Number],
      default: Math.random().toString(),
      description: "Explicit id for the menu. By default it's a generated random number"
    },
    containerClasses: {
      type: [String, Object, Array],
      default: 'container-fluid'
    },
    transparent: {
      type: Boolean,
      default: false,
      description: "Whether navbar is transparent"
    },
    expand: {
      type: Boolean,
      default: false,
      description: "Whether navbar should contain `navbar-expand-lg` class"
    },
    showToggleButton: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      toggled: false
    };
  },
  computed: {
    title() {
      const name = this.$route.name;

      if (name.startsWith('game')) {
        const category = this.$route.params.category;
        const game = this.$store.getters.categories.filter(game => game.key === category)[0];

        return `${game.name} games`;
      }
      if (name === 'profile') {
        return 'Profile';
      }

      return '';
    },
    icon() {
      const name = this.$route.name;

      if (name.startsWith('game')) {
        const category = this.$route.params.category;
        const game = this.$store.getters.categories.filter(game => game.key === category)[0];

        return game.icon;
      }
      if (name === 'profile') {
        return `fa fa-user`;
      }

      return '';
    }
  },
  methods: {
    closeMenu() {
      this.toggled = false;
    }
  }
};
</script>

<style lang="scss">
$grid-breakpoints-md: 768px;

@media only screen and (max-width: $grid-breakpoints-md) {
  .navbar.navbar-top {
    padding-left: 28px !important;
    padding-top: 2em;
  }
}
</style>
