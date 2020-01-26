<template>
  <div class="overflow-x-hidden">
	<Header :title="targetName"></Header>
	<div v-if="targetData != null" class="text-center" style="margin-top: 55px; margin-bottom: 50px;">
		
			<v-row class="content">
				<!-- <SimpleTable :spanStatistic="targetData.spanStatistic"></SimpleTable> -->
				<monthAndYear v-if="typeof targetData.spanStatistic !== 'undefined'" :spanStatistic="targetData.spanStatistic"></monthAndYear>
			</v-row>
			<v-divider style="margin-top: 5px"></v-divider>
			<v-divider></v-divider>
			<v-divider></v-divider>
			<v-divider></v-divider>
			<v-divider></v-divider>
			<v-divider></v-divider>
			<v-divider></v-divider>
			<v-divider></v-divider>
			<!-- <v-row class="content">
				<Charts v-if="typeof targetData.monthCurveList != 'undefined'" :chartData="targetData.monthCurveList"></Charts>
			</v-row>
			<v-divider class="divider"></v-divider> -->
			<!-- <v-row class="content">
				<Table style="pointer-events: none;" title="满意度排名前三" message="线路" :rankData="targetData.forthRankList"></Table>
			</v-row>
			<v-divider class="divider"></v-divider>
			<v-row class="content">
				<Table style="pointer-events: none;" title="满意度排名后三" message="线路" :rankData="targetData.backRankList"></Table>
			</v-row>
			<v-divider class="divider"></v-divider> -->
			
			<v-row class="content">
				<v-col cols="5" style="padding: 0;">
					<degreeBar v-if="typeof targetData.forthRankList !== 'undefined'" type="topStation"
					title="满意度排名前三的线路" :chartData="targetData.forthRankList"></degreeBar>
				</v-col>
				<v-divider vertical></v-divider>
				<v-col cols="5" style="padding: 0;">
					<degreeBar v-if="typeof targetData.backRankList !== 'undefined'" type="endStation"
					title="满意度排名后三的线路" :chartData="targetData.backRankList"></degreeBar>
				</v-col>
			</v-row>
			<!-- <v-row class="content">
				<Table title="区域满意度排名" message="区域" :rankData="targetData.forthRankList"></Table>
			</v-row>
			<v-divider class="divider"></v-divider> -->
	</div>
	<div v-else class="text-center" style="margin-top: 100px;">暂无统计数据，敬请期待</div>
	<footer class="text-center footer" >
	
		<div style="width: 100%;">
			<!-- <v-bottom-sheet v-model="sheet">
				
				<template v-slot:activator="{ on }">
					<v-btn color="accent" large v-on="on" style="width: 97%;">
						打开底部菜单
					</v-btn>
				</template>
				<v-sheet class="text-center">
					<menuButton title="按线路、站点查看" reqURL="/base/linestations" :routerConfig="railwayConfig"></menuButton>
					<menuButton title="按区域查看" :routerConfig="areaConfig"></menuButton>
					<v-btn large class="space" color="accent" @click="backHome">回首页</v-btn>
					<v-btn class="mt-6" color="error" @click="sheet = !sheet" 
							style="width: 98%;" large>关闭
					</v-btn>
				</v-sheet>
			</v-bottom-sheet> -->
			<v-btn tile large class="space" style="color: #d21f1d;" @click="backHome">回首页</v-btn>
		</div>
	</footer>
  </div>
</template>

<script>
	import monthAndYear from "../components/monthAndYear.vue";
	import degreeBar from "../components/degreeBar.vue";
	
	import menuButton from '../components/menuButton.vue'
	import Table from '../components/Table.vue'
	import Charts from '../components/charts.vue'
	import SimpleTable from '../components/simpleTable.vue'
	import Axios from '../API/api.js'
	import Header from '../components/common/Header.vue'
	export default{
		data(){
			return{
				sheet: false,
				railwayConfig:{
					name:'railwayPage',
					params:{}
				},
				areaConfig:{
					name:'areaPage',
					params:{}
				},
				targetName:'',
				targetId:'',
				targetData:{}
			}
		},
		components:{
			menuButton,
			Table,
			Charts,
			SimpleTable,
			Header,
			monthAndYear,
			degreeBar
		},
		created() {
			//从store中取参数,然后发送请求
			this.targetName = this.$store.state.targetParams.targetName;
			this.targetId = this.$store.state.targetParams.targetId;
				
				var url = '/member/investigation/getStatistic';
				var that = this;
				var data = {
					dimension: 1,
					year: this.$store.state.searchByTime.year,
					month: this.$store.state.searchByTime.month,
					lineId:'',
					stationId: '',
					indicator_id: this.targetId
				};
				// console.log("请求参数：");
				// console.log(data);
				var reqParams = {
					data: JSON.stringify(data),
					access_token: this.token
				}
				Axios.post(url,reqParams)
				.then(function(response){
					that.targetData = JSON.parse(response.data.data);
					// console.log("指标数据：");
					// console.log(that.targetData);
				})
				.catch(function(error){
					
				})
			
			
		},
		methods:{
			backHome:function(){
				this.$router.push({name:'home'});
			}
		}
	}
</script>
