<template>
  <div class="home"><h1>home page</h1></div>
  <v-icon></v-icon>
  <FlashDeals />
</template>

<script>
// @ is an alias to /src
import { productsModule } from "@/stores/Products";
import { mapActions } from "pinia";
import FlashDeals from "@/components/home_page/FlashDeals.vue";

export default {
  name: "HomeView",
  components: {
    FlashDeals,
  },
  methods: {
    ...mapActions(productsModule, ["getproducts"]),
  },
  async mounted() {
    await this.getproducts();
  },
};
</script>
