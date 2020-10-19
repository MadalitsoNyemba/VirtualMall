<template>
  <div>
    <div class="phone-viewport">
      <md-bottom-bar md-sync-route>
        <md-bottom-bar-item
          to="/components/bottom-bar"
          exact
          md-label="Home"
          md-icon="home"
        ></md-bottom-bar-item>
        <md-bottom-bar-item
          to="/components/bottom-bar/posts"
          md-label="Posts"
          md-icon="home"
        ></md-bottom-bar-item>
        <md-bottom-bar-item
          to="/components/bottom-bar/favorites"
          md-label="Favorites"
          md-icon="favorite"
        ></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.phone-viewport {
  width: 100%;
  height: 250px;
  display: inline-flex;
  align-items: flex-end;
  border: 1px solid rgba(#000, 0.26);
  background: rgba(#000, 0.06);
}
</style>
