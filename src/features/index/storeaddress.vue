<template>
  <div class="home-box">
    <TopBar title="门店地址"/>
    <div class="product-box-son" style="border-bottom: 0;padding-bottom: 0;">
      <div style="display: flex;flex-direction: row">
        <img  style="height: 20px;width: 20px;margin-top: 12px;margin-left: 15px;" src="../../assets/image/icon.png">
        <p class="pro-text3 pro-text3j">
          上海市普陀区丹巴路55号
        </p>
      </div>
    </div>
    <div class="product-box-son" style="padding-top: 0;">
      <div style="display: flex;flex-direction: row">
        <img  style="height: 20px;width: 20px;margin-top: 12px;margin-left: 15px;" src="../../assets/image/time.png">
        <p class="pro-text3 pro-text3j">
          021-21512230
        </p>
      </div>
    </div>
    <div class="product-box-son">
      <div style="display: flex;flex-direction: row">
        <div style="height: 35px;width: 5px;background: #e0e0e0;margin-left: 20px;"></div>
        <p class="pro-text3 pro-text3j">
          活动列表
        </p>
      </div>
    </div>
    <div class="box-content" style="margin: 0;">
      <!--<div class="box-imgb">-->
        <img class="box-imgb" src="http://static.ydcss.com/uploads/ydui/2.jpg">
      <!--</div>-->
      <div class="box-content1">
        <p style="font-size: 16px;color: #999;margin-top: 5px;font-weight: bold">
          活动标题 活动标题 活动标题 活动标题 活动标题
        </p>
        <p class="box-text">
          上海市普陀区丹巴路55号
        </p>
        <div>
          <p style="font-size: 14px;color: #999;">9月18日 开始</p>
          <p style="font-size: 14px;color: #999;">
            免费
          </p>
        </div>
      </div>
    </div>
    <div class="box-content" style="margin: 5px 0;">
      <!--<div class="box-imgb">-->
      <img class="box-imgb" src="http://static.ydcss.com/uploads/ydui/2.jpg">
      <!--</div>-->
      <div class="box-content1">
        <p style="font-size: 16px;color: #999;margin-top: 5px;font-weight: bold">
          活动标题 活动标题 活动标题 活动标题 活动标题
        </p>
        <p class="box-text">
          上海市普陀区丹巴路55号
        </p>
        <div>
          <p style="font-size: 14px;color: #999;">9月18日 开始</p>
          <p style="font-size: 14px;color: #999;">
            免费
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
    name: 'Storeaddress',
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
    margin-top:45px;
    background-image:none;
    height: auto;
    min-height: 100%;
    width: 100%;
    background: #fff;
  }
  .box-text{
    font-size: 14px;
    color: #999;
    margin-top: 5px;
    line-height:25px;
    overflow: hidden;
    display:-webkit-box;
    text-overflow:ellipsis;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    white-space:normal;
  }
  .box-content{
    height: auto;
    max-height: 120px;
    width: 100%;
    /*border-bottom:1px solid #e0e0e0;*/
    /*border-top:1px solid #e0e0e0;*/
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin-top: 10px;
    background: rgb(242,242,242);
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
  .product-box-son{
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
  }
  .pro-text3{
    color: #333;
    line-height: 45px;
    margin-left: 15px;
    font-weight: bold;
  }
  .pro-text3j{
    color: #333;
    font-weight: normal;
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

  .box-imgb{
    width:140px;
    height:100px;
    border: 1px solid #999;
    margin-right: 15px;
    border-radius: 10px;
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

