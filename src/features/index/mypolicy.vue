<template>
  <div class="layout ">
    <div class="header header-bg">
      <div class="left">
        <div @click="prev" class="back"></div>
      </div>
      <div class="center">
        <p>我的保单</p>
      </div>
    </div>
    <div class="myorder">
      <div class="head g-tab-hd">
        <ul>
          <li class="on"><a href="#">全部</a></li>
          <li><a href="#">保障中</a></li>
          <li><a href="#">已过期</a></li>
        </ul>
      </div>
      <div class="body g-tab-bd">
        <ul>
          <li>
            <div class="body-hd">
              <div class="left">
                保单号：9200100010608429
              </div>
              <div class="right">
                <font class="c_red">即将到期</font>
              </div>
            </div>
            <div class="body-bd">
              <p>乐享晚年-长护险（2018）<br/>
                被保人：赵云<br/>
                保障期限：2018-09-17 零时至 2018-10-11
              </p>
              <label>保费：<font class="c_green">¥158</font></label>
            </div>
            <div class="body-ft">
              <a href="#">再保一年</a>
              <a href="#">自助理赔</a>
              <a href="#" class="on">保单信息</a>
            </div>
          </li>
          <li>
            <div class="body-hd">
              <div class="left">
                保单号：9200100010608429
              </div>
              <div class="right">
                <font class="c_red">即将到期</font>
              </div>
            </div>
            <div class="body-bd">
              <p>乐享晚年-长护险（2018）<br/>
                被保人：赵云<br/>
                保障期限：2018-09-17 零时至 2018-10-11
              </p>
              <label>保费：<font class="c_green">¥158</font></label>
            </div>
            <div class="body-ft">
              <a href="#">再保一年</a>
              <a href="#">自助理赔</a>
              <a href="#" class="on">保单信息</a>
            </div>
          </li>
          <li>
            <div class="body-hd">
              <div class="left">
                保单号：9200100010608429
              </div>
              <div class="right">
                <font >已过期</font>
              </div>
            </div>
            <div class="body-bd">
              <p>乐享晚年-长护险（2018）<br/>
                被保人：赵云<br/>
                保障期限：2018-09-17 零时至 2018-10-11
              </p>
              <label>保费：<font class="c_green">¥158</font></label>
            </div>
            <div class="body-ft">
              <a href="#">再保一年</a>
              <a href="#">自助理赔</a>
              <a href="#" class="on">保单信息</a>
            </div>
          </li>
          <li class="on">
            <div class="body-hd">
              <div class="left">
                保单号：9200100010608429
              </div>

            </div>
            <div class="body-bd">
              <p>乐享晚年-长护险（2018）<br/>
                被保人：赵云<br/>
                保障期限：2018-09-17 零时至 2018-10-11
              </p>
              <label>保费：<font class="c_green">¥158</font></label>
            </div>
            <div class="body-ft">
              <a href="#">再保一年</a>
              <a href="#">自助理赔</a>
              <a href="#" class="on">保单信息</a>
            </div>
          </li>
        </ul>
      </div>

      <div class="body g-tab-bd" style="display: none;">
        <ul>

          <li class="on">
            <div class="body-hd">
              <div class="left">
                保单号：9200100010608429
              </div>

            </div>
            <div class="body-bd">
              <p>乐享晚年-长护险（2018）<br/>
                被保人：赵云<br/>
                保障期限：2018-09-17 零时至 2018-10-11
              </p>
              <label>保费：<font class="c_green">¥158</font></label>
            </div>
            <div class="body-ft">
              <a href="#">再保一年</a>
              <a href="#">自助理赔</a>
              <a href="#" class="on">保单信息</a>
            </div>
          </li>
        </ul>
      </div>


      <div class="body g-tab-bd" style="display: none;">
        <ul>
          <li>
            <div class="body-hd">
              <div class="left">
                保单号：9200100010608429
              </div>
              <div class="right">
                <font >已过期</font>
              </div>
            </div>
            <div class="body-bd">
              <p>乐享晚年-长护险（2018）<br/>
                被保人：赵云<br/>
                保障期限：2018-09-17 零时至 2018-10-11
              </p>
              <label>保费：<font class="c_green">¥158</font></label>
            </div>
            <div class="body-ft">
              <a href="#">再保一年</a>
              <a href="#">自助理赔</a>
              <a href="#" class="on">保单信息</a>
            </div>
          </li>
        </ul>
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
      },
      prev(){
        this.$router.go(-1)
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
    /*margin-top:45px;*/
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

