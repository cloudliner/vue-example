import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import News from '@/components/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/category',
      component: {
        template: '<h1>Category Page!</h1>'
      }
    }
  ]
})
