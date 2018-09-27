<template>
  <yd-navbar style="height: 45px;">
    <div @click="prev" slot="left" >
      <img style="height: 18px;width: 12px;" src="../../assets/image/left.png"/>

    </div>
    <!--<router-link  to="#" slot="left" >-->
      <!--<img slot="left" src="../../assets/image/left.png"/>-->
      <!--<yd-navbar-back-icon></yd-navbar-back-icon>-->
    <!--</router-link>-->


    <P style="color: #333;margin-top: 27px;"  slot="center">{{title}}</P>
  </yd-navbar>
</template>
<script type="text/babel">

import Vue from 'vue'
import { TabBar, TabBarItem } from 'vue-ydui/dist/lib.rem/tabbar'
Vue.component(TabBar.name, TabBar)
Vue.component(TabBarItem.name, TabBarItem)
export default {
  name: 'topBar',
  props: ['title'],
  data: function () {
    return {
      titles: ''
    }
  },
  created: function () {
  },
  methods: {
    prev(){
      this.$router.go(-1)
    }
  },
  mounted: function () {
  }
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


