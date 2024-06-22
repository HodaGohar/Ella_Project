import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
  }),
  actions: {
    async getproducts() {
      await axios
        .get("https://dummyjson.com/docs/products")
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
  },
});
