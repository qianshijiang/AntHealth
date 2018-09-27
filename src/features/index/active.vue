<template>
  <div class="home-box">
    <TopBar title="活动"/>
    <div class="box-top">
      <div class="box-imgb">
        <img class="box-img1" src="http://static.ydcss.com/uploads/ydui/2.jpg">
      </div>
      <div class="box-tb">
        <p style="font-size: 16px;color: #333;">
          活动介绍活动简介
        </p>
        <div style="display:flex;flex-direction: row;margin-top: 15px;">
          <div class="box-tb2">
            <p class="box-title1">
              标签
            </p>
          </div>
          <div class="box-tb2">
            <p class="box-title1">
              标签文字
            </p>
          </div>
        </div>
        <P class="box-title2">9月18日 10:10 至10月10日 17:00</P>
        <div style="display:flex;flex-direction: row;justify-content: space-between;margin-top: 15px;">
          <p class="box-title3">
            上海市丹巴路55号
          </p>
          <P class="box-title4">
            ¥ 199
          </P>
        </div>
      </div>
    </div>

    <div class="box-top" style="margin-bottom: 60px;">
      <div class="box-imgb">
        <img class="box-img1" src="http://static.ydcss.com/uploads/ydui/3.jpg">
      </div>
      <div class="box-tb">
        <p style="font-size: 16px;color: #333;">
          活动介绍活动简介
        </p>
        <div style="display:flex;flex-direction: row;margin-top: 15px;">
          <div class="box-tb2">
            <p class="box-title1">
              标签
            </p>
          </div>
          <div class="box-tb2">
            <p class="box-title1">
              标签文字
            </p>
          </div>
        </div>
        <P class="box-title2">9月18日 10:10 至10月10日 17:00</P>
        <div style="display:flex;flex-direction: row;justify-content: space-between;margin-top: 15px;">
          <p class="box-title3">
            上海市丹巴路55号
          </p>
          <P class="box-title4">
            ¥ 199
          </P>
        </div>
      </div>
    </div>


    <FooterBar pageTag="2"/>
  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Active',
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
  }
  .box-top{
    height: auto;
    width: 100%;
    border-radius: 5px;
    display: flex;
    background: rgb(242,242,242);
    flex-direction: column;
    margin-top: 15px;
  }
  .box-imgb{
    height: 200px;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    background: rgb(242,242,242);
  }
  .box-img1{
    width:100%;
    height: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .box-tb{
    height: 150px;
    width: 100%;
    display: flex;
    background: rgb(255,255,255);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 15px 10px;
    flex-direction: column;
  }
  .box-title1{
    font-size: 12px;color:#999
  }
  .box-tb2{
    border:1px solid #e0e0e0;
    padding: 6px;
    border-radius: 6px;
    margin-right: 10px;
  }
  .box-title2{
    font-size: 12px;
    color: #999;
    margin-top: 15px;
  }
  .box-title3{
    font-size: 14px;
    color: #666;
  }
  .box-title4{
    font-size: 14px;
    color: #333;
  }
  .se-title1 span{
   font-weight: bold;
  }
</style>

