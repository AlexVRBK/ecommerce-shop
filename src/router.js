import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Product from "@/views/Product.vue";
import Tables from "@/views/Tables.vue";
import Plant from "@/views/Plant.vue";
import Ceramics from "@/views/Ceramics.vue";
import cart from "@/views/cart.vue";





const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    {
      path: "/Tables",
      name: "Tables",
      component: Tables,
    },
    {
      path: "/Plant",
      name: "Plant",
      component: Plant,
    },
    {
      path: "/Ceramics",
      name: "Ceramics",
      component: Ceramics,
    },
    {
      path: "/products/:id",
      name: "Product",
      component: Product,
    },
    {
      path: "/cart",
      name: "cart",
      component: cart,
    },
 
  ],
});

export default router;
