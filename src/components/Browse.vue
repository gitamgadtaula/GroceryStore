<template>
  <div>
    <div class="nav">
      <a-row type="flex" justify="start" :gutter="[24, 12]">
        <a-col
          :class="activeClass == 'United States' ? 'active' : 'inactive'"
          @click="usActive"
        >
          United States
        </a-col>
        <a-col
          :class="activeClass == 'Canada' ? 'active' : 'inactive'"
          @click="canadaActive"
        >
          Canada
        </a-col>
        <a-col
          :class="activeClass == 'Mexico' ? 'active' : 'inactive'"
          @click="mexicoActive"
        >
          Mexico
        </a-col>
        <a-col
          :class="activeClass == 'Brazil' ? 'active' : 'inactive'"
          @click="brazilActive"
        >
          Brazil
        </a-col>
      </a-row>
    </div>
    <grocery-products :filteredResults="filteredResults" />
  </div>
</template>

<script>
import GroceryProducts from "./Products";
import mock from "../data/mock";

export default {
  components: { GroceryProducts },
  data() {
    return {
      mock,
      activeClass: "United States",
    };
  },
  methods: {
    usActive() {
      this.activeClass = "United States";
    },
    canadaActive() {
      this.activeClass = "Canada";
    },
    mexicoActive() {
      this.activeClass = "Mexico";
    },
    brazilActive() {
      this.activeClass = "Brazil";
    },
  },
  computed: {
    filteredResults() {
      if (!this.activeClass) {
        return this.mock;
      }
      return this.mock.filter((item) => {
        return item.country == this.activeClass;
      });
    },
  },
};
</script>

<style scoped>
.active {
  cursor: pointer;
  background-color: #e6e6e6;
}
.inactive:hover {
  cursor: pointer;
  background-color: #e6e6e6;
}
</style>