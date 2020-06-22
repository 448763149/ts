import { Component, Vue, Inject } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { IndexData } from '@/types/views/mian.interface'
import { setToken } from '@/utils/common'
import modules from "@/components" // 组件

@Component({
  components: {
    qwMenu: modules.qwMenu
  }
})
export default class About extends Vue {
  // Getter
  @Getter('admin/index/author') author;
  @Getter("admin/login/info") info;
  @Action('admin/login/UPDATE_STATE_ASYN') UPDATE_STATE_ASYN
  
  // 注入刷新方法
  @Inject() reload!: any
  // Action
  // @Action('admin/index/GET_DATA_ASYN') GET_DATA_ASYN

  // data
  private data: IndexData = {
    pageName: 'index',
    navigationswitch: true
  }

  created() {
    // this.reload.reload();
    // debugger
    // this.GET_DATA_ASYN()
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
  handleClick(name) {
    let _this = this
     // 登出
    if (name === 'Logout') {
       setToken('')
       localStorage.clear();
       _this.reload.reload();
       // tslint:disable-next-line: no-unused-expression
       _this.UPDATE_STATE_ASYN({info: '', menutitle: ''})
       this.$router.push({path: '/login'})
    }
  }
 
  // 设置导航的宽度
  setnavigation(value) {
    this.data.navigationswitch = value
  }
}
