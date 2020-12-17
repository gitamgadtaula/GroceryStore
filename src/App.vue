<template>
  <div class="app">
    <div class="header">
      <a-row type="flex" justify="center" :gutter="[24, 12]">
        <a-col>
          <div class="header">
            <router-link to="/">
              <img src="./assets/logo.png" class="logo"
            /></router-link>
          </div>
        </a-col>
      </a-row>
      <div class="navigation">
        <a-row type="flex" justify="end" :gutter="[24, 12]">
          <a-col>
            <div class="link">
              <router-link to="/browse" class="link">
                <a-icon type="global" style="font-size: 48px" />
                <p>Browse</p></router-link
              >
            </div>
          </a-col>
          <a-col>
            <div class="link">
              <router-link to="cart" class="link">
                <a-badge :count="totalItems" showZero>
                  <a-icon type="shopping-cart" style="font-size: 48px" />
                </a-badge>
                <p>My Cart</p></router-link
              >
            </div>
          </a-col>
        </a-row>
      </div>
    </div>

    <router-view />
    <div class="footer"><p>All rights reserved</p></div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  computed: {
    totalItems() {
      return this.$store.getters.totalItems;
    },
  },
};
</script>

<style>
.app {
  margin: 40px;
}
.header {
  position: relative;
}
.navigation {
  position: absolute;
  top: 20px;
  right: 0px;
}
.link {
  color: rgb(48, 47, 47);
}

.logo {
  width: 200px;
}
.footer {
  /* margin: auto; */
  margin: 20px 0px 0px 0px;
  padding: 20px 10px;
  box-shadow: 0 0 1px;
  /* position: sticky; */
  display: flex;
  justify-content: flex-start;
  bottom: 0;
  background-color: #f2921d;
}
</style>
