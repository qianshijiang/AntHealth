<template>
  <div class="home-box">
    <TopBar title="头条信息"/>
    <div class="box-top box-top1">
      <div class="box-top2 box-top2j">
        <p class="se-title3">全部</p>
      </div>
      <div class="box-top2">
        <p class="se-title3">建康保障</p>
      </div>
      <div class="box-top2">
        <p class="se-title3">健康管理</p>
      </div>
      <div class="box-top2">
        <p class="se-title3">建康专栏</p>
      </div>
    </div>
    <div class="box-content">
      <div class="box-imgb">
        <img class="box-img1" src="http://static.ydcss.com/uploads/ydui/2.jpg">
      </div>
      <div class="box-content1">

        <p style="font-size: 14px;color: #333;margin-top: 5px;">
          34岁 甘肃  中级按摩师
        </p>
        <p style="font-size: 14px;color: #999;margin-top: 5px;line-height:18px;height: 36px;overflow: hidden;display:-webkit-box; text-overflow:ellipsis; -webkit-line-clamp:2;  -webkit-box-orient:vertical;white-space:normal; ">
          从业5年，曾在上海多家大型养生会所任理疗师，得到广大用户的高度评价，擅长精油SPA、淋巴排毒
        </p>
        <div>
          <p style="font-size: 16px;color: #333;font-weight: bold">标签</p>
          <p style="font-size: 14px;color: #333;">
            2018年9月17日 12:57
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Headinfo',
    data () {
      return {
        logonData: {}
      }
    },
    methods: {
      changePwd: function () {
        this.showChangePwdPanel = true
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
    background: #fff;
  }
  .box-content{
    height: auto;
    max-height: 120px;
    width: 100%;
    border-bottom:1px solid #e0e0e0;
    border-top:1px solid #e0e0e0;
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin-top: 10px;
  }
  .box-content1{
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .box-content1 div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;
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
    width:260px;
    height:90px;
    border: 1px solid #999;
    margin-right: 15px;
    border-radius: 20px;
  }
  .box-img1{
    width:100%;
    height: 100%;
    border-radius: 15px;
  }
  .se-title3{
    font-size: 14px;
    color: #999;
  }
</style>

