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
    asyncLoadComp: modules.AsyncLoadComp,
    DiyForm: modules.DiyForm,
    CopyRight: modules.CopyRight,
  }
})
export default class RenovationList extends Vue {
  // Getter
  @Getter("admin/buildsystem/page") page
  
  // Action
  @Action('admin/buildsystem/UPDATE_STATE_ASYN') UPDATE_STATE_ASYN

  // data
  data: RenovationListData = {
    // 当前选择的组件配置
    componentconfig: {},
    name: '',
    // 页面配置
    ispage: true,
  }

  created() {
    // 导入页面配置
    let Config = require('@/config/buildConfig').default;
    this.UPDATE_STATE_ASYN({page: Config.page})
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

  // 背景颜色设置
  bgRadio(e) {
    // 默认背景颜色
    if (e === '1') {
      this.page.bgColor = '#ffffff';
      this.UPDATE_STATE_ASYN({page: this.page})
    }
  }

  // 点击设置选中效果
  binscelect(uuid?: any, config?: any, name?: any) {
    if (uuid) {
      this.data.ispage = false;
      // 设置当前配置项
      this.data.componentconfig = config;
      this.data.name = name;
      if (this.page.components && this.page.components.length > 0) {
        for (let value of this.page.components) {
          if (value.uuid === uuid) {
            value.checked = true;
          } else {
            value.checked = false;
          }
        }
        this.UPDATE_STATE_ASYN({page: this.page})
      }
    } else {
      this.data.ispage = true;
    }
  }

  // 删除事件
  close(uuid) {
    for (let i = 0; i < this.page.components.length; i++) {
      if (this.page.components[i].uuid === uuid) {
        this.page.components.splice(i, 1); 
        console.log(this.page.components)
        this.UPDATE_STATE_ASYN({page: this.page})
        break
      }
    }
  }
}
