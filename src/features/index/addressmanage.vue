<template>
  <div class="layout ">
    <div class="header">
      <div class="left">
        <div @click="prev" class="back"></div>
      </div>
      <div class="center">
        <p>地址管理</p>
      </div>
      <div class="right">
        <p @click="newAdderess" style="display: block; color: #fff; font-size: 0.28rem;">新建地址</p>
      </div>
    </div>
    <div class="myaddr">
      <ul>
        <li>
          <div class="body">
            <h4>王力宏<small>13888860877</small></h4>
            <p>上海市静安区延长中路801号A12室</p>
          </div>
          <div class="foot">
            <div class="foot-l">
              <label class="radio_box">
                <input type="radio" id="radio_1" name="radio" checked="">
                <label for="radio_1"></label>
                <em>设置默认</em>
              </label>
            </div>
            <div class="foot-r">
              <a href="#" class="edit">编辑</a>
              <a href="#" class="del">删除</a>
            </div>
          </div>
        </li>
        <li>
          <div class="body">
            <h4>王力宏<small>13888860877</small></h4>
            <p>上海市静安区延长中路801号A12室</p>
          </div>
          <div class="foot">
            <div class="foot-l">
              <label class="radio_box">
                <input type="radio" id="radio_2" name="radio">
                <label for="radio_2"></label>
                <em>设置默认</em>
              </label>
            </div>
            <div class="foot-r">
              <a href="#" class="edit">编辑</a>
              <a href="#" class="del">删除</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import {Preview, PreviewHeader, PreviewItem} from 'vue-ydui/dist/lib.rem/preview';
  /* 使用px：import {Preview, PreviewHeader, PreviewItem} from 'vue-ydui/dist/lib.px/preview'; */

  Vue.component(Preview.name, Preview);
  Vue.component(PreviewHeader.name, PreviewHeader);
  Vue.component(PreviewItem.name, PreviewItem);
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Addressmanage',
    data () {
      return {
        logonData: {},
        btns: [

        ]
      }
    },
    methods: {
      result1(ret) {
        this.model1 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
      },
      prev(){
        this.$router.go(-1)
      },
      newAdderess(){
        this.$router.push({path: '/addressmanage1'})
      }
    },
    mounted: function () {},
    components: {
      TopBar
    }
  }
</script>
<style lang="scss" scoped>
  .home-box {
    /*margin-top:45px;*/
    background-image:none;
    height: auto;
    min-height: 100%;
    width: 100%;
  }
  .add-box{
    border-bottom: 1px solid #e0e0e0;width: 95%;margin: auto;padding: 5px 0;
  }
  .add-text{
    margin-bottom: 10px;
  }
  .add-text2{
    color: #666;margin-right: 10px;
  }
  .add-box1{
    border-bottom: 1px solid #e0e0e0;width: 95%;margin: auto;
  }
  .add-box2{
    line-height: 30px;display: flex;flex-direction: row;margin-top: 10px;
  }
  .add-box3{
    height: 25px;width: 25px;background: rgb(242,136,147);border-radius:12.5px;position: relative;top: 5px;right: 5px;
  }
  .add-box3j{
    background: #fff;
    border:1px solid #e0e0e0;
  }
  .add-box4{
    position: absolute;top: -2px;left:3px;
  }
  .add-text1{
    font-size: 14px;line-height: 35px;
  }
  .add-box5{
    display: flex;flex-direction: row;justify-content: flex-end;align-items: center;margin-top: 5px;
  }
  .pol-content{
    height: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    background: rgb(246,246,246);
    margin-top: 15px;
  }
  .pol-content p{
    line-height: 30px;
    color: #333;
    font-size: 16px;

  }
  .pol-content1{
    height: auto;
    padding: 10px 15px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    margin-right: 8px;
  }
  .pol-content1 p {
    font-size: 14px;
    text-align: center;
    color: #666;
  }
  .box-content1 div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /*padding: 15px;*/
  }
  .box-top{
    height: auto;
    width: 100%;
   margin-top: 10px;
    background: #ffffff;
  }
  .box-topj{
    justify-content: flex-end;
  }
  .box-imgb{
    width:50px;
    height: 60px;
    border: 1px solid #999;
    margin-right: 15px;
  }
  .box-top1{
    padding: 0 10px;
    justify-content: space-around;
    margin-bottom: 5px;
  }
  .box-top2{
    padding: 15px 0;
    flex: 1;
    text-align: center;
  }
  .box-top2j{
    border-bottom: 1px solid #333;
  }
  .se-title1{
    font-size: 16px;
    color: #333;
    line-height: 60px;
  }
  .se-title2{
    color: #999;
  }
  .se-title3{
    font-size: 14px;
    color: #999;
  }
  .se-title4{
    font-size: 14px;
    color: #666;
    font-weight: bold;
  }
</style>

