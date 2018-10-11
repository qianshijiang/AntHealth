<template>
    <div class="layout ">
      <!--<TopBar title="蚂蚁头条"/>-->
      <div class="header header-bg">
        <div class="left">
          <div @click="prev" class="back"></div>
        </div>
        <div class="center">
          <p>蚂蚁头条</p>
        </div>
      </div>
      <div class="topnews">
        <div class="head g-tab-hd">
          <ul>
            <li class="on"><a href="#">全部</a></li>
            <li><a href="#">健康保障</a></li>
            <li><a href="#">健康管理</a></li>
            <li><a href="#">健康专栏</a></li>
          </ul>
        </div>
        <div class="body g-tab-bd">
          <ul>
            <li @click="goDetail">
              <!--<a href="#">-->
                <div class="img">
                  <img src="../../../static/imgs/img66.png"/>
                </div>
                <div class="txt">
                  <h4>2018市民健康跑步活动</h4>
                  <p>让我们的开始锻炼吧，让身体健康起来，加油吧</p>
                  <div class="labels">
                    <div class="left">
                      <label>跑步</label>
                      <label>市民健康</label>
                    </div>
                    <div class="right">
                      2018-09-16
                    </div>
                  </div>
                </div>
              <!--</a>-->
            </li>
            <li>
              <div @click="goDetail">
                <div class="img">
                  <img src="../../../static/imgs/img66.png"/>
                </div>
                <div class="txt">
                  <h4>大型全面健康体检活动</h4>
                  <p>让我们的开始锻炼吧，让身体健康起来，加油吧</p>
                  <div class="labels">
                    <div class="left">
                      <label>跑步</label>
                      <label>市民健康</label>
                    </div>
                    <div class="right">
                      2018-09-16
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="body g-tab-bd" style="display: none;">
          <ul>
            <li>
              <a href="#">
                <div class="img">
                  <img src="../../../static/imgs/img66.png"/>
                </div>
                <div class="txt">
                  <h4>2018市民健康跑步活动</h4>
                  <p>让我们的开始锻炼吧，让身体健康起来，加油吧</p>
                  <div class="labels">
                    <div class="left">
                      <label>跑步</label>
                      <label>市民健康</label>
                    </div>
                    <div class="right">
                      2018-09-16
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="body g-tab-bd" style="display: none;">
          <ul>
            <li>
              <a href="#">
                <div class="img">
                  <img src="../../../static/imgs/img66.png"/>
                </div>
                <div class="txt">
                  <h4>2018市民健康跑步活动11</h4>
                  <p>让我们的开始锻炼吧，让身体健康起来，加油吧</p>
                  <div class="labels">
                    <div class="left">
                      <label>跑步</label>
                      <label>市民健康</label>
                    </div>
                    <div class="right">
                      2018-09-16
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="body g-tab-bd" style="display: none;">
          <ul>
            <li>
              <a href="#">
                <div class="img">
                  <img src="../../../static/imgs/img66.png"/>
                </div>
                <div class="txt">
                  <h4>2018市民健康跑步活动22</h4>
                  <p>让我们的开始锻炼吧，让身体健康起来，加油吧</p>
                  <div class="labels">
                    <div class="left">
                      <label>跑步</label>
                      <label>市民健康</label>
                    </div>
                    <div class="right">
                      2018-09-16
                    </div>
                  </div>
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
    name: 'Headinfo',
    data () {
      return {
        logonData: {},
        navflag: 1
      }
    },
    methods: {
      goDetail() {
        this.$router.push({path: '/headinfodetail'})
      },
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
    background: #fff;
  }
  .box-text{
    font-size: 14px;
    color: #999;
    margin-top: 5px;
    line-height:18px;
    height: 36px;
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
    border-bottom:1px solid #e0e0e0;
    border-top:1px solid #e0e0e0;
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin-top: 10px;
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
    width:120px;
    height:90px;
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

