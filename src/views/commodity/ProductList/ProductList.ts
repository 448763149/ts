import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { ProductListData } from '@/types/views/ProductList.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class ProductList extends Vue {
  // Getter
  // @Getter author
  
  // Action
  // @Action GET_DATA_ASYN

  // data
  data: ProductListData = {
    pageName: 'ProductList'
  }

  created() {
    //
  }
  
  activated() {
    //
  }

  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }
    
}
