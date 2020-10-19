<template>
  <md-toolbar class="fixed">
    <h3 class="md-title" style="flex: 1">Title</h3>
    <md-button class="md-icon-button">
      <md-icon>more_vert</md-icon>
    </md-button>
  </md-toolbar>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  },
  data: () => ({
    menuVisible: false
  })
};
</script>

<style>
.fixed {
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
}
</style>
