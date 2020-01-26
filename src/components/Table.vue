<template>
	<div v-if="typeof rankData != 'undefined' || rankData != null ">
		<h3>{{title}}</h3>
		<v-simple-table v-if="rankData != null && rankData.length > 0 " :dense="dense" :fixed-header="fixedHeader" >
			<thead>
				<tr>
					<th class="text-center">{{message}}</th>
					<th class="text-center">{{this.$store.state.searchByTime.year+'年'+this.$store.state.searchByTime.month+'月得分'}}</th>
					<th class="text-center">排名</th>
					<th class="text-center">得分环比升降</th>
				</tr>
			</thead>
			<tbody>
				<tr  v-for="(item,index) in rankData" :key="index" @click="toLoad(item.rank_id,item.rank_value)">
					<td class="text-center">{{ item.rank_value }}</td>
					<td class="text-center">{{ item.monthAverage }}</td>
					<td class="text-center">{{ item.rankGradew }}</td>
					<td class="text-center"><span :style="{color: [item.monthRise==0 ? '' : [item.monthRise > 0 ? 'red' : 'green']]}">{{formate(item.monthRise) }}</span></td>
				</tr>
			</tbody>
		</v-simple-table>
		<div v-else class="text-center mt-5 mb-5" >暂无统计数据，敬请期待</div>
	</div>
</template>

<script>
	export default{
		props:["title","message","rankData"],
		data(){
			return{
				dense: false,
				fixedHeader: false,
				desserts: [{
					name: '9.06',
					calories: 0.01,
				}],
			}
		},
		created() {
			if(typeof rankData != 'undefined'){
				for(item in rankData){
					if(item.monthRise) 
						item.monthRise = '+' + item.monthRise;
				}
			}

		},
		methods:{
			toLoad:function(id,name){
				if(this.message == '线路'){
					this.$store.state.railwayParams.lineId = id;
					this.$store.state.railwayParams.lineName = name;
					//供获取station统计数据使用
					this.$store.state.stationParams.lineId = id;
					
					//因为无法传递索引，所以在线路页面还需要遍历获取站点数据
					this.$router.push({
						name:'railwayPage'
					});
				}else if(this.message == '站点'){
					this.$store.state.stationParams.stationId = id;
     				this.$store.state.stationParams.stationName = name;
				
					this.$router.push({
						name:'stationPage'
					});
				}
				
			}
			
		}
	}
</script>


