import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // 按需加载
      component: function (resolve) {
        require(['@/pages/hello'], resolve)
      }
    }
  ]
})
