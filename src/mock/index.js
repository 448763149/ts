// 将所有的mock文件引入
// require('@/mock/usermock')
import { Random } from 'mockjs' // 引入random对象,随机生成数据的对象，（与占位符@一样）
import Mock from 'mockjs' //引入mockjs，npm已安装

import { MOCKHOST } from '@/config'
Mock.setup({
  timeout: 1000  //设置请求延时时间
})


const userDB = [
  {
    username: 'admin',
    password: 'admin',
    uuid: 'admin-uuid',
    info: {
      name: 'huqiang',
      avatar: '../assets/images/img.jpg',
      access: ['admin'],
      userMenuList: [
        {
          path: '/',
          title: '仪表盘',
          header: 'home',
          icon: 'md-speedometer',
        },
        {
          path: '/commodity',
          title: '商品管理',
          header: 'home',
          icon: 'md-speedometer',
          children: [
            {
              path: `/commodity/commodity/ProductList`,
              title: '商品',
            },
            {
              path: `/thirdParty/store`,
              title: '店铺',
              children: [
                {
                  path: `/thirdParty/store/managent`,
                  title: '第三方店铺管理'
                }
              ]
            }
          ]
        },{
          path: '/renovation',
          title: '装修系统',
          header: 'home',
          icon: 'md-speedometer',
          children: [
            {
              path: `/renovation/renovation/renovationList`,
              title: '装修',
            }
          ]
        }
      ]
    }
  }
];
Mock.mock(`${MOCKHOST}/api/login`, /post|get/i, (options) => {
  let item= JSON.parse(options.body)
  let parame;
  userDB.forEach((v, k) => {
    if(v.username === item.data.userName && v.password === item.data.pwd){
      parame = {
        return_code: '1',
        msg: '登录成功',
        data: {
          userName:item.data.userName,
          password:item.data.pwd,
          token: 'A68NUPaXVBJYRStwvd9frcUn8rlf30h6',
          info: userDB[0].info
        }
      }
    }else{
      parame = {
        return_code: '401',
        msg: '用户名或密码错误',
        data: {}
      }
    }
  })
  return parame;
}) //调用模拟数据方法
