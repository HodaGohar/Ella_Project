<template>
  <div class="top-offers bg-grey-lighten-4 pt-7">
    <v-container>
      <v-row>
        <v-col cols="4" class="py-0 pr-4" style="height: 260px;">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent" v-bind="props" style="overflow: hidden; height: 100%; border-radius: 7px;">
              <img
                src="@/assets/images/playstations.webp"
                :style="`width:100%; height:100%; cursor:pointer; transition: 0.7s all ease-in-out; scale: ${isHovering ? 1.05 : 1}`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4" class="py-0 pr-4" style="height: 260px;">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent" v-bind="props" style="overflow: hidden; height: 100%;border-radius: 7px;">
              <img
                src="@/assets/images/chairs.webp"
                :style="`width:100%; height:100%; cursor:pointer; transition: 0.7s all ease-in-out; scale: ${isHovering ? 1.05 : 1}`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4" class="py-0 pr-4" style="height: 260px;">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent" v-bind="props" style="overflow: hidden; height: 100%;border-radius: 7px;">
              <img
                src="@/assets/images/headset.webp"
                :style="`width:100%; height:100%; cursor:pointer; transition: 0.7s all ease-in-out; scale: ${isHovering ? 1.05 : 1}`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
      <v-row class="mt-9">
        <v-col cols="6">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent" v-bind="props" style="overflow: hidden; height: 100%;border-radius: 7px;">
              <img
                src="@/assets/images/laptops.webp"
                :style="`width:100%; height:100%; cursor:pointer; transition: 0.7s all ease-in-out; scale: ${isHovering ? 1.05 : 1}`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="6">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent" v-bind="props" style="overflow: hidden; height: 100%;border-radius: 7px;">
              <img
                src="@/assets/images/iphones.webp"
                :style="`width:100%; height:100%; cursor:pointer; transition: 0.7s all ease-in-out; scale: ${isHovering ? 1.05 : 1}`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>