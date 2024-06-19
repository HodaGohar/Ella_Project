<template>
  <div class="layout">
    <v-layout>
      <CartDrawer />
      <v-main>
        <slot></slot>
      </v-main>
      <AppNav />
      <AppFooter />
    </v-layout>
  </div>
</template>

<script>
import AppNav from "@/components/global/AppNav.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import CartDrawer from "@/components/global/CartDrawer.vue";
export default {
  data: () => ({
    drawer: true,
  }),
  components: {
    AppNav,
    AppFooter,
    CartDrawer,
  },
};
</script>
