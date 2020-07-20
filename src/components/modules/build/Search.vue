<template>
   <div class="hq_search">
    <div class="hq-search-box" >
      <div class="hq-search-bg" :class="[isround('1')]">
        <van-field  :center="true" :input-align="alignment('4')==='1'?'center':'left'" left-icon="search" placeholder="请输入用户名" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { SearchData } from "@/types/components/build/Search.interface";
import { calculation } from "@/utils/common.ts" // 组件
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
  @Getter("admin/buildsystem/page") page

 
  // data
  data: SearchData = {
    componentName: "Search",
    isround: '1',
  };
  // 搜索框样式 1 正常 2圆形
  get isround() {
    return (uuid) => {
      for (let item of this.page.components) {
        if (item.uuid === this.configdata.uuid) {
          for (let fig of item.config) {
            if (fig.uuid === uuid) {
              // return fig.data.value;
              if (fig.data.value === '2') {
               return 'cap-search'
              }
            }
          }
          break;
        }
      }
    }
  }

  // 输入框是否居中
  get alignment() {
    return (uuid) => calculation(this.page, this.configdata, uuid)
      
      // for (let item of this.page.components) {
      //   if (item.uuid === this.configdata.uuid) {
      //     for (let fig of item.config) {
      //       if (fig.uuid === '4') {
      //         return fig.data.value;
      //       }
      //     }
      //     break;
      //   }
      // }
//     }
  }
  created() {
    //
    console.log(this.configdata);
    
  }

  activated() {
    //
  }

  mounted() {
   //
  }

  
}
</script>
<style lang="scss">
.hq-search-box .tc .van-field__control{
  text-align: center;
  display: inline-block;
  width: auto;
}
.hq-search-box .tc .van-field__body,.hq-search-box .tc .van-field__value{
   display: inline-block;
   flex: auto;
}
</style>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.Banner-wrap {
  width: 100%;
}
.cap-search {
  border-radius: 20px;
  overflow: hidden;
}

</style>

