<template>
    <yd-tabbar fixed active-color="#333" style="border-top:1px solid #ccc;">
        <yd-tabbar-item title="首页" link="/" :active="this.pageTag==0" style="font-size: 12px;line-height: 16px;">
            <yd-icon name="home" slot="icon" size="1.8rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="服务" link="/service" :active="this.pageTag==1" style="font-size: 12px;line-height: 16px;">
          <yd-icon name="good" slot="icon" size="1.8rem"></yd-icon>
        </yd-tabbar-item>
      <yd-tabbar-item title="活动" link="/active" :active="this.pageTag==2" style="font-size: 12px;line-height: 16px;">
        <yd-icon name="like
" slot="icon" size="1.8rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="我的" link="/about" :active="this.pageTag==3" style="font-size: 12px;line-height: 16px;">
          <yd-icon name="ucenter-outline" slot="icon" size="1.8rem"></yd-icon>
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
    console.log(this.pageTag)
  },
  methods: {}
}
</script>
<style >
.yd-tabbar-item{
    height: 3rem;
    padding-top: 1rem;
}
.yd-tabbar-txt{
     padding-top: .5rem;
}
</style>


