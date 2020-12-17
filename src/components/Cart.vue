<template>
  <div>
    <div class="item" v-for="(item, index) in cartItems" :key="index">
      <a-row type="flex" justify="center">
        <a-col>
          <p>{{ item.name }}</p>
          <p>
            {{ item.country }}
          </p>
          <button @click="removeItem(item.id)">Remove</button>
        </a-col>
        <a-col
          ><img
            class="item-img"
            :src="require(`@/assets/products/${item.image}`)"
          />
        </a-col>
      </a-row>
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
    cartItems() {
      return this.$store.state.items;
    },
  },
};
</script>

<style>
</style>