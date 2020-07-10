<template>
  <div>
    <base-header type="gradient-success" class="base-header pb-6 pb-8 pt-8"></base-header>

    <!--Charts-->
    <div class="container-fluid mt--9">
      <!--Tables-->
      <div class="row mt-5">
        <div class="col-xl-3 col-lg-6 text-center mb-4" v-for="game in games" :key="game.id">
          <router-link :to="`/game/${category}/${game.id}`">
            <b-img-lazy thumbnail fluid :src="game.thumb" :alt="game.title"></b-img-lazy>
          </router-link>
        </div>
      </div>
      <!--End tables-->
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store'

export default {
  beforeRouteEnter (to, from, next) {
    store.dispatch("fetchGames", {
      category: to.params.category,
      success: next
    });
  },
  beforeRouteUpdate (to, from, next) {
    store.dispatch("fetchGames", {
      category: to.params.category,
      success: next
    });
  }, 
  computed: {
    category() {
      return this.$route.params.category;
    },
    games() {
      return this.$store.getters.category(this.category);
    }
  }
};
</script>

<style>
</style>
