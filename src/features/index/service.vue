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
          <li ><p class="xq" :class="{'xh' : navflag === 1}" @click="searchList(1)">按摩推拿</p></li>
          <li><p class="xq" :class="{'xh' : navflag === 2}" @click="searchList(2)">小儿推拿</p></li>
          <li><p class="xq" :class="{'xh' : navflag === 3}" @click="searchList(3)">SPA</p></li>
          <li><p class="xq" :class="{'xh' : navflag === 4}" @click="searchList(4)">足疗</p></li>
          <li><p class="xq" :class="{'xh' : navflag === 5}" @click="searchList(5)">艾灸</p></li>
        </ul>
      </div>
      <div class="body">
        <ul>
          <li @click="goDetail">
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
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
        this.navflag = v
      },
      getListType(){
        let self = this
        self.$http.get('/api/getservicetypename')
          .then(function (response) {
            console.log(JSON.stringify(response))
            if (response.data.data) {
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      getList(){
        let self = this
        let paramts = {
          typeid: 1,
          page: 1,
          pagemax: 10
        }
        self.$http.post('/api/gettechnicianbytype',paramts,{ emulateJSON: true })
          .then(function (response) {
            console.log(JSON.stringify(response))
            if (response.data.data) {
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      goDetail() {
        this.$router.push({path: '/servicedetail'})
      }
    },
    mounted: function () {
      this.getListType()
      this.getList()
    },
    components: {
      FooterBar,
      TopBar
    }
  }
</script>
<style lang="scss" scoped>
  .xq{
    color:#999;
  }
  .xh{
    color: #333;
    border-bottom: 1px solid #00CE9F
  }
</style>

