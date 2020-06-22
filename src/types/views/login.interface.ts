// login.Data 参数类型
export interface LoginData {
  pageName: string,
  loginData: any,
  loginRules: any
}

// VUEX login.State 参数类型
export interface LoginState {
  info?: any
  token: string
  menutitle: string
  childrenMenu: any
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

