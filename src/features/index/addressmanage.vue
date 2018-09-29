<template>
  <div class="home-box">
    <TopBar title="地址管理"/>

    <div class="box-top">
      <yd-preview :buttons="btns" style="padding-top:10px; ">
        <yd-preview-item>
          <div slot="left" style="color: #333">杨大哥   <span style="margin-left: 15px;">15025154119</span></div>
          <div slot="left"></div>
        </yd-preview-item>
        <yd-preview-item class="add-box">
          <div slot="left" class="add-text">云南省昆明市。。。。。</div>
          <div slot="left"></div>
        </yd-preview-item>
        <yd-preview-item class="add-box1">
          <div slot="left" class="add-box2">
            <div class="add-box3">
              <yd-icon name="checkoff" size="1rem" color="#fff" class="add-box4"></yd-icon></div>
            <span class="add-text1">设置默认</span>
            </div>
          <div slot="left"></div>
          <div slot="right" class="add-box5">
            <div class="add-text2"><yd-icon style="margin-right: 5px;" size="1.5rem" name="compose"></yd-icon><span  style="font-size: 14px;">编辑</span></div>
            <div style="color: #666"><yd-icon  size="1.5rem"  name="delete"></yd-icon><span style="font-size: 14px;">删除</span></div>
          </div>
        </yd-preview-item>
      </yd-preview>
    </div>
    <div class="box-top">
      <yd-preview :buttons="btns" style="padding-top:10px; ">
        <yd-preview-item>
          <div slot="left" style="color: #333">杨大哥   <span style="margin-left: 15px;">15025154119</span></div>
          <div slot="left"></div>
        </yd-preview-item>
        <yd-preview-item class="add-box">
          <div slot="left" class="add-text">云南省昆明市。。。。。</div>
          <div slot="left"></div>
        </yd-preview-item>
        <yd-preview-item class="add-box1">
          <div slot="left" class="add-box2">
            <div class="add-box3 add-box3j">
              <yd-icon name="checkoff" size="1rem" style="color:#fff;display:none" class="add-box4"></yd-icon></div>
            <span class="add-text1">设置默认</span>
          </div>
          <div slot="left"></div>
          <div slot="right" class="add-box5">
            <div class="add-text2"><yd-icon style="margin-right: 5px;" size="1.5rem" name="compose"></yd-icon><span  style="font-size: 14px;">编辑</span></div>
            <div style="color: #666"><yd-icon  size="1.5rem"  name="delete"></yd-icon><span style="font-size: 14px;">删除</span></div>
          </div>
        </yd-preview-item>
      </yd-preview>
    </div>


    <div class="pol-content">

    </div>
    <yd-button size="large" type="danger" style="position: absolute;bottom:0;">+ 新建地址</yd-button>
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

