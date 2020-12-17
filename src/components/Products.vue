<template>
  <div class="items">
    <a-row type="flex" justify="start" :gutter="[24, 12]">
      <a-col v-for="(item, index) in filteredResults" :key="index">
        <div class="item">
          <div class="info">
            <h1 class="info-heading">{{ item.name }}</h1>
            <p class="info-subtitle">{{ item.country }}</p>
          </div>
          <div class="image">
            <img
              class="item-img"
              :src="require(`@/assets/products/${item.image}`)"
            />
          </div>
          <div class="item-footer">
            <a-row type="flex" justify="space-between">
              <a-col>
                <h2 class="price">{{ item.price }}</h2>
              </a-col>
              <a-col class="action" @click="addToCart(item.id)">
                <a-row type="flex" justify="end">
                  <a-icon type="shopping-cart" class="cart-icon" />
                </a-row>
                <p class="add">Add to Cart</p>
              </a-col>
            </a-row>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  props: { filteredResults: { type: Array } },
  methods: {
    addToCart(id) {
      this.$store.commit("addToCart", id);
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.items;
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
  max-width: 200px;
  background-color: #f2921d;
  padding: 10px;
}
.info-heading {
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  padding: 0px 6px 0px 18px;
  cursor: pointer;
}
.action:hover {
  box-shadow: 2px 2px #666;
}
.action:active {
  background-color: #efefef;
  box-shadow: 1px 1px 3px #666;

  transform: translateY(4px);
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