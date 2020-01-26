<template>
	<v-row class="content" >
		<v-col cols="3">
			<h5 class="middle">月度</h5>
			<div class="middle">
				<span class="timeScore">{{spanStatistic.monthData}}</span>
				<img v-if="spanStatistic.monthRise >= 0" src="../../public/static/img/timeRise.png" alt="gg" class="img_arrow">
				<img v-else-if="spanStatistic.monthRise < 0" src="../../public/static/img/timeDown.png" alt="gg" class="img_arrow">
				<span class="trend">{{cutMinus(spanStatistic.monthRise)}}</span>
			</div>
		</v-col>
		<v-divider vertical></v-divider>
		<v-col cols="3">
			<h5 class="middle">季度</h5>
			<div class="middle">
				<span class="timeScore">{{spanStatistic.quarterData}}</span>
				<img v-if="spanStatistic.quarterRise >= 0" src="../../public/static/img/timeRise.png" alt="gg" class="img_arrow">
				<img v-else-if="spanStatistic.quarterRise < 0" src="../../public/static/img/timeDown.png" alt="gg" class="img_arrow">
				<span class="trend">{{spanStatistic.quarterRise}}</span>
			</div>
		</v-col>
		<v-divider vertical></v-divider>
		<v-col cols="3">
			<h5 class="middle">年度</h5>
			<div class="middle">
				<span class="timeScore">{{spanStatistic.yearData}}</span>
				<img v-if="spanStatistic.quarterRise >= 0" src="../../public/static/img/timeRise.png" alt="gg" class="img_arrow">
				<img v-else-if="spanStatistic.quarterRise < 0" src="../../public/static/img/timeDown.png" alt="gg" class="img_arrow">
				<span class="trend">{{spanStatistic.yearRise}}</span>
			</div>
		</v-col>
	</v-row>
</template>

<script>
	export default{
		props: ['spanStatistic']
	}
</script>
