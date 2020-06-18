
import { Interceptors } from '@/api/request/interceptors';
import { MOCKHOST } from '@/config'
import { Message, Notice } from 'view-design' // 这是我引入的antd的组件库,为了方便弹出吐司
import router from '@/router'
let message: any = Message;
export class HttpService {
  public axios: any;
  public modal: any;

  constructor() {
    // 获取axios实例
    this.axios = new Interceptors().getInterceptors();
  }


  /**
   * get请求
   * @param params  参数
   * @param modulename    模块
   * @param operation     接口
   * @param flag          标记
   * @param verson       版本,默认1.0.0
   * @param service      服务,默认services
   * @param jwt   是否token校验
   */
  // tslint:disable-next-line: max-line-length
  public getData(params: object, operation: string, modulename?: string, flag?: string, jwt: boolean = false , verson = '1.0.0', service = 'services') {
    // const url = service + '/' + verson + '/' + modulename + '/' + operation;
    const url = MOCKHOST + '/' + operation;
    const body = {
      parameter: {
        data: params,
        tag: operation,
      },
    };

    return new Promise((resolve, reject) => {
      this.axios.get(url, {
        params: body,
        headers: { isJwt: jwt },
      }).then((res) => {
        this.resultHandle(res, resolve);
      }).catch((err) => {
        reject(err.message);
      });
    });

  }


  /**
   * post请求
   * @param params  参数
   * @param jwt   是否token校验
   * @param modulename    模块
   * @param operation     接口
   * @param flag          标记
   * @param verson       版本,默认1.0.0
   * @param service      服务,默认services
   */
  // tslint:disable-next-line: max-line-length
  public postData(params: object,  operation: string, modulename?: string, flag?: string, jwt: boolean = false , verson = '1.0.0', service = 'services') {
    // const url = service + '/' + verson + '/' + modulename + '/' + operation;
    const url = MOCKHOST + '/' + operation;
    const body = {
      data: params,
      tag: operation,
    };
    return new Promise((resolve, reject) => {
      this.axios.post(url, body, {
        headers: { isJwt: jwt },
      }).then((res) => {
        this.resultHandle(res, resolve);
      }).catch((err) => {
        reject(err.message);
      });
    });

  }


  /**
   *
   * @param res
   * @param resolve
   */
  public resultHandle(res: any, resolve) {
    if (res.return_code === '1') {
      resolve(res.data);
    } else {
      this.errorHandle(res);
    }
  }


  /**
   * 服务端状态处理,例如中断性异常,退出异常等等(与拦截器http握手状态注意区分,一般都能分清楚吧)
   * @param res
   */
  public errorHandle(res: any) {
    message.warning(res.msg);  // 统一谈服务端提示,我们提示统一由服务端提供
    // 状态码判断
    switch (res.status) {
      case -102:
        break;
      case -152:
        break;
      default:
      // console.log(other);
    }
  }

}
