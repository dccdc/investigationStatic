const Mock = require('mockjs')
// 格式： Mock.mock( url, post/get , 返回的数据)
Mock.mock('/statistic', 'post', {
	"spanStatistic": {
		"monthData": Mock.Random.float(7, 10, 0, 3),
		"quarterData":Mock.Random.float(7, 10, 0, 3),
		"yearData": Mock.Random.float(7, 10, 0, 3),
		"monthRise": Mock.Random.float(-1, 0, 0, 1),
		"quarterRise": Mock.Random.float(-1, 0, 0, 1),
		"yearRise": Mock.Random.float(-1, 0, 0, 1)
	},
	"monthCurveList": [{
			"date": "5月",
			"monthAverage": Mock.Random.integer(5,40)
		},
		{
			"date": "6月",
			"monthAverage": Mock.Random.integer(5,40)
		},
		{
			"date": "7月",
			"monthAverage": Mock.Random.integer(5,40)
		},
		{
			"date": "8月",
			"monthAverage": Mock.Random.integer(5,40)
		}

	],
	"indicatorAverageList": [
		{
			"indicator": "人员服务周到",
			"monthAverage": Mock.Random.float(7, 10, 0, 3),
			"monthRise": Mock.Random.float(-1, 0, 0, 1),
			"yearAverage":Mock.Random.float(7, 10, 0, 3)
		},
		{
			"indicator": "人员服务周到",
			"monthAverage": Mock.Random.float(7, 10, 0, 3),
			"monthRise": Mock.Random.float(-1, 0, 0, 1),
			"yearAverage":Mock.Random.float(7, 10, 0, 3)
		},
		{
			"indicator": "人员服务周到",
			"monthAverage": Mock.Random.float(7, 10, 0, 3),
			"monthRise": Mock.Random.float(-1, 0, 0, 1),
			"yearAverage":Mock.Random.float(7, 10, 0, 3)
		},
		{
			"indicator": "人员服务周到",
			"monthAverage": Mock.Random.float(7, 10, 0, 3),
			"monthRise": Mock.Random.float(-1, 0, 0, 1),
			"yearAverage":Mock.Random.float(7, 10, 0, 3)
		},
		{
			"indicator": "人员服务周到",
			"monthAverage": Mock.Random.float(7, 10, 0, 3),
			"monthRise": Mock.Random.float(-1, 0, 0, 1),
			"yearAverage":Mock.Random.float(7, 10, 0, 3)
		},
		{
			"indicator": "人员服务周到",
			"monthAverage": Mock.Random.float(7, 10, 0, 3),
			"monthRise": Mock.Random.float(-1, 0, 0, 1),
			"yearAverage":Mock.Random.float(7, 10, 0, 3)
		},
		{
			"indicator": "人员服务周到",
			"monthAverage": Mock.Random.float(7, 10, 0, 3),
			"monthRise": Mock.Random.float(-1, 0, 0, 1),
			"yearAverage":Mock.Random.float(7, 10, 0, 3)
		},
		{
			"indicator": "人员服务周到",
			"monthAverage": Mock.Random.float(7, 10, 0, 3),
			"monthRise": Mock.Random.float(-1, 0, 0, 1),
			"yearAverage":Mock.Random.float(7, 10, 0, 3)
		},
		{
			"indicator": "人员服务周到",
			"monthAverage": Mock.Random.float(7, 10, 0, 3),
			"monthRise": Mock.Random.float(-1, 0, 0, 1),
			"yearAverage":Mock.Random.float(7, 10, 0, 3)
		},
		{
			"indicator": "人员服务周到",
			"monthAverage": Mock.Random.float(7, 10, 0, 3),
			"monthRise": Mock.Random.float(-1, 0, 0, 1),
			"yearAverage":Mock.Random.float(7, 10, 0, 3)
		},
		{
			"indicator": "人员服务周到",
			"monthAverage": Mock.Random.float(7, 10, 0, 3),
			"monthRise": Mock.Random.float(-1, 0, 0, 1),
			"yearAverage":Mock.Random.float(7, 10, 0, 3)
		}

	],
	"forthRankList": [
	    {
	    	"rank_value": "1号线",
	    	"monthAverage":  Mock.Random.float(7, 10, 0, 3),
	    	"rankGradew": Mock.Random.integer(1,3),
	    	"monthRise":  Mock.Random.float(-1, 0, 0, 1)
	    },
	    {
	    	"rank_value": "2号线",
	    	"monthAverage":  Mock.Random.float(7, 10, 0, 3),
	    	"rankGradew": Mock.Random.integer(1,3),
	    	"monthRise":  Mock.Random.float(-1, 0, 0, 1)
	    },
	    {
	    	"rank_value": "3号线",
	    	"monthAverage": Mock.Random.float(7, 10, 0, 3),
	    	"rankGradew": Mock.Random.integer(1,3),
	    	"monthRise":  Mock.Random.float(-1, 0, 0, 1)
	    }
	   
	], 
	"backRankList": [
		{
			"rank_value": "3号线",
			"monthAverage":  Mock.Random.float(7, 10, 0, 3),
			"rankGradew": Mock.Random.integer(1,3),
			"monthRise":  Mock.Random.float(-1, 0, 0, 1)
		},
		{
			"rank_value": "2号线",
			"monthAverage":  Mock.Random.float(7, 10, 0, 3),
			"rankGradew": Mock.Random.integer(1,3),
			"monthRise":  Mock.Random.float(-1, 0, 0, 1)
		},
		{
			"rank_value": "1号线",
			"monthAverage": Mock.Random.float(7, 10, 0, 3),
			"rankGradew": Mock.Random.integer(1,3),
			"monthRise":  Mock.Random.float(-1, 0, 0, 1)
		}

	]
})

//延时200-600毫秒请求到数据
Mock.setup({
	timeout: '200-600'
})
