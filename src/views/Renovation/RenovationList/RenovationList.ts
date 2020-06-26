import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { RenovationListData } from '@/types/views/RenovationList.interface'
// Banner
import modules from "@/components" // 组件
// 组件
import {Icon} from 'vant';
import 'vant/lib/index.css';

import draggable from 'vuedraggable'
@Component({
  components: {
    [Icon.name]: Icon,
    draggable,
    asyncLoadComp: modules.asyncLoadComp,
  }
})
export default class RenovationList extends Vue {
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
      describe: '',
    },
    // 展示用
    listdata: [
      {
        id: 1,
        name: 'Search',
        checked: true
      },
      {
        id: 2,
        name: 'Banner',
        checked: false
      },
      {
        id: 3,
        name: 'Search',
        checked: false
      }
    ]
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
  // 点击设置选中效果
  binscelect(id) {
    if (this.data.listdata && this.data.listdata.length > 0) {
      for (let value of this.data.listdata) {
        if (value.id === id) {
          value.checked = true;
        } else {
          value.checked = false;
        }
      }
    }
  }

  // 删除事件
  close(id) {
    for (let i = 0; i < this.data.listdata.length; i++) {
      if (this.data.listdata[i].id === id) {
        this.data.listdata.splice(i, 1); 
        break
      }
    }
  }
}
