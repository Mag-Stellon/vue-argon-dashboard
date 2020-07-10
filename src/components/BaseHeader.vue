<template>
  <div class="header" :class="{[`bg-${type}`]: type}">
    <div class="container-fluid">
      <div class="header-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'base-header',
    props: {
      type: {
        type: String,
        default: 'primary',
        description: 'Header background type'
      }
    }
  }
</script>
<style>
.header {
  background-image: linear-gradient(to left bottom, #21242b, #3a383f, #544c53, #6f6366, #887b7a, #968986, #a39893, #b0a7a0, #b6aea8, #bcb5af, #c3bdb7, #c9c4bf) !important;
}
</style>
