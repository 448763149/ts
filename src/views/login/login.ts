import { Component, Vue } from "vue-property-decorator"
import { Getter, Action} from "vuex-class"
import { LoginData } from '@/types/views/login.interface'
import { setToken } from '@/utils/common'
const modules = require("@/components").default // 组件
@Component({
  components: {
    CopyRight: modules.CopyRight
  }
})
export default class About extends Vue {
  // Getter
  // @Getter author

  // Action
  @Action('admin/login/GET_DATA_ASYN') GET_DATA_ASYN
  @Action('admin/login/UPDATE_STATE_ASYN') UPDATE_STATE_ASYN
  // data
  data: LoginData = {
    pageName: 'login',
    loginData: {
      userName: '',
      pwd: '',
      vCode: ''
    },
    loginRules: {
      userName: [
        {
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }
      ],
      pwd: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }
      ],
      vCode: [
        {
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        },
        {
          required: true,
          min: 4,
          max: 4,
          message: '验证码输入有误',
          trigger: 'blur'
        }
      ]
    },
  }

  created() {
    // 
  }

  activated() {
    //
  }

  mounted() {
    // 设置Cookies的值
    // setToken('12222222222222')
  }

  // 初始化函数
  init() {
    //
  }
  handleSubmit(name: string): void {
    console.log(name)
    let _this = this; 
    let ref: any = this.$refs[name];
    console.log(_this)
    ref.validate(valid => {
      // console.log(valid)
      console.log(_this.data.loginData.userName)
      let data: any = {
        userName: _this.data.loginData.userName,
        pwd: _this.data.loginData.pwd
      }
      this.$httpService.postData(data, 'api/login', 'tag').then((res) => {
        console.log(res)
        let result: any = res;
        setToken(result.token)
        this.UPDATE_STATE_ASYN({info: result.info});
        this.$router.push({path: '/'})
        // doing            
      }, (error) => {
         console.log(error);
      });
      // this.GET_DATA_ASYN(data);
    })
  }

}
