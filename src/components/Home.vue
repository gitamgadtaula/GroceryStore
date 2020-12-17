<template>
  <div class="container">
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
    <grocery-products :filteredResults="filteredResults" />
  </div>
</template>

<script>
import mock from "../data/mock";
import GroceryProducts from "./Products";
export default {
  components: { GroceryProducts },
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
.items {
  margin-top: 10px;
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
  font-size: 18px;
}
.info-subtitle {
  font-size: 12px;
}
.item-footer {
  margin-top: 2px;
}
.price {
  font-weight: 600;
  font-size: 26px;
}
.action {
  background-color: #000;
  padding: 0px 18px;
}
.add {
  color: white;
  margin: 0;
}
.cart-icon {
  padding-top: 2px;
  font-size: 24px;
  color: white;
  text-align: right;
}
</style>