<template>
  <div class="home-box">
    <TopBar title="服务"/>
    <div class="box-top">
      <p class="se-title1">上门地址：<span>请选择服务地址</span></p>
      <p class="se-title2">个更换地址</p>
    </div>
    <div class="box-top box-top1">
      <div class="box-top2 box-top2j">
        <p class="se-title3">按摩推拿</p>
      </div>
      <div class="box-top2">
        <p class="se-title3">小儿推拿</p>
      </div>
      <div class="box-top2">
        <p class="se-title3">SPA</p>
      </div>
      <div class="box-top2">
        <p class="se-title3">足疗</p>
      </div>
      <div class="box-top2">
        <p class="se-title3">艾灸</p>
      </div>
    </div>
    <div class="box-content" @click="goDetail">
      <img class="box-imgb" src="http://static.ydcss.com/uploads/ydui/2.jpg">
      <div class="box-content1">
        <div>
          <p style="font-size: 16px;color: #333;font-weight: bold">矛尖吻</p>
          <p style="font-size: 14px;color: #333;">
            0.3km
          </p>
        </div>
        <p style="font-size: 14px;color: #333;margin-top: 5px;">
          34岁 甘肃  中级按摩师
        </p>
        <p class="box-text">
          从业5年，曾在上海多家大型养生会所任理疗师，得到广大用户的高度评价，擅长精油SPA、淋巴排毒...
        </p>
      </div>
    </div>
    <div class="box-content" style="margin-bottom: 60px">
      <img class="box-imgb" src="http://static.ydcss.com/uploads/ydui/2.jpg">
      <div class="box-content1">
        <div>
          <p style="font-size: 16px;color: #333;font-weight: bold">矛尖吻</p>
          <p style="font-size: 14px;color: #333;">
            0.3km
          </p>
        </div>
        <p style="font-size: 14px;color: #333;margin-top: 5px;">
          34岁 甘肃  中级按摩师
        </p>
        <p class="box-text">
          从业5年，曾在上海多家大型养生会所任理疗师，得到广大用户的高度评价，擅长精油SPA、淋巴排毒...
        </p>
      </div>
    </div>
    <FooterBar pageTag="1"/>
  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Service',
    data () {
      return {
        logonData: {}
      }
    },
    methods: {
      goDetail() {
        this.$router.push({path: '/servicedetail'})
      }
    },
    mounted: function () {},
    components: {
      FooterBar,
      TopBar
    }
  }
</script>
<style lang="scss" scoped>
  .home-box {
    margin:0px;
    background-image:none;
    height: auto;
    min-height: 100%;
    width: 100%;
  }
  .box-content{
    height: auto;
    flex: 1;
    border-bottom:1px solid #e0e0e0;
    border-top:1px solid #e0e0e0;
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin-top: 10px;
  }
  .box-text{
    font-size: 14px;
    color: #999;
    margin-top: 5px;
    overflow: hidden;
    display:-webkit-box;
    text-overflow:ellipsis;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    white-space:normal;
    line-height: 18px;
  }
  .box-content1{
    display: flex;
    flex-direction: column;
    overflow: hidden;
    overflow-wrap: normal;
  }
  .box-content1 div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .box-top{
    height: auto;
    width: 100%;
    border-bottom:1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 20px 10px;
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
  .box-imgb{
    width:40px;
    height: 50px;
    border: 1px solid #999;
    margin-right: 15px;
    margin-top: 25px;
  }
  .box-img1{
    width:100%;
    height: 100%;
  }
  .se-title1{
    font-size: 16px;
    color: #333;
  }
  .se-title1 span{
   font-weight: bold;
  }
  .se-title2{
  }
  .se-title3{
    font-size: 14px;
    color: #999;
  }
</style>

