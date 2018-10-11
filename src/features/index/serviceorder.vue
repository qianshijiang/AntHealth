<template>
  <div class="layout ">
    <div class="header header-bg">
      <div class="left">
        <div @click="prev" class="back"></div>
      </div>
      <div class="center">
        <p>服务订单</p>
      </div>
      <div class="right">

      </div>
    </div>
    <div class="servlist">
      <div class="head g-tab-hd">
        <ul>
          <li class="on"><a href="#">进行中</a></li>
          <li><a href="#">已完成</a></li>
          <li><a href="#">已取消</a></li>
        </ul>
      </div>
      <div class="body g-tab-bd">
        <ul>
          <li>
            <div class="bd" @click="goDetail">
              <div class="bd-l">
                <img src="../../../static/imgs/img77.png"/>
              </div>
              <div class="bd-r">
                <h3>技师：李艾美</h3>
                <h4>服务：团享办公室肩颈</h4>
                <p>服务时间：09-16  15:30</p>
                <label>¥158</label>
              </div>
            </div>
            <div class="ft">
              <div class="ft-l">
                2018-09-16
              </div>
              <div class="ft-r">
                <!--<input type="button" name="" id="" value="取消" />-->
                <p style="text-align: center;color:#00CE9F;line-height: 23px;font-size: 12px;" @click="goRefund">取消</p>
              </div>
            </div>
          </li>
          <li>
            <div class="bd">
              <div class="bd-l">
                <img src="../../../static/imgs/img76.png"/>
              </div>
              <div class="bd-r">
                <h3>技师：欧阳夏丹</h3>
                <h4>服务：团享办公室肩颈</h4>
                <p>服务时间：09-18  11:30</p>
                <label>¥158</label>
              </div>
            </div>
            <div class="ft">
              <div class="ft-l">
                2018-09-16
              </div>
              <div class="ft-r">
                <input type="button" name="" id="" value="取消" />
              </div>
            </div>
          </li>

        </ul>
      </div>
      <div class="body g-tab-bd" style="display: none;">
        <ul>
          <li>
            <div class="bd">
              <div class="bd-l">
                <img src="../../../static/imgs/img77.png"/>
              </div>
              <div class="bd-r">
                <h3>技师：李艾美</h3>
                <h4>服务：团享办公室肩颈</h4>
                <p>服务时间：09-16  15:30</p>
                <label>¥158</label>
              </div>
            </div>
            <div class="ft">
              <div class="ft-l">
                2018-09-16
              </div>
              <div class="ft-r">
                <input type="button" name="" id="" value="取消" />
              </div>
            </div>
          </li>
          <li>
            <div class="bd">
              <div class="bd-l">
                <img src="../../../static/imgs/img76.png"/>
              </div>
              <div class="bd-r">
                <h3>技师：欧阳夏丹</h3>
                <h4>服务：团享办公室肩颈</h4>
                <p>服务时间：09-18  11:30</p>
                <label>¥158</label>
              </div>
            </div>
            <div class="ft">
              <div class="ft-l">
                2018-09-16
              </div>
              <div class="ft-r">
                <input type="button" name="" id="" value="取消" />
              </div>
            </div>
          </li>
          <li>
            <div class="bd">
              <div class="bd-l">
                <img src="../../../static/imgs/img76.png"/>
              </div>
              <div class="bd-r">
                <h3>技师：欧阳夏丹</h3>
                <h4>服务：团享办公室肩颈</h4>
                <p>服务时间：09-18  11:30</p>
                <label>¥158</label>
              </div>
            </div>
            <div class="ft">
              <div class="ft-l">
                2018-09-16
              </div>
              <div class="ft-r">
                <input type="button" name="" id="" value="取消" />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="body g-tab-bd" style="display: none;">
        <ul>
          <li>
            <div class="bd">
              <div class="bd-l">
                <img src="../../../static/imgs/img77.png"/>
              </div>
              <div class="bd-r">
                <h3>技师：李艾美</h3>
                <h4>服务：团享办公室肩颈</h4>
                <p>服务时间：09-16  15:30</p>
                <label>¥158</label>
              </div>
            </div>
            <div class="ft">
              <div class="ft-l">
                2018-09-16
              </div>
              <div class="ft-r" >
                <p @click="goRefund">取消</p>
              </div>
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
    name: 'Serviceorder',
    data () {
      return {
        logonData: {},
        show2: false,
        radio2: 2,
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
    width: 100%;

  }
  .or-box1{
    display: flex;flex-direction: column;padding: 10px 20px;
  }
  .or-box2{
    margin: 10px;
  }
  .or-text{
    padding: 8px 0;
    line-height: 20px;
  }
  .or-text1{
    font-weight: bold;
    color: #999;
    font-size: 16px;
    text-align: center;
  }
  .pol-content{
    height: auto;
    flex: 1;
    display: flex;
    flex-direction: row;
    border-top: 1px solid #e0e0e0;
    padding: 20px;
    background: rgb(255,255,255);
  }
  .box-imgb{
    width:40px;
    height: 50px;
    border: 1px solid #999;
    margin-right: 15px;
    margin-top: 25px;
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
    background-color: rgb(242,242,242);
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
    border-top:1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px;
    background: #ffffff;
  }
  .box-topj{
    border-bottom:1px solid #e0e0e0;
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
  .se-title3{
    font-size: 14px;
    color: #999;
  }
  .se-title4{
    font-size: 16px;
    color: #666;
    font-weight: bold;
    line-height: 35px;
  }
  .box-bottom{
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    padding: 5px 10px;
  }
  .box-topj{
    padding: 10px 25px;
  }
</style>

