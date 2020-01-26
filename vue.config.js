
module.exports = {
    //...
    baseUrl: './',
    configureWebpack: {
        //导入cdn外部模块，并暴露在全局中
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'vuetify': 'Vuetify',
            'axios': 'axios',
            'echarts': 'echarts'
        }
    }
}