<template>
  <div class="layout  h-bg pb30">
    <div class="header onetouch-head">
      <div class="left">
        <div @click="prev" class="back"></div>
      </div>
      <div class="center">
        <p>一键急救</p>
      </div>
    </div>
    <div class="onetouch">
      <div class="head">
        <div class="head-hd">
          <div class="img">
            <img src="../../../static/imgs/img38.png"/>
            <sub>女</sub>
          </div>
          <div class="txt">
            <h4>王力宏</h4>
            <p class="tel">13868937846</p>
          </div>
        </div>
        <div class="head-bd">
          <ul>
            <li>
              <h4>168</h4>
              <p>身高(cm)</p>
            </li>
            <li>
              <h4>B</h4>
              <p>血型</p>
            </li>
            <li>
              <h4>49</h4>
              <p>体重(kg)</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="body">
        <ul>
          <li>
            <div class="body-hd">
              医疗状况备注
            </div>
            <div class="body-bd">
              <p>该患者淋巴结肿大，有明显肿块，建议多锻炼</p>
            </div>
          </li>
          <li>
            <div class="body-hd">
              过敏反应备注
            </div>
            <div class="body-bd">
              <p class="c_red">青霉素过敏</p>
            </div>
          </li>
          <li>
            <div class="body-hd">
              在使用的药物
            </div>
            <div class="body-bd">
              <p>为列明</p>
            </div>
          </li>
          <li>
            <div class="body-hd">
              急救地址
            </div>
            <div class="body-bd">
              <p>上海市静安区延长中路801号A12室</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="foot">
        <a href="#">立即急救</a>
      </div>
    </div>

  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Aidcard',
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
    background: rgb(153,153,153);
    margin-top:15px;
    margin-bottom: 15px;
  }
  .pro-bottom p{
    text-align: center;
    color: #ffffff;
    font-size: 16px;
  }
</style>

