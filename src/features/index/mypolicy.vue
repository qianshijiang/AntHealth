<template>
  <div class="home-box">
    <TopBar title="我的保单"/>
    <div class="box-top box-top1">
      <div class="box-top2 " :class="{'box-top2j': navflag === 1}" @click="searchList(0)">
        <p class="se-title3">全部</p>
      </div>
      <div class="box-top2" :class="{'box-top2j': navflag === 2}" @click="searchList(1)">
        <p class="se-title3">保障中</p>
      </div>
      <div class="box-top2" :class="{'box-top2j': navflag === 3}" @click="searchList(2)">
        <p class="se-title3">已过期</p>
      </div>
    </div>
    <div class="box-top">
      <p class="se-title1">保单号：<span>4678345734864</span></p>
      <p class="se-title2">即将到期</p>
    </div>
    <div class="pol-content">
      <p>乐享晚年-长护险（2018）</p>
      <p>被保人：赵云</p>
      <p>保障期限：2018-09-17 零时至 2018-10-11</p>
    </div>
    <div class="box-top box-topj">
      <p class="se-title4">保费：230.00元</p>
    </div>
    <div class="box-top box-topj">
      <div class="pol-content1">
        <p>再爆一年</p>
      </div>
      <div class="pol-content1">
        <p>再爆一年</p>
      </div>
      <div class="pol-content1">
        <p>再爆一年</p>
      </div>
    </div>
  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Service',
    data () {
      return {
        logonData: {},
        navflag: 1
      }
    },
    methods: {
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
    min-height: 100%;
    width: 100%;
  }
  .pol-content{
    height: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: rgb(246,246,246);
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
  }
  .box-top{
    height: auto;
    width: 100%;
    border-bottom:1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 20px 10px;
    background: #ffffff;
  }
  .box-topj{
    justify-content: flex-end;
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

