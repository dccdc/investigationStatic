<template>
	<div v-if="typeof indexAvgList != 'undefined' ">
		<h3>各指标得分</h3>
		<v-simple-table v-if="indexAvgList != null && indexAvgList.length > 0 " dense :fixed-header="fixedHeader" >
			<thead>
				<tr>
					<th class="text-center accent" style="padding: 0 4px;"><span style="font-size: 12px;color: white;">指标</span></th>
					<th class="text-center accent" style="padding: 0 4px;"><span style="font-size: 12px;color: white;">{{this.$store.state.searchByTime.year+'年'+this.$store.state.searchByTime.month+'月'}}</span></th>
					<th class="text-center accent" style="padding: 0 4px;"><span style="font-size: 12px;color: white;">环比升降</span></th>
					<th class="text-center accent" style="padding: 0 2px;"><span style="font-size: 12px;color: white;">2019年累计平均分</span></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in indexAvgList" :key="index" @click="toLoad(item.indicator_id,item.indicator)">
					<td class="text-center" style="padding-left:8px;padding-right:3px;"><span style="font-size: 13px;">{{item.indicator}}</span></td>
					<td class="text-center">{{item.monthAverage}}</td>
					<td class="text-center"><span :style="{color: [item.monthRise==0 ? '' : [item.monthRise > 0 ? 'red' : 'green']]}">{{formate(item.monthRise)}}</span></td>
					<td class="text-center">{{item.yearAverage}}</td>
				</tr>
			</tbody>
		</v-simple-table>
		<div v-else class="text-center mt-5 mb-5" >暂无统计数据，敬请期待</div>
	</div>
</template>

<script>
	export default{
		props:['indexAvgList'],
		data(){
			return{
				dense: false,
				fixedHeader: false,
			}
		},
		methods:{
			toLoad:function(id,name){
				// 将参数存入store中
				this.$store.state.targetParams.targetId = id;
     			this.$store.state.targetParams.targetName = name;
				this.$router.push({
					name: "indexPage"
				});
			}
		}
		
	}
</script>

