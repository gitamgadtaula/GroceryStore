<template>
  <div>
    <a-row type="flex" justify="center">
      <a-col>
        <a-input
          ref="userNameInput"
          v-model="searchText"
          placeholder="search"
          size="large"
          style="width: 500px"
        >
          <a-icon slot="prefix" type="search" style="color: black" />
        </a-input>
      </a-col>
    </a-row>

    <div class="items">
      <a-row type="flex" justify="start" :gutter="[24, 12]">
        <a-col v-for="(item, index) in filteredResults" :key="index">
          <div class="item">
            <div class="info">
              <h1 class="info-heading">{{ item.name }}</h1>
              <p class="info-subtitle">{{ item.country }}</p>
            </div>
            <img
              class="item-img"
              :src="require(`@/assets/products/${item.image}`)"
            />
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import mock from "../data/mock";
export default {
  data() {
    return {
      mock,
      searchText: "",
    };
  },
  computed: {
    filteredResults() {
      var searchText = this.searchText.trim().toLowerCase();
      var mock = this.mock;
      if (!searchText) {
        return mock;
      }
      mock = mock.filter(function (item) {
        if (item.name.toLowerCase().indexOf(searchText) !== -1) {
          return item;
        }
      });
      return mock;
    },
  },
};
</script>

<style scoped>
.item {
}
.item-img {
  height: 250px;
  width: 200px;
  border: 1px solid #000;
}
.info {
  background-color: #f2921d;
  padding: 10px;
}
.info-heading {
  font-size: 16px;
}
.info-subtitle {
  font-size: 10px;
}
</style>