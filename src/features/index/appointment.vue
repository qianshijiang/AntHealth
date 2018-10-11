<template>
  <div>
    <div class="layout pb120">
      <div class="header">
        <div class="left">
          <div @click="prev" class="back"></div>
        </div>
        <div class="center">
          <p>保健养生</p>
        </div>
        <div class="right">

        </div>
      </div>
      <div class="servf">
        <form action="" method="post">
          <div class="body">
            <ul>
              <li>
                <div class="label">
                  全身推拿理疗
                </div>
                <div class="input">
                  158元/60分钟
                  <input class="spinnerExample" type="" name=""  value="1" />
                  <!--插件-->
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div class="label">
                  按摩师
                </div>
                <div class="input">
                  <img src="../../../static/imgs/img77.png"/>
                  李艾美
                </div>
              </li>
              <li>
                <div class="label c_gray">
                  当前技师无法服务时，允许更换技师
                </div>

                <div class="input">
                  <input type="checkbox" name="" id="chose" checked="" value="" class="choose-btn" />
                  <label for="chose" class="choose-label"></label>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div class="label">
                  联系电话
                </div>
                <div class="input input-arr">
                  <input type="text" readonly name="" id="" value="13888860877" />
                </div>
              </li>
              <li>
                <div class="label">
                  服务地址
                </div>
                <div class="input input-arr">
                  <input type="text" readonly name="" id="" value="上海市静安区延长中路801号A12室" />
                </div>
              </li>
              <li>
                <div class="label">
                  上门时间
                </div>
                <div class="input input-arr">
                  <input type="text" readonly name="" id="sub_time" value="" placeholder="请选择上门时间"/>
                </div>
              </li>
              <li>
                <div class="label">
                  备注留言
                </div>
                <div class="input memo">
                  <input type="text" class="memo" name="" id="" value="" placeholder="请输入备注"/>
                </div>
              </li>
            </ul>
            <ul>
              <li @click="goCoupon">
                <div class="label">
                  优惠券
                </div>
                <div class="input input-arr">
                  <input type="text" readonly name="" id="" value="" placeholder="0张"/>
                </div>
              </li>
              <li>
                <div class="label">
                  预计实付
                </div>
                <div class="input">
                  <input type="text" class="c_green number"  name="" id="" value="158元" />
                </div>
              </li>
            </ul>
          </div>
          <div class="foot foot-fixd">
            <div class="foot-l left">
              合计金额：<strong>¥158</strong>
            </div>
            <div class="foot-r right" @click="goPay">
              <p  class="foot-btn" >立即预约</p>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="shade"></div>
    <div class="section_time">
      <div class="hd">
        <div class="hd-left">
          <a href="#" id="time-off">取消</a>
        </div>
        <div class="hd-mid">
          <p>选择上门时间</p>
        </div>
        <div class="hd-right">
          <a href="#" id="time-open">确认</a>
        </div>
      </div>
      <div class="nav">
        <ul>
          <li>
            <a href="#">
              <p class="time-s">09-16</p>
              <p class="time-x">星期天</p>
            </a>
          </li>
          <li class="on">
            <a href="#">
              <p class="time-s">09-17</p>
              <p class="time-x">星期一</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p class="time-s">09-18</p>
              <p class="time-x">星期二</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p class="time-s">09-19</p>
              <p class="time-x">星期三</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p class="time-s">09-20</p>
              <p class="time-x">星期四</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p class="time-s">09-21</p>
              <p class="time-x">星期五</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p class="time-s">09-22</p>
              <p class="time-x">星期六</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="bd">
        <ul>
          <li><a href="#">9:00</a></li>
          <li><a href="#">9:30</a></li>
          <li><a href="#">10:00</a></li>
          <li><a href="#">10:30</a></li>
          <li><a href="#">11:00</a></li>

          <li><a href="#">11:30</a></li>
          <li><a href="#">12:00</a></li>
          <li class="no-more"><a href="#">约满</a></li>
          <li class="no-more"><a href="#">约满</a></li>
          <li><a href="#">13:00</a></li>

          <li><a href="#">13:30</a></li>
          <li class="no-more"><a href="#">约满</a></li>
          <li class="on"><a href="#">14:00</a></li>
          <li><a href="#">14:30</a></li>
          <li><a href="#">15:00</a></li>

          <li><a href="#">15:30</a></li>
          <li><a href="#">16:00</a></li>
          <li><a href="#">16:30</a></li>
          <li><a href="#">17:00</a></li>
          <li class="no-more"><a href="#">约满</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import District from 'ydui-district/dist/jd_province_city_area_id';
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Service',
    data () {
      return {
        logonData: {},
        show1: false,
        replacetype: 0,
        guestphone: '15025154119',
        address: 'fffff',
        times: '2018-11-12',
        remarks: 'ffff',
        coupon: 0,
        servicenum: 1,
        input6:'',
        input4:'',
         model1: '',
        district: District,
        datetime6: '2017-05-11',
        yearFormat: '<span style="color:#F00;">{value}<i style="font-size: 12px;margin-left: 1px;">年</i></span>',
        monthFormat: '<span style="color:#0BB20C;">{value}<i style="font-size: 12px;margin-left: 1px;">月</i></span>',
        dayFormat: '<span style="color:#FFB400;">{value}<i style="font-size: 12px;margin-left: 1px;">日</i></span>'
      }
    },
    methods: {
      result1(ret) {
        this.model1 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
      },
      goPay() {
        this.submit()

      },
      goCoupon(){
        this.$router.push({path: '/coupon'})
      },
      prev(){
        this.$router.go(-1)
      },
      submit(){
        let self = this
        let paramts = {
          technicianid: 1,
          serviceid: 2,
          replaceType: self.replacetype,
          guestPhone: self.guestphone,
          serviceAddress: self.address,
          serviceTime: self.times,
          remarks: self.remarks,
          couponId: self.coupon,
          serviceNum: self.servicenum
        }
        self.$http.post('/api/creatServiceOrder',paramts,{ emulateJSON: true })
          .then(function (response) {
            console.log(JSON.stringify(response))
            this.$router.push({path: '/pay'})
            if (response.data.data) {
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
    },
    mounted: function () {},
    components: {
      FooterBar,
      TopBar
    }
  }
</script>
<style lang="scss" scoped>
  .servf .body ul li{
    height: auto !important;
  }
  .home-box {
    /*margin-top:45px;*/
    background-image:none;
    height: auto;
    min-height: 100%;
    width: 100%;
  }
  .act-box1{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 15px;
    border-top:1px solid #e0e0e0;
    border-bottom:1px solid #e0e0e0;
    margin-top:10px;
    background: #fff;

  }
  .act-text{
    font-size: 16px;color: #333
  }
  .act-text2{
    font-size: 14px;color: #999
  }
  .act-text1{
    border:1px solid #e0e0e0;
    padding: 5px 15px;
    margin: 0;
    font-size: 16px;
    border-radius: 6px;
    margin-right: 5px;
    background: rgb(242,242,242);
  }
  .pol-content{
    height: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    background: rgb(246,246,246);
    margin-top: 15px;
  }
  .pol-content p{
    line-height: 30px;
    color: #333;
    font-size: 16px;

  }
  .appoin-box{
    height: auto;
    padding: 15px 65px;
    background: rgb(242,242,242);
    border:1px solid #e0e0e0;
    border-radius: 25px;
    margin-bottom: 5px;
  }
  .appoin-box p {
    font-size: 14px;
    color: #333;
    text-align: center;
  }
  .pro-bottom{
    height: auto;
    line-height: 35px;
    width: 65%;
    margin: auto;
    border-radius: 35px;
    padding: 10px;
    position: fixed;
    bottom: 10px;
    background: #6f7180;
    left: 17.5%;
    z-index: 100;
  }
  .pro-bottom p{
    text-align: center;
    color: #ffffff;
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
  .box-imgb{
    width:50px;
    height: 60px;
    border: 1px solid #999;
    margin-right: 15px;
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
    line-height: 60px;
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

