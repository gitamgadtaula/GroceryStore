<template>
  <div id="app">
    <div class="header">
      <router-link to="/">
        <img src="./assets/logo.png" class="logo"
      /></router-link>
    </div>
    <div class="navigation">
      <div class="link">
        <router-link to="/browse">
          <i class="fas fa-globe" style="font-size: 48px"></i>
          <p>Browse</p></router-link
        >
      </div>
      <div class="link">
        <router-link to="cart"
          ><i class="fas fa-cart-plus" style="font-size: 48px"></i>
          <p>0 items</p></router-link
        >
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style scope>
.header {
  display: flex;
  justify-content: center;
}
.navigation {
  display: flex;
  justify-content: flex-end;
  /* align-self: flex-end; */
}
.logo {
  width: 200px;
}
</style>
