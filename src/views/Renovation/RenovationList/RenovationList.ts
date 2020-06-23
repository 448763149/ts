import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { RenovationListData } from '@/types/views/RenovationList.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter author
  
  // Action
  // @Action GET_DATA_ASYN

  // data
  data: RenovationListData = {
    page: {
      // 页面title
      title: '首页',
      // 设置页面颜色
      setbg: '1',
      // 背景颜色
      bgColor: '#ffffff',
      // 页面描述
      describe: ''
    }
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
