// /src/routes.js
import Home from "./components/Home";
import Browse from "./components/Browse";
import Cart from "./components/Cart";
export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/browse",
    name: "browse",
    component: Browse,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
];
