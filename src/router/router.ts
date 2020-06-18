/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export default [
  {
    path: '/',
    redirect: '/admin/index'
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
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/mian.vue'),
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
  }
]
