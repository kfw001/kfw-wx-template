import Author from '@/components/Author/Author.vue'
import Home from '@/views/Hello.vue'

// 微信授权不能异步加载组件
export default [
  {
    path: '/',
    component: Home,
    name: 'index'
  },
  {
    path: '/author/:auth',
    name: 'Author',
    component: Author
  },
  {
    path: '*',
    name: '404',
    redirect: '/'
  }
  ];
