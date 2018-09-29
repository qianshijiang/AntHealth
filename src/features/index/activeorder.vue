<template>
  <div class="home-box">
    <TopBar title="活动订单"/>
    <div class="box-top box-top1">
      <div class="box-top2" :class="{'box-top2j': navflag === 1}" @click="searchList(0)">
        <p class="se-title3">全部</p>
      </div>
      <div class="box-top2" :class="{'box-top2j': navflag === 2}" @click="searchList(1)">
        <p class="se-title3">待参加</p>
      </div>
      <div class="box-top2" :class="{'box-top2j': navflag === 3}" @click="searchList(2)">
        <p class="se-title3">审核中</p>
      </div>
      <div class="box-top2" :class="{'box-top2j': navflag === 4}" @click="searchList(3)">
        <p class="se-title3">已验票</p>
      </div>
      <div class="box-top2" :class="{'box-top2j': navflag === 5}" @click="searchList(4)">
        <p class="se-title3">退票</p>
      </div>
    </div>
    <div class="pol-content" @click="goDetail">
      <div class="aor-box1">
        <p class="aor-text">活动标题活动标题</p>
        <p class="aor-text1">上海市你家门口</p>
        <p class="aor-text2">6月20日</span></p>
      </div>
      <div class="aor-box1 aor-box1j">
        <p class="aor-text1">免费票</p>
        <p class="aor-text1" style="font-weight: bold;color: #999;">￥20</span></p>
        <div class="pol-content1">
          <p>有效</p>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Serviceorder',
    data () {
      return {
        logonData: {},
        navflag: 1
      }
    },
    methods: {
      goDetail() {
        this.$router.push({path: '/serviceorderdetail'})
      },
      goRefund() {
        this.$router.push({path: '/refund'})
      },
      searchList(v){
        this.navflag = v + 1
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
    width: 100%;

  }
  .aor-box1{
    display: flex;flex-direction: column;border-right:1px dashed #e0e0e0;
    padding: 0 15px;
    flex: 2;
  }
  .aor-box1j{
    border: 0;
    flex: 1;
    align-items: center;
  }
  .aor-text{
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }
  .aor-text1{
    font-size: 14px;
    color: #999;
  }
  .aor-text2{
    font-size: 12px;
    color: #666;
  }
  .pol-content{
    height: auto;
    flex: 1;
    display: flex;
    flex-direction: row;
    padding: 20px 0px;
    background: rgb(255,255,255);
    overflow: hidden;
    width: 95%;margin: auto;
    margin-top: 15px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
  }
  .pol-content p{
    line-height: 30px;
    color: #333;
    font-size: 16px;

  }
  .pol-content1{
    height: auto;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    margin-right: 8px;
    background: rgb(242,242,242);
    height: 25px;
    width: 40px;

  }
  .pol-content1 p {
    font-size: 12px;
    text-align: center;
    color: #333;
    line-height: 25px;
  }
  .box-content1 div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .box-top{
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px;
    background: #ffffff;
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
  .se-title3{
    font-size: 14px;
    color: #999;
  }
</style>

