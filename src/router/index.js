import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/top',
      component: {
        template: '<div>トップページです。</div>'
      }
    },
    {
      path: '/news',
      component: {
        template: '<div>ニュースページです。</div>'
      }
    },
    {
      path: '/category',
      component: {
        template: '<div>カテゴリ一覧ページです。</div>'
      }
    }
  ]
})
