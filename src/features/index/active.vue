<template>
  <div class="layout pb120">
    <div class="header header-bg">

      <div class="center">
        <p>活动</p>
      </div>
    </div>
    <div class="actlist" >
      <ul>
        <li @click="goDetail('activityid')">
          <!--<a href="#">-->
            <div class="head">
              <img src="../../../static/imgs/img79.jpg"/>
            </div>
            <div class="body">
              <h4>上海中青年市民健康跑活动系列</h4>
              <div class="labels">
                <span>跑步</span>
                <span>市民健康</span>
              </div>
              <dl>
                <dt>2018-09-16 10:00～14:00 </dt>
                <dd>上海市东方明珠广场</dd>
              </dl>
              <label class="c_green">¥158</label>
            </div>
          <!--</a>-->
        </li>
        <li>
          <a href="#">
            <div class="head">
              <img src="../../../static/imgs/img73.jpg"/>
            </div>
            <div class="body">
              <h4>上海中青年市民健康跑活动系列</h4>
              <div class="labels">
                <span>跑步</span>
                <span>市民健康</span>
              </div>
              <dl>
                <dt>2018-09-16 10:00～14:00 </dt>
                <dd>上海市东方明珠广场</dd>
              </dl>
              <label class="c_green">¥158</label>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <FooterBar pageTag="2"/>
  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Activedetail',
    data () {
      return {
        logonData: {},
      }
    },
    methods: {
      //获取活动列表下拉分页
      getActiveInfo(){
          let telf_ = this;
          let params = {
            page:1, //分页初始值
            pageMax:10 //每页最大值
          };
        telf_.$http.post('api/getactivitytop',params, {emulateJSON: true,
          headers: {'Content-Type': 'application/json'}
        }).then(
            function (response) {
              console.log(JSON.stringify(response))
            }
        ).catch(function (error) {
          console.log(error);
        });
      },
      //进入活动详情页面
      goDetail(activityid) {
        this.$router.push({path: '/activedetail',query:{activityid:activityid}})
      }
    },
    mounted: function () {
      //页面加载就执行
      this.getActiveInfo();

    },
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

