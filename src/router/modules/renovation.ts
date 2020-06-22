
import BasicLayout from '@/views/mian.vue'
export default {
  path: '/renovation',
  name: 'renovation',
  redirect: {
    name: 'admin'
  },
  component: BasicLayout,
  meta: {
    icon: '',
    title: 'renovation'
  },
  children: [
    {
      path: 'renovation/renovationList',
      name: 'renovation',
      meta: {
        title: '装修系统'
      },
      component: () => import('@/views/Renovation/RenovationList/RenovationList')
    },
  ]
}
