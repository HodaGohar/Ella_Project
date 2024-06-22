<template>
  <!-- <div class="home"><h1>home page</h1></div> -->
  <!-- <v-icon></v-icon> -->
  <UpperBanner />
  <TheFeatures/>
  <TopOffers />>
  
</template>

<script>
import UpperBanner from "@/components/home_page/UpperBanner";
import TheFeatures from "@/components/home_page/TheFeatures";
import TopOffers from "@/components/home_page/TopOffers"
// @ is an alias to /src
export default {
  name: "HomeView",
  components: { UpperBanner, TheFeatures , TopOffers },
};
</script>
