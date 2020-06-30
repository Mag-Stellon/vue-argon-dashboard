<template>
  <div class="tile" :style="tile.styles" @click="move" :class="{ empty: tile.isEmpty }" />
</template>

<script>
export default {
  props: ['tile'],

  methods: {
    move () {
      this.$emit('moving', this.tile)
    }
  }
}
</script>

<style lang="scss">
.tile {
  border: 2px solid #fff;
  opacity: 0.8;

  &.empty {
    box-shadow: #fff;//rgba(0, 0, 0, 0.5) 0px 5px 10px inset;
    opacity: 1;

    &:hover {
      cursor: default;
    }
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
}
</style>
