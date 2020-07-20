/*
 * @Description: 公共函数
 * @Author: huqiang
 * @Date: 2020-7-04 11:36:27
 * 
 */

import Cookies from 'js-cookie'
import { cookieExpires } from '@/config' // cookie保存的天数

/**
 * @Author: huqiang
 * @msg: 存取token
 * @param {string} token
 */
export const TOKEN_KEY: string = 'token'
export const setToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
}
export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) {
    return token
  } else {
    return false
  }
}

/**
 * @name: 根据组件列表数组动态注册组件
 * @param {Array} componentsList  组件名数组
 * @return {Object} 动态注册的组件名及对应引入的组件文件，可直接用于Vue中的components属性中
 */
export const dynamicComponents = (componentsList: any) => {
  let components = {};
  componentsList.map(item => {
    // 动态注册组件
    components[item] = () => import(`@/components/modules/common/${item}/index`);
  });
  return components;
}

/**
 * @param {String} url
 * @description 从URL中解析参数
 */
export const getParams = (url: string) => {
  const keyValueArr = url.split('?')[1].split('&')
  let paramObj: any = {}
  keyValueArr.forEach(item => {
    const keyValue = item.split('=')
    paramObj[keyValue[0]] = keyValue[1]
  })
  return paramObj
}

/**
 * 判断一个对象是否存在key，如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性
 * 如果没有传入key这个参数，则判断obj对象是否有键值对
 */
export const hasKey = (obj: any, key: string | number) => {
  if (key) {
    return key in obj
  } else {
    const keysArr = Object.keys(obj)
    return keysArr.length
  }
}

/**
 * @msg: 获取系统当前时间
 * @param {string} fmt 时间格式 具体看代码
 * @return: string
 */
export const getDate = (fmt: any) => {
  let time = ''
  const date = new Date()
  const o: any = {
    "M+": date.getMonth() + 1, // 月份 
    "d+": date.getDate(), // 日 
    "H+": date.getHours(), // 小时 
    "m+": date.getMinutes(), // 分 
    "s+": date.getSeconds(), // 秒 
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度 
    "S": date.getMilliseconds() // 毫秒 
  }
  if (/(y+)/.test(fmt)) {
    time = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
  }
  for (const k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      time = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
    }
  }
  return time
}




/**
 * @msg: 获取间隔天数
 * @param {string} day1 时间格式 开始时间
 * @param {string} day2 时间格式 结束时间
 * @return: object
 */
// tslint:disable-next-line: class-name
export class getDays {
  private day1: string;  /*私有*/
  private day2: string;
  constructor(day1: string, day2: string) {
    this.day1 = day1;
    this.day2 = day2;
  }
  // 返回方法
  rundate(): any {
    // 获取入参字符串形式日期的Date型日期
    let st = this.getDate(this.day1);
    let et = this.getDate(this.day2);
    let retArr: any = [];
    // 获取开始日期的年，月，日
    // tslint:disable-next-line: one-variable-per-declaration
    let yyyy: any = st.getFullYear(),
    mm = st.getMonth(),
    dd = st.getDate();
    // 循环
    while (st.getTime() !== et.getTime()) {
      // 使用dd++进行天数的自增
      retArr.push(this.getYMD(st));
      st = new Date(yyyy, mm, dd++);
    }
    // 将结束日期的天放进数组
    retArr.push(this.getYMD(et));
     // 或可换为return ret;
    retArr.splice(0, 1);
    return retArr
  }
  // getDays类内部方法 获取字符串形式的年月日
  getYMD(st: any) {
    // 将结果放在数组中，使用数组的join方法返回连接起来的字符串，并给不足两位的天和月十位上补零
    return [st.getFullYear(), this.fz(st.getMonth() + 1), this.fz(st.getDate())].join("-");
  }
  // getDays类内部方法 使字符串形式的日期返回为Date型的日期
  getDate(strArr: string) {
      let Arr: any = strArr.split('-');
      return new Date(Arr[0], Arr[1] - 1, Arr[2]);
  }
  // getDays类内部方法 给月和天，不足两位的前面补0
  fz(num: any) {
    if (num < 10) {
      // tslint:disable-next-line: no-parameter-reassignment
      num = "0" + num;
    }
    return num
  }
}
 




