<template>
  <div class="outertop">
    <!--头部-->
    <div class="divcommon">
      <yd-layout>
        <yd-navbar slot="navbar" title="乐享晚年" bgcolor="rgb(242, 242, 242)" height="60px" fontsize="20px">
          <router-link to="#" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
          </router-link>
        </yd-navbar>
      </yd-layout>
    </div>
    <!--滚动条-->
    <div class="divcommon">
        <yd-slider autoplay="3000">
        <yd-slider-item>
          <a href="http://www.ydcss.com">
            <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
          </a>
        </yd-slider-item>
        <yd-slider-item>
          <a href="http://www.ydcss.com">
            <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
          </a>
        </yd-slider-item>
        <yd-slider-item>
          <a href="http://www.ydcss.com">
            <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
          </a>
        </yd-slider-item>
      </yd-slider>
    </div>
    <!--内容项-->
    <div class="divcommon contentitem">
      <span>我的保单</span>
    </div>
    <div class="divcommon contentitem">
      <span>福利商城</span>
    </div>
    <div class="divcommon contentitem">
      <span>平价药房</span>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import {Layout} from 'vue-ydui/dist/lib.rem/layout';
  import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider';

  Vue.component(Slider.name, Slider);
  Vue.component(SliderItem.name, SliderItem);
  Vue.component(Layout.name, Layout);
  export default{
    name:'EnjoyAge',
    data(){
        return{

        }
    },
    methods:{

    },
  }
</script>
<style lang="scss" scoped>
  .outertop{
    background-color: white;
    height:100%;
    .divcommon{
      margin: 0 auto;
      border-radius: 10px;
    }
    .contentitem{
      width: 100%;
      height:110px;
      border-radius: 10px;
      text-align: center;
      line-height: 110px;
      cursor: pointer;
      background-color: rgb(242, 242, 242);
      margin-top: 22px;
      span{
        font-family: 'Arial Normal', 'Arial';
        font-weight: bold;
        font-style: normal;
        font-size: 20px;
        color: #999;
        text-align: center;
        line-height: normal;
      }
    }
  }
</style>
