<template>
  <div class="home-box" style="background: #fff;">
    <TopBar title="医疗急救卡"/>
    <div class="product-box">
      <div class="aid-box1">
        <p class="aid-text1">
          酱爆茄子
          <span style="font-size: 16px;margin-left: 15px;">男</span>
        </p>
        <p class="aid-text2">
          血型： <span style="font-size: 16px;font-weight: bold;color:#333">男</span>
        </p>
        <p class="aid-text2">
          身高： <span style="font-size: 16px;font-weight: bold;color:#333">169cm</span>
        </p>
        <p class="aid-text2">
          体重： <span style="font-size: 16px;font-weight: bold;color:#333">80kg</span>
        </p>
        <p class="aid-text2">
         紧急联系人电话： <span style="font-size: 16px;font-weight: bold;color:#333">1602716475</span>
        </p>
      </div>
      <div class="aid-box1">
        <p class="aid-text3">
          医疗状况备注
        </p>
        <p class="aid-text4">
        未列名
      </p>
      </div>
      <div class="aid-box1">
        <p class="aid-text3">
          过敏反应备注
        </p>
        <p class="aid-text4">
          青霉素过敏
        </p>
      </div>
      <div class="aid-box1">
        <p class="aid-text3">
          在使用的药物
        </p>
        <p class="aid-text4">
          未列名
        </p>
      </div>
      <div class="aid-box1">
        <p class="aid-text3" style="font-size: 16px;">
          急救地址
        </p>
        <p class="aid-text4" style="font-weight: normal">
          上海市静安区延长中路801号A12室
        </p>
      </div>
    </div>
    <div style="padding: 10px;justify-content: center;width: 100%;text-align: center">
      <yd-checkbox val="1" shape="circle">已阅读并且同意《用户服务协议》</yd-checkbox>
    </div>
    <yd-button @click.native="show1 = true" class="pro-bottom">
      <p>
        立即急救
      </p>
    </yd-button>
    <yd-popup v-model="show1" position="center" width="96%" style="margin:auto;border:1px solid #303133;border-radius: 8px;">
      <div style="background-color:#fff;border:1px solid #303133;border-radius: 8px;padding: 25px;">
        <p style="font-weight: bold;font-size: 36px;color: #666;line-height: 35px;text-align: center">
         接入成功
        </p>
      <div style="display: flex;padding: 15px 40px;background: rgb(242,242,242);border:1px solid #e0e0e0;border-radius: 25px;margin: 25px auto;">
        <p style="text-align: center;font-size: 14px;color: #333;">
          救护员电话：13867543211
        </p>
      </div>
        <p style="text-align: center;color: #999;" >
          救护员 <span style="color: #333">白求恩</span>飞速赶往<span style="color: #333">新华园A栋101室中</span>
        </p>
      </div>
    </yd-popup>
  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Aidcard',
    data () {
      return {
        logonData: {},
        show1:false
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
    height: auto;
    /*min-height: 100%;*/
    width: 100%;
    background: #ffffff;
  }
  .product-box{
    height: auto;
    width: 90%;
    margin: 0 auto;
    background: #ffffff;
    padding: 20px;
    margin-top: 10px;
    display: flex;border: 1px solid #e0e0e0;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
  }
  .aid-box1{
    height: auto;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e0e0e0;
    width: 100%;
    padding-bottom: 15px;
  }
  .aid-text1{
    font-size: 24px;
    color: #333;
    font-weight: bold;
    line-height: 35px;
  }
  .aid-text2{
    font-size: 16px;
    color: #999;
    line-height: 35px;
  }
  .aid-text3{
    font-size: 18px;
    color: #999;
    line-height: 35px;
    font-weight: bold;
    margin-top: 7px;
  }
  .aid-text4{
    font-size: 16px;
    color: #333;
    line-height: 35px;
    font-weight: bold;
  }
  .box-content1 div{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .se-title1 span{
    font-weight: bold;
  }
  home-title6{
    font-family:'微软雅黑';
    font-weight:400;
    font-style:normal;
    color:#CCC;
  }
  .pro-bottom{
    height: auto;
    line-height: 35px;
    width: 65%;
    margin: auto;
    border-radius: 35px;
    padding: 10px;
    background: #6f7180;
    margin-top:15px;
    margin-bottom: 15px;
    margin-left: 15%;
  }
  .pro-bottom p{
    text-align: center;
    color: #ffffff;
    font-size: 16px;
  }
</style>

