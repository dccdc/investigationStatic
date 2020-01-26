<template>
	<div style="width: 100%">
		<div v-if="chartData != null" id="main" style="width: 100%;height:150px;"></div>
		<div v-else class="text-center mt-5 mb-5" >暂无统计数据，敬请期待</div>
	</div>
	
</template>

<script>
	export default{
		props:['chartData'],
		mounted() {
			 this.chart()
		},
		watch:{
			chartData(val){
				this.chart()
			}
		},
		methods: {
			chart: function() {
				// var echarts = require('echarts');
				// 基于准备好的dom，初始化echarts实例
				var myChart = echarts.init(document.getElementById('main'));
		
				// 指定图表的配置项和数据
				var option = {
					title: {
						text: '满意度月曲线',
						left: '35%'
					},
					tooltip: {},
					legend: {
						data: ['满意度得分', '6个月叠加平均线'],
						top: 25
					},
					xAxis: {
						data: [this.timeFormate(this.chartData[3].date),
							 this.timeFormate(this.chartData[2].date), 
							 this.timeFormate(this.chartData[1].date),
							 this.timeFormate(this.chartData[0].date)]
					},
					yAxis: {
						show: false
					},
					grid:[{//调整图形位置
						bottom: '20'
					}],
					series: [{
							name: '满意度得分',
							type: 'bar',
							data: [this.chartData[3].monthAverage, this.chartData[2].monthAverage,this.chartData[1].monthAverage,this.chartData[0].monthAverage],
							label: {
								show: true,
								position: 'top'
							},
							itemStyle: {
								color: '#82b1ff'
							},
							barWidth: 30 //柱图宽度
						},
						{
							name: '6个月叠加平均线',
							type: 'line',
							symbol: 'circle',//修改为实心点
							symbolSize: 15,//设置节点大小
							data: [this.chartData[3].addAverage, this.chartData[2].addAverage, this.chartData[1].addAverage, this.chartData[0].addAverage],
							// label:{
							// 	show:true,
							// 	position:'bottom'
							// }
						}
					]
				};
		
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			}
		}
	}
</script>

