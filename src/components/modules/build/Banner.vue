<template>
  <div class="Banner-wrap">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in data.images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { BannerData } from "@/types/components/build/Banner.interface";
import { Swipe, SwipeItem, Lazyload } from 'vant';
Vue.use(Lazyload);
@Component({
   components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  }
})
export default class Banner extends Vue {
  name!: string;
  // @Prop({
  //   type: Array,
  //   default() {
  //     return [];
  //   }
  // })
  // public Dayslist;
  // Watch
  // @Watch("Dayslist")
  // public handler(newval: any, old: any) {
  //   this.init();
  // }
  // data
  data: BannerData = {
    componentName: "Banner",
    images: [
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg',
    ],
  };

  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
   
  }

  
}
</script>

<style lang="scss" scope>
@import "@/assets/scss/variables.scss";

img{
  max-width: 100%;
}
</style>

