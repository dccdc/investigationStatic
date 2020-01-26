<template>
  <v-menu id="menu" transition="scale-transition" offset-x max-width="150px">
    <template v-slot:activator="{ on }">
      <v-btn color="accent" large v-on="on" class="space" @click="getItems()">{{title}}</v-btn>
    </template>
    <div  @click.stop="toBottom" 
    style="background-color:white;color: rgba(0,0,0,.54);padding:5px 16px">滑到底部</div>
    <v-list v-if="title == '按线路、站点查看'" style="height:300px;">
      <v-list-item
        v-for="(item,index) in listData"
        :key="index"
        style="background-color: white"
        @click="toRailwayPage(item.lineid,item.linename,index)"
      >
        <v-list-item-title v-text="item.linename"></v-list-item-title>
      </v-list-item>
      <!-- <div id="lineBottom" style="background-color:white">
        &nbsp;
      </div> -->
      <v-subheader id="lineBottom" style="background-color:white">共{{listData.length}}条线路</v-subheader>
    </v-list>
    <v-list v-else-if="title == '按站点查看' " style="height:300px;">
      <v-list-item
        v-for="(item,index) in stationData"
        :key="index"
        style="background-color: white"
        @click="toStationPage(item.stationid,item.stationname)"
      >
        <v-list-item-title v-text="item.stationname"></v-list-item-title>
      </v-list-item>
      <!-- <div  style="background-color:white">
        &nbsp;
      </div> -->
      <v-subheader id="stationBottom" style="background-color:white">共{{stationData.length}}个站点</v-subheader>
    </v-list>
    <!-- 按指标查看 -->
    <v-list v-else style="height:300px;">
      <v-list-item
        v-for="(item,index) in targetData"
        :key="index"
        style="background-color: white"
        @click="toTargetPage(item.tag_id,item.tag_value)"
      >
        <v-list-item-title v-text="item.tag_value"></v-list-item-title>
      </v-list-item>
      <!-- <div id="indicatorBottom" style="background-color:white">
        &nbsp;
      </div> -->
      <v-subheader id="indicatorBottom" style="background-color:white">共{{targetData.length}}个指标</v-subheader>
    </v-list>
  </v-menu>
</template>

<script>
import Axios from "../API/api.js";

export default {
  props: ["title", "routerConfig"],
  data() {
    return {
      listData: {},
      stationData: {},
      targetData: {}
    };
  },
  created() {},
  methods: {
    toBottom: function() {
      const lineBottom = document.getElementById("lineBottom");
      const stationBottom = document.getElementById("stationBottom");
      const indicatorBottom = document.getElementById("indicatorBottom");
      if(lineBottom){
        lineBottom.scrollIntoView();
      }
      
      if(stationBottom){
        stationBottom.scrollIntoView();
      }
      if(indicatorBottom){
        indicatorBottom.scrollIntoView();
      }
    },
    getItems: function() {
      this.listData = JSON.parse(sessionStorage.getItem("lineData"));
      this.targetData = JSON.parse(sessionStorage.getItem("targetData"));
      this.stationData = JSON.parse(sessionStorage.getItem("stationData"));
    },
    // 			jumpPage:function(id,name,index,lineId){
    // 				//根据点击不同的item，跳转页面，获取有关item的数据
    // 				// 将线路索引存入store,以供获取station
    // 				// 将id和name存入store,便于回退时取数据
    // 				this.$store.state.reqParams.id = id;
    // 				this.$store.state.reqParams.name = name;
    // 			 	if(typeof lineId != 'undefined') this.$store.state.reqParams.lineId = lineId;//查找station统计数据的lineid
    // 				if(typeof index != 'undefined') this.$store.state.reqParams.lineIndex = index;
    //
    // 				console.log(this.routerConfig);
    // 				this.$router.push(this.routerConfig);
    // 			},
    toRailwayPage: function(id, name, index) {
      this.$store.state.railwayParams.lineId = id;
      this.$store.state.railwayParams.lineName = name;
      this.$store.state.railwayParams.lineIndex = index;
      //供获取station统计数据使用
      this.$store.state.stationParams.lineId = id;

      this.$router.push(this.routerConfig);
    },
    toStationPage: function(id, name) {
      this.$store.state.stationParams.stationId = id;
      this.$store.state.stationParams.stationName = name;

      this.$router.push(this.routerConfig);
    },
    toTargetPage: function(id, name) {
      this.$store.state.targetParams.targetId = id;
      this.$store.state.targetParams.targetName = name;

      this.$router.push(this.routerConfig);
    },
    toAreaPage: function(id, name) {
      this.$store.state.areaParams.areaId = id;
      this.$store.state.areaParams.areaName = name;

      this.$router.push(this.routerConfig);
    }
  }
};
</script>

<style scoped>
#menu {
  position: fixed !important;
  right: 12px !important;
  bottom: 12px !important;
}
</style>