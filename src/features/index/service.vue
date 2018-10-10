<template>
  <div class="layout pb120">
    <div class="header header-bg">
      <div class="left">
        <p class="address">上门地址：<span>请选择服务地址</span></p>
      </div>
      <div class="center">

      </div>
      <div class="right">
        <a href="#" class="changeaddr border_2"><span>更换地址</span></a>
      </div>
    </div>
    <div class="selectaddr">
      <div class="head">
        <ul>
          <li class="on"><a href="#">按摩推拿</a></li>
          <li><a href="#">小儿推拿</a></li>
          <li class=""><a href="#">SPA</a></li>
          <li><a href="#">足疗</a></li>
          <li><a href="#">艾灸</a></li>
        </ul>
      </div>
      <div class="body">
        <ul>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img77.png"/>
              </div>
              <div class="txt">
                <h2>李艾美</h2>
                <h4>
                  <span>30岁</span>
                  <span>|</span>
                  <span>上海</span>
                  <span>|</span>
                  <span>高级按摩师</span>
                </h4>
                <p>专业按摩师上门为您进行深度的中医按摩服务，缓解疲劳、身体病痛，改善健康状况。</p>
                <address>0.2km</address>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img76.png"/>
              </div>
              <div class="txt">
                <h2>欧阳夏丹</h2>
                <h4>
                  <span>30岁</span>
                  <span>|</span>
                  <span>上海</span>
                  <span>|</span>
                  <span>高级按摩师</span>
                </h4>
                <p>从业5年，曾在上海多家大型养生会所任理疗师，得到广大用户的高度评价，擅长精油SPA</p>
                <address>0.6km</address>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img69.png"/>
              </div>
              <div class="txt">
                <h2>王梓淇</h2>
                <h4>
                  <span>30岁</span>
                  <span>|</span>
                  <span>上海</span>
                  <span>|</span>
                  <span>高级按摩师</span>
                </h4>
                <p>专业按摩师上门为您进行深度的中医按摩服务，缓解疲劳、身体病痛，改善健康状况。</p>
                <address>0.8km</address>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img68.png"/>
              </div>
              <div class="txt">
                <h2>刘亚婷</h2>
                <h4>
                  <span>30岁</span>
                  <span>|</span>
                  <span>上海</span>
                  <span>|</span>
                  <span>高级按摩师</span>
                </h4>
                <p>专业按摩师上门为您进行深度的中医按摩服务，缓解疲劳、身体病痛，改善健康状况。</p>
                <address>1.2km</address>
              </div>
            </a>
          </li>
        </ul>
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
        logonData: {},
        navflag: 1
      }
    },
    methods: {
      searchList(v){
        this.navflag = v + 1
      },
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
    /*margin-top:45px;*/
    /*margin-top:10px;*/
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

