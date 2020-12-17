import Vue from "vue";
import Vuex from "vuex";
import mock from "../data/mock";
import { message } from "ant-design-vue";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    items: [],
  },
  mutations: {
    addToCart(state, id) {
      for (var i in mock) {
        if (mock[i].id == id) {
          if (state.items.includes(mock[i])) {
            //if the item has already been added into the cart, increament the quantity
            const tempIndex = state.items.indexOf(mock[i]);
            ++state.items[tempIndex].quantity;
            message.success("Added to cart");
          } else {
            const newArray = mock[i];
            newArray["quantity"] = 1;
            state.items.push(newArray);
            message.success("Added to cart");
          }
          break;
        }
      }
    },
    removeFromCart(state, id) {
      for (var i in state.items) {
        if (state.items[i].id == id) {
          console.log({ i, id });
          state.items.splice(i, 1);
          message.success("Removed from cart");
          break;
        }
      }
    },
  },
  getters: {
    totalItems(state) {
      return state.items.length;
    },
  },
});
