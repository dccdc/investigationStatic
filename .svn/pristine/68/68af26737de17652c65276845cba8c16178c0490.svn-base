<template>
	<v-app>
		<v-content>
			<Loader v-model="$store.state.isLoading" message="加载中..."></Loader>
				<keep-alive>
					<!-- 需要缓存的组件 -->
						<router-view  v-if="$route.meta.keepAlive"></router-view>
				</keep-alive> 
				<!-- 不需要缓存的组件 -->
					<router-view  v-if="!$route.meta.keepAlive"></router-view>
				
		</v-content>
	</v-app>
</template>

<script>
import Loader from './components/common/Loader.vue'
export default {
  name: 'App',
  data: () => ({
    //
  }),
  components:{Loader}
};
</script>
