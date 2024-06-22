<template>
<<<<<<< HEAD
  <div class="home"><h1>home page</h1></div>
  <v-icon></v-icon>
  <FlashDeals />
=======
  <!-- <div class="home"><h1>home page</h1></div> -->
  <!-- <v-icon></v-icon> -->
  <UpperBanner />
  <TheFeatures/>
  <TopOffers />>
  
>>>>>>> 12b886e5227e1f005fd0eeefe4cb340089ada595
</template>

<script>
import UpperBanner from "@/components/home_page/UpperBanner";
import TheFeatures from "@/components/home_page/TheFeatures";
import TopOffers from "@/components/home_page/TopOffers"
// @ is an alias to /src
<<<<<<< HEAD
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
=======
export default {
  name: "HomeView",
  components: { UpperBanner, TheFeatures , TopOffers },
>>>>>>> 12b886e5227e1f005fd0eeefe4cb340089ada595
};
</script>
