<template>
  <div class="cart-drawer">
    <v-navigation-drawer v-model="drawer" temporary location="right">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
        vero, molestiae nisi adipisci libero dicta ea harum amet eos minima,
        eligendi quibusdam quia sequi a aliquid autem officiis quod nobis.
      </p>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = true;
    });
  },
};
</script>
