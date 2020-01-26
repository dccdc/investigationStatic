// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
// import 'roboto-fontface/css/roboto/roboto-fontface.css'
// import '@mdi/font/css/materialdesignicons.css'

//引入mock,才能使用
// require('./mock/mock.js')


Vue.config.productionTip = false

//全局函数，格式化时间
Vue.prototype.timeFormate = function(params){
	var date = new Date(params);
	var month = date.getMonth() + 1;
	var day =  date.getDate();
	return date.getFullYear() + '年' + month + '月' + day + '日';
}
Vue.prototype.getFormateDay = function(params){
	var date = new Date(params); 
	return  date.getDate();
}
Vue.prototype.token = 'eyJhbGciOiJIUzI1NiJ9.eyJpc3N1ZXIiOiJBY2NvdW50cyBKV1QgSXNzdWVyIDAuMSIsInBhcnRuZXJpZCI6IjAwMDAwMiIsImFwcGlkIjoiMjAxODExMjAwMDAwMDIwMSIsInN1YiI6IjA5ZDUyMWFmLTE4ZDItNDJmMi04NWExLTdmNzQ5ZWU3NmFkMCIsImV4cCI6MTU3MTAwNTg1Mn0.t3eqjSEiCsZIbVA145KwUG53u7P990Ddj7lzZPdGv3c'
Vue.prototype.formate = function(number){
		if(number > 0)
			number = '+' + number;
		return number;
}
Vue.prototype.cutMinus = function(str){
	str = str.toString();
	return str.replace("-","");
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// app.page.onLoad = function(){
// 	new Vue({
// 	  router,
// 	  store,
// 	  vuetify,
// 	  render: h => h(App)
// 	}).$mount('#app')
// }