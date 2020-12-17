<template>
  <div>
    <div class="items" v-if="totalItems > 0">
      <div class="item" v-for="(item, index) in cartItems" :key="index">
        <a-row type="flex" justify="center">
          <a-col>
            <div class="left">
              <div class="left-top">
                <p class="info-heading">{{ item.name }}</p>
                <p class="info-subtitle" style="opacity: 0.8;">
                  {{ item.country }}
                </p>
                 <p class="info-subtitle">
                  Unit Price: {{ item.price }}
                </p>
                <p class="info-subtitle">Quantity: {{ item.quantity }}</p>
              </div>
              <div class="left-bottom">
                <a-row type="flex" justify="space-between" :gutter="[24, 12]">
                  <a-col>
                    <p class="info-heading" style="font-size: 26px">
                      $
                      {{
                        (item.quantity * item.price.split("$")[1]).toFixed(2)
                      }}
                    </p>
                  </a-col>
                  <a-col>
                    <a-button @click="removeItem(item.id)" size="large"
                      >Remove</a-button
                    >
                  </a-col>
                </a-row>
              </div>
            </div>
          </a-col>

          <a-col>
            <div class="right">
              <img
                class="img-item"
                :src="require(`@/assets/products/${item.image}`)"
              />
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div v-else>
      <a-empty style="margin: 80px 0px">
        <span slot="description">
          <h1 style="opacity: 0.6">Cart is empty</h1>
        </span>
      </a-empty>
      
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    removeItem(id) {
      this.$store.commit("removeFromCart", id);
    },
  },
  computed: {
    totalItems() {
      return this.$store.getters.totalItems;
    },
    cartItems() {
      return this.$store.state.items;
    },
  },
};
</script>

<style scoped>
.left-top {
  background-color: #f2921d;
  padding: 0px 20px 10px 20px;
  width: 200px;
  max-width: 200px;
}
.info-heading {
  font-size: 22px;
  overflow: hidden;
  padding: 0;
  margin: 0;
  color: #000;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info-subtitle {
  font-size: 16px;
  color: #000;
  margin: 0px;
}
.ant-btn {
  border-radius: 0;
  margin-top: 2px;
  background-color: #000;
  color: white;
}
.img-item {
  width: 300px;
  height: 200px;
  border: 1px solid #000;
}
</style>