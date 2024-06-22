<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="con">
              <h3><span>Huge Saving</span> on UHD Televisions</h3>
              <p class="hint"> Sale up to 70% off on selected items*</p>
              <v-btn
                variant="outlined"
                class="py-3 px-10"
                density="combact"
                style="border-radius: 20px; text-transform: none;"
              >
                shop now
              </v-btn>
            </div> 
          </v-col>
        </v-row>
        </v-container>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  .parent {
    height: 450px;
    background-image: url(../../assets/images/banner-bg.jpg);
    background-size: cover;
    background-position: left top;
    .con{
      padding: 55px 38px 30px;
      line-height: 1.25;
      color: #fff;
      h3{
        font-size: 50px;
      }
      span{
        color: rgb(24, 219, 222);
      }
      p{
        padding-top: 36px;
        letter-spacing: 1px;
      }
      .hint{
        padding-bottom: 40px;
      }
    }
  }
}
</style>
