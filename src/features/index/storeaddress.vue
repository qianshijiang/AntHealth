<template>
  <div class="layout">
    <div class="header actaddr-header">
      <div class="left">
        <div @click="prev" class=" back back1"></div>
      </div>

    </div>
    <div class="actaddr">
      <div class="actaddr-vw">
        <img src="../../../static/imgs/img83.jpg"/>
        <label></label>
      </div>
      <div class="actaddr-hd">
        <dl>
          <dt><i></i></dt>
          <dd class="d1">上海市东方明珠广场</dd>
          <dd class="d2">021-21512230</dd>
        </dl>
      </div>
      <div class="actaddr-bd">
        <ul>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img66.png"/>
              </div>
              <div class="txt">
                <h4>2018市民健康跑步活动</h4>
                <p>2018-09-16 10:00～14:00 </p>
                <label class="c_green">免费</label>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img66.png"/>
              </div>
              <div class="txt">
                <h4>2018市民健康跑步活动</h4>
                <p>2018-09-16 10:00～14:00 </p>
                <label class="c_green">免费</label>
              </div>
            </a>
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
    name: 'Storeaddress',
    data () {
      return {
        logonData: {}
      }
    },
    methods: {
      changePwd: function () {
        this.showChangePwdPanel = true
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

