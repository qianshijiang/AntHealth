<template>
    <yd-tabbar fixed active-color="rgb(0,206,159)" style="border-top:1px solid #ccc;height: 60px;">
        <yd-tabbar-item title="首页" link="/index" :active="this.pageTag==0" style="font-size: 12px;line-height: 24px;">
          <img slot="icon" v-show="pageTag != 0" style="height: 25px" src="../../../static/imgs/img01.png">
          <img slot="icon" v-show="pageTag == 0" style="height: 25px" src="../../../static/imgs/img02.png">
        </yd-tabbar-item>
        <yd-tabbar-item title="服务" link="/service" :active="this.pageTag==1" style="font-size: 12px;line-height: 24px;">
          <img slot="icon" v-show="pageTag != 1" style="height: 25px" src="../../../static/imgs/img04.png">
          <img slot="icon" v-show="pageTag == 1" style="height: 25px" src="../../../static/imgs/img64.png">
        </yd-tabbar-item>
      <yd-tabbar-item title="活动" link="/active" :active="this.pageTag==2" style="font-size: 12px;line-height: 24px;">
        <img slot="icon" v-show="pageTag != 2" style="height: 25px" src="../../../static/imgs/img05.png">
        <img slot="icon" v-show="pageTag == 2" style="height: 25px" src="../../../static/imgs/img65.png">
      </yd-tabbar-item>
      <yd-tabbar-item title="我的" link="/my" :active="this.pageTag==3" style="font-size: 12px;line-height: 24px;">
        <img slot="icon" v-show="pageTag != 3" style="height: 25px" src="../../../static/imgs/img107.png">
        <img slot="icon" v-show="pageTag == 3" style="height: 25px" src="../../../static/imgs/img06.png">
      </yd-tabbar-item>
    </yd-tabbar>
</template>
<script type="text/babel">

import Vue from 'vue'
import { TabBar, TabBarItem } from 'vue-ydui/dist/lib.rem/tabbar'
Vue.component(TabBar.name, TabBar)
Vue.component(TabBarItem.name, TabBarItem)
export default {
  name: 'footerBar',
  props: ['pageTag'],
  data: function () {
    return {}
  },
  created: function () {
    // alert(this.pageTag)
  },
  methods: {}
}
</script>
<style >
  .yd-tabbar-txt{
    padding-top: 0;
    padding-bottom: 0;
  }
</style>


