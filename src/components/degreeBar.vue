<template>
	<div v-if="chartData != null && chartData.length>0" style="width: 100%">
		<div v-if="type == 'topLine'" id="topLinebar" style="width: 100%;height:150px;"></div>
		<div v-else-if="type == 'topStation'" id="topStationbar" style="width: 100%;height:150px;"></div>
		<div v-else-if="type == 'endLine'" id="endLinebar" style="width: 100%;height:150px;"></div>
		<div v-else-if="type == 'endStation'" id="endStationbar" style="width: 100%;height:150px;"></div>
	</div>
	<div v-else class="text-center mt-5 mb-5">暂无统计数据，敬请期待</div>
</template>

<script>
	export default {
		props: ['chartData', 'type', 'title'],
		data() {
			return {
				topOne: '#e1c449',
				topTwo: '#2586ba',
				topThree: '#6ede9f',
				endOne: '#c7123a',
				endTwo: '#22bdbc',
				endThree: '#a20e1b',
				markPointOption: {
					name: '环比升降',
					value: '',
					xAxis: '',
					yAxis: '',
					symbolOffset: [5, -2],
					itemStyle: { //控制标记的样式

					},
					symbol: '',
					label: { //标注的文本
						color: '#666666',
						fontSize: 9,
						offset: [15, 2]
					}
				}
			}
		},
		mounted() {
			if(this.chartData != null && this.chartData.length>0){
				this.chart()
			}  
			
		},
		watch: {
			chartData(val) {
				this.chart()
			}
		},
		methods: {
			chart: function() {
				// 判断柱体颜色和柱状图类型
				var myChart = '';
				var colorOne = '';
				var colorTwo = '';
				var colorThree = '';
				if (this.type == 'topLine') {
					myChart = echarts.init(document.getElementById('topLinebar'));
					colorOne = this.topOne;
					colorTwo = this.topTwo;
					colorThree = this.topThree;
				} else if (this.type == 'topStation') {
					myChart = echarts.init(document.getElementById('topStationbar'));
					colorOne = this.topOne;
					colorTwo = this.topTwo;
					colorThree = this.topThree;
				} else if (this.type == 'endLine') {
					myChart = echarts.init(document.getElementById('endLinebar'));
				} else {
					myChart = echarts.init(document.getElementById('endStationbar'));
				}
				// 遍历数据源,设置markPoint
				var markPointData = [];
				var that = this;
				this.chartData.forEach(function(e) {
					that.markPointOption.value = that.cutMinus(e.monthRise);
					that.markPointOption.xAxis = e.rank_value;
					that.markPointOption.yAxis = e.monthAverage;
					if (e.monthRise >= 0) {
						that.markPointOption.symbol = 'image://https://apppax.gzmtr.cn/h5/investigationstatisticv2/static/img/timeRise.png'
					} else {
						that.markPointOption.symbol = 'image://https://apppax.gzmtr.cn/h5/investigationstatisticv2/static/img/timeDown.png'
					}
					// Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象
					// 每次遍历都重新创建了一个空对象，并将markPointOption的属性复制给空对象，这样才能保证数组中元素不会被最后一项元素覆盖
					markPointData.push(Object.assign({}, that.markPointOption));
				})
				// console.log(markPointData);
				// 指定图表的配置项和数据
				var option = {
					title: {
						text: this.title,
						textStyle: {
							fontSize: 11
						}
					},
					tooltip: {
						position: 'top'
					},
					xAxis: {
						type: 'category',
						data: [
							this.chartData[0].rank_value,
							this.chartData[1].rank_value,
							this.chartData[2].rank_value
						],
						axisLabel: {
							fontSize: 8,
							color: '#666666',
							interval: 0, //强制显示所有标签
							formatter: function(params) {
								var newParamsName = ""; // 最终拼接成的字符串
								var paramsNameNumber = params.length; // 实际标签的个数
								var provideNumber = 3; // 每行能显示的字的个数
								var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
								/**
								 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
								 */
								// 条件等同于rowNumber>1
								if (paramsNameNumber > provideNumber) {
									/** 循环每一行,p表示行 */
									for (var p = 0; p < rowNumber; p++) {
										var tempStr = ""; // 表示每一次截取的字符串
										var start = p * provideNumber; // 开始截取的位置
										var end = start + provideNumber; // 结束截取的位置
										// 此处特殊处理最后一行的索引值
										if (p == rowNumber - 1) {
											// 最后一次不换行
											tempStr = params.substring(start, paramsNameNumber);
										} else {
											// 每一次拼接字符串并换行
											tempStr = params.substring(start, end) + "\n";
										}
										newParamsName += tempStr; // 最终拼成的字符串
									}

								} else {
									// 将旧标签的值赋给新标签
									newParamsName = params;
								}
								//将最终的字符串返回
								return newParamsName;
							}

						}
					},
					yAxis: {
						type: 'value',
						axisLabel: {
							fontSize: 8
						},
						splitLine: {
							show: false //去掉网格线
						}
					},
					grid: [{ //调整图形位置
						bottom: '15%',
						left: '20%',
						top: '20%',

					}],
					series: [{
						data: [{
								value: this.chartData[0].monthAverage,
								itemStyle: {
									color: colorOne || this.endOne
								}
							},
							{
								value: this.chartData[1].monthAverage,
								itemStyle: {
									color: colorTwo || this.endTwo
								}
							},
							{
								value: this.chartData[2].monthAverage,
								itemStyle: {
									color: colorThree || this.endThree
								}
							}
						],
						type: 'bar',
						label: {
							show: true,
							position: 'top'
						},
						itemStyle: {
							barBorderRadius: [10, 10, 0, 0]
						},
						barWidth: 10, //柱图宽度
						markPoint: {
							// symbol:'image://http://localhost:8080/static/img/timeRise.png',
							symbolSize: 10,

							// label:{show:false,formatter: '{b}: {@score}'},
							data: markPointData
						}
					}]
				};

				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			}

		}
	}
</script>