/**
 * @msg: 获取系统当前时间
 * @param {string} date 时间
 * @param {string} fmt 时间格式
 * @return: string
 */
export const formatDate = (date: any, fmt: string) => {
  let time = ''
  const o: any = {
    "M+": date.getMonth() + 1, // 月份 
    "d+": date.getDate(), // 日 
    "H+": date.getHours(), // 小时 
    "m+": date.getMinutes(), // 分 
    "s+": date.getSeconds(), // 秒 
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度 
    "S": date.getMilliseconds() // 毫秒 
  }
  if (/(y+)/.test(fmt)) {
    time = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
  }
  for (const k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      time = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
    }
  }
  return time
}

// copy in the 'fx-fuli' utils
/**
 * 校验手机号是否正确
 * @param phone 手机号
 */

export const verifyPhone = (phone: string | number) => {
  const reg = /^1[34578][0-9]{9}$/
  const _phone = phone.toString().trim()
  let toastStr = _phone === '' ? '手机号不能为空~' : !reg.test(_phone) && '请输入正确手机号~'
  return {
    errMsg: toastStr,
    done: !toastStr,
    value: _phone
  }
}

export const verifyStr = (str: string | number, text: string) => {
  const _str = str.toString().trim()
  const toastStr = _str.length ? false : `请填写${text}～`
  return {
    errMsg: toastStr,
    done: !toastStr,
    value: _str
  }
}

// 截取字符串
export const sliceStr = (str: any, sliceLen: number) => {
  if (!str) { return '' }
  let realLength = 0
  const len = str.length
  let charCode = -1
  for (let i = 0; i < len; i++) {
    charCode = str.charCodeAt(i)
    if (charCode >= 0 && charCode <= 128) {
      realLength += 1
    } else {
      realLength += 2
    }
    if (realLength > sliceLen) {
      return `${str.slice(0, i)}...`
    }
  }

  return str
}


/**
 * JSON 克隆
 * @param {Object | Json} jsonObj json对象
 * @return {Object | Json} 新的json对象
 */
export function objClone(jsonObj: any) {
  let buf: any
  if (jsonObj instanceof Array) {
    buf = []
    let i = jsonObj.length
    while (i--) {
      buf[i] = objClone(jsonObj[i])
    }
    return buf
  } else if (jsonObj instanceof Object) {
    buf = {}
    for (let k in jsonObj) {
      buf[k] = objClone(jsonObj[k])
    }
    return buf
  } else {
    return jsonObj
  }
}



/**
 * @name: 根据传入的值设置vuex
 * @param  page  装修页面组件数组设置组件
 * @param  componentsid  页面组件的uuid
 * @param  uuid  页面组件组件配置项的uuid
 * @param  UPDATE_STATE_ASYN  修改vuex 方法
 */

export const setup = (page: any, value: any, componentsid: string, uuid: string, UPDATE_STATE_ASYN: any) => {
  if (page) {
    for (let item of page.components) {
      if (item.uuid === componentsid) {
        for (let fig of item.config) {
           if (fig.uuid === uuid) {
            fig.data.value = value;
            break;
           }
        }
        break;
      }
    }
    UPDATE_STATE_ASYN({page})
  }

}

export const calculation = (page: any, configdata: any, uuid: string) =>  {
  if (page) {
    for (let item of page.components) {
      if (item.uuid === configdata.uuid) {
        for (let fig of item.config) {
          if (fig.uuid === uuid) {
            return fig.data.value;
          }
        }
        break;
      }
    }
  }
}