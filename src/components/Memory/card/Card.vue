<template>
  <div class="container" @click="flip">
    <div class="card" :class="{ flipped: option.flipped }">
      <img v-if="option.cardName === '8-ball'" class="front" src="@/assets/img/memory/8-ball.png" />
      <img v-if="option.cardName === 'baked-potato'" class="front" src="@/assets/img/memory/baked-potato.png" />
      <img v-if="option.cardName === 'dinosaur'" class="front" src="@/assets/img/memory/dinosaur.png" />
      <img v-if="option.cardName === 'kronos'" class="front" src="@/assets/img/memory/kronos.png" />
      <img v-if="option.cardName === 'rocket'" class="front" src="@/assets/img/memory/rocket.png" />
      <img v-if="option.cardName === 'skinny-unicorn'" class="front" src="@/assets/img/memory/skinny-unicorn.png" />
      <img v-if="option.cardName === 'that-guy'" class="front" src="@/assets/img/memory/that-guy.png" />
      <img v-if="option.cardName === 'zeppelin'" class="front" src="@/assets/img/memory/zeppelin.png" />

      <img class="back" src="@/assets/img/memory/back.png" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  components: {},
  props: {
    option: {
      type: Object,
      default() {
        return {
          flipped: false,
          cardName: ''
        }
      }
    }
  },

  methods: {
    ...mapActions(['flipCard']),
    flip() {
      if (this.option.flipped) {
        return
      }
      this.flipCard(this.option)
      this.$emit('flipped', this.option)
    }
  }
}
</script>

<style scoped>
.container {
  width: 100px;
  height: 121px;
  margin-right: 3px;
  cursor: pointer;
  position: relative;
  perspective: 800px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card img {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.card .back {
  background: blue;
  transform: rotateY(0deg);
}

.card .front {
  /* background: blue; */
  transform: rotateY(180deg);
}

@media screen and (max-width: 450px) {
  .container {
    width: 92px;
    height: 111px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 380px) {
  .container {
    width: 85px;
    height: 102px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 360px) {
  .container {
    width: 70px;
    height: 84px;
    margin-right: 1px;
  }
}
</style>
