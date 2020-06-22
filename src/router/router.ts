/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
import commodity from './modules/commodity' // 商品管理
import renovation from './modules/renovation' // 装修系统
import BasicLayout from '@/views/mian.vue'
console.log(renovation)
const frameIn = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'login'
    }
  },
  {
    path: '/',
    name: 'admin',
    component: BasicLayout,
    meta: {
      icon: '',
      keepAlive: true,
      title: 'admin'
    },
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
        meta: {
          icon: '',
          keepAlive: true,
          title: 'admin-index'
        }
      }
    ]
  },
  commodity,
  renovation,
]
export default [...frameIn]