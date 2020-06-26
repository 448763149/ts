<template>
   <div class="hq_search">
    <div class="hq-search-box">
      <div class="hq-search-bg">
        <van-field left-icon="search" placeholder="请输入用户名" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { SearchData } from "@/types/components/build/Search.interface";
import { Field, Icon} from 'vant';
@Component({
   components: {
    [Field.name]: Field,
    [Icon.name]: Icon,
  }
})
export default class Search extends Vue {
  name: string = 'Search';
  @Prop()
  public configdata!: any;
  // public Dayslist;
  // Watch
  // @Watch("Dayslist")
  // public handler(newval: any, old: any) {
  //   this.init();
  // }
  // data
  data: SearchData = {
    componentName: "Search",
  };

  created() {
    //
    console.log(this.name)
    console.log(this.configdata)
  }

  activated() {
    //
  }

  mounted() {
   //
  }

  
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.Banner-wrap {
  width: 100%;
}
</style>

