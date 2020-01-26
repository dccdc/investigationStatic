<template>
	<div>
		<Header :title="area"></Header>
		<v-divider></v-divider>
		<div v-if="areaData != null" id="scroll-target" style="max-height: 500px;margin-top: 50px;" class="overflow-y-auto">
			<div id="scroll" v-scroll:#scroll-target="" align="center" justify="center" style="height: 1500px">
				<v-row class="content">
					<SimpleTable :spanStatistic="areaData.spanStatistic"></SimpleTable>
				</v-row>
				<v-divider class="divider"></v-divider>
				<v-row class="content">
					<Charts v-if="typeof areaData.monthCurveList != 'undefined'" :chartData="areaData.monthCurveList"></Charts>
				</v-row>
				<v-divider class="divider"></v-divider>
				<v-row class="content">
					<IndexTable :indexAvgList="areaData.indicatorAverageList"></IndexTable>
				</v-row>	
				<v-divider class="divider"></v-divider>
				<v-row class="content">
					<Table title="满意度排名前三" message="线路" :rankData="areaData.forthRankList"></Table>
				</v-row>
				<v-divider class="divider"></v-divider>
				<v-row class="content">
					<Table title="满意度排名后三" message="线路" :rankData="areaData.backRankList"></Table>
				</v-row>
				<v-divider class="divider"></v-divider>
			</div>
		</div>
		<div v-else class="text-center  " style="margin-top: 100px;">暂无统计数据，敬请期待</div>
		<v-footer class="text-center" style="padding: 0;" absolute>
			<menuButton title="按站点查看(下属站点)" :routerConfig="stationConfig"></menuButton>
			<v-btn large class="space" color="accent" @click="backHome">回首页</v-btn>
		</v-footer>
	</div>
</template>

<script>
	import menuButton from '../components/menuButton.vue'
	import Table from '../components/Table.vue'
	import Charts from '../components/charts.vue'
	import SimpleTable from '../components/simpleTable.vue'
	import IndexTable from '../components/indexTable.vue'
	import Header from '../components/common/Header.vue'
	export default {
		data(){
			return{
				stationConfig:{
					name:'stationPage',
					params:{}
				},
				area:'',
				areaData:{}
			}
		},
		components:{
			Charts,
			Table,
			menuButton,
			SimpleTable,
			IndexTable,
			Header
		},
		created() {
			//获得路由参数,然后发送请求
			this.area = this.$router.params;
			
			
		},
		methods:{
			backHome:function(){
				this.$router.go(-1);
			}
		}
	}	
	
</script>

