import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { ProductListData } from '@/types/views/ProductList.interface'
// import {  } from "@/components" // 组件
// import VueDraggableResizable from '@/utils/vue-draggable-resizable.vue'
@Component({
  components: {
    // VueDraggableResizable,
  }
})
export default class ProductList extends Vue {
  // Getter
  // @Getter author
  
  // Action
  // @Action GET_DATA_ASYN

  // data
  data: ProductListData = {
    pageName: 'ProductList',
    vLine: [],
    hLine: [],
    height: '',
    width: '',
    y: '',
    x: ''
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
  // 辅助线回调事件
  getRefLineParams(params) {
    const { vLine, hLine } = params
    let id = 0
    this.data.vLine = vLine.map(item => {
      item.id = ++id
      return item
    })
    this.data.hLine = hLine.map(item => {
      item.id = ++id
      return item
    })
  }

  onResize(x: any, y: any, width: any, height: any) {
    this.data.x = x;
    this.data.y = y
    this.data.width = width
    this.data.height = height
  }
  onDrag(x: any, y: any) {
    this.data.x = x
    this.data.y = y
  }
    
}
