// import Vue from 'vue'
// import Router from 'vue-router'

import Home from './views/Home.vue'
import AreaPage from './views/AreaPage.vue'
import IndexPage from './views/IndexPage.vue'
import Station from './views/Station.vue'

import Index from './views/index.vue'
// Vue.use(Router)

export default new VueRouter({
  routes: [
    {
      path: '/index',
      name: 'home',
      component: Index,
	  meta:{
		  keepAlive: true,//需要缓存
	  }
    },
     {
      path: '/home',
      name: 'main',
      component: Home,
	  meta:{
		  keepAlive: true,//需要缓存
	  }
    },
	{
	  path: '/areaPage',
	  name: 'areaPage',
	  component: AreaPage,
	},
	{
	  path: '/indexPage',
	  name: 'indexPage',
	  component: IndexPage
	},
	{
	  path: '/stationPage',
	  name: 'stationPage',
	  component: Station
	},
    {
      path: '/railwayPage',
      name: 'railwayPage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/RailwayPage.vue'),
	  meta:{
	  		  keepAlive: true,//需要缓存
			  isBack:false, //用于判断上一个页面是哪个
			  firstEnter:true
	  }
    },
	{
	  path: '*',
	  component: Index
	},
  ]
})
