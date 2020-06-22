
import BasicLayout from '@/views/mian.vue'
export default {
  path: '/commodity',
  name: 'commodity',
  redirect: {
    name: 'admin'
  },
  component: BasicLayout,
  meta: {
    icon: '',
    keepAlive: true,
    title: 'commodity'
  },
  children: [
    {
      path: 'commodity/ProductList',
      name: 'b2cManageList',
      meta: {
        title: '商品管理'
      },
      component: () => import('@/views/commodity/ProductList/ProductList')
    },

  ]
}
