<template>
  <div class="layout ">
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
    <div class="paytype">
      <form action="" method="post">
        <div class="head" style="display: none">
          支付剩余时间：<label>12</label><span>:</span><label>00</label>
        </div>
        <div class="body">
          <ul>
            <li>
              <label class="radio_box">
                <div class="img">
                  <img src="../../assets/imgs/img104.png"/>
                </div>
                <div class="txt">
                  微信支付
                </div>
                <div class="chk ">
                  <img @click="payType(2)"  v-if="ptype == 1" src="../../assets/imgs/img30.png"/>
                  <img @click="payType(2)"  v-if="ptype == 2" src="../../assets/imgs/img29.png"/>
                </div>
              </label>

            </li>
            <li>
              <label class="radio_box">
                <div class="img">
                  <img src="../../assets/imgs/img105.png"/>
                </div>
                <div class="txt">
                  支付宝支付
                </div>
                <div class="chk ">
                  <img @click="payType(1)"  v-if="ptype == 2" src="../../assets/imgs/img30.png"/>
                  <img @click="payType(1)" v-if="ptype == 1" src="../../assets/imgs/img29.png"/>
                </div>
              </label>
            </li>
          </ul>
        </div>
        <div class="foot foot-fixd" @click="submit">
          <p class="foot-btn" style="margin-top: 7px;margin-left: 27%;">确认支付</p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Pay',
    data () {
      return {
        payData: {},
        show2: false,
        ptype: 2,
      }
    },
    methods: {
      goActiveOrder() {
        this.$router.push({path: '/activeorder'})
      },
      payType(v){
        this.ptype = v
      },
      goPayshure() {
        this.$router.push({path: '/paysuccess',query:{type:this.$route.query.type}})
      },
      prev(){
        this.$router.go(-1)
      },
      submit(){
        let self = this
        let paramts = {
          objOrderno : this.$route.query.orderid,
          paytype : this.ptype,
          objType  : this.$route.query.type
        }
        this.$dialog.loading.open('提交中...')
        self.$http.post('/healthymvc/payorder',paramts,{ emulateJSON: true,headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.payData = response.data.data
              window.location.href="https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?prepay_id="+response.data.data.weixingpay.prepayid+"&package="+response.data.data.weixingpay.partnerid
              // this. weixinPay(response.data.data)
            }else{
              this.$dialog.toast({
                mes:  response.data.msg,
                timeout: 1500
              })
            }
          })
          .catch(function (error) {
            this.$dialog.loading.close()
            console.log(error)
          })
      },
      weixinPay:function(data){
        var vm= this;
        if (typeof WeixinJSBridge == "undefined"){//微信浏览器内置对象。参考微信官方文档
          if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', vm.onBridgeReady(data), false);

          }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', vm.onBridgeReady(data));
            document.attachEvent('onWeixinJSBridgeReady',vm.onBridgeReady(data));
          }
        }else{
          vm.onBridgeReady(data)
        }
      },
      onBridgeReady:function(data){
        var  vm = this;
        WeixinJSBridge.invoke(
          'getBrandWCPayRequest',{
            debug:true,
            "appId":data.appid,     //公众号名称，由商户传入
            "timeStamp":data.partnerid, //时间戳，自1970年以来的秒数
            "nonceStr":data.noncestr, //随机串
            "package":data.package_ss,
            "signType":"MD5", //微信签名方式：
            "paySign":data.sign, //微信签名
            //这里的信息从后台返回的接口获得。
            jsApiList: [
              'chooseWXPay'
            ]
          },
          function(res){
            // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
            if(res.err_msg == "get_brand_wcpay_request:ok" ){
              if(vm.fromRoute == 'personal'){
                window.location.href = vm.BASE_URL + 'index.html#/depositResult'
              }else {
                vm.confirmTry()
              }
            }else{
              alert("取消支付！")
            }
          }
        )
      },
      submits(){
        let self = this
        let paramts = {
          objOrderno : this.$route.query.orderid,
          paytype : this.ptype,
          objType  : this.$route.query.type
        }
        this.$dialog.loading.open('支付中...')
        self.$http.post('/healthymvc/payover',paramts,{ emulateJSON: true,headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.payData = response.data.data
              // this.goPayshure()
            }else{
              this.$dialog.toast({
                mes:  response.data.msg,
                timeout: 1500
              })
            }
          })
          .catch(function (error) {
            this.$dialog.loading.close()
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
  .home-box {
    /*margin-top:45px;*/
    height: auto;
    /*min-height: 100%;*/
    width: 100%;
  }
  .product-box{
    height: auto;
    width: 90%;
    margin: 0 auto;
    background: #ffffff;
    padding: 20px;
    margin-top: 10px;
    display: flex;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
  }
  .pay-box1{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    width: 100%;
    padding: 15px 0;

  }
  .pay-text{
    height: 25px;
    width: 100px;
    background: #ffffff;
    position: absolute;
    top: -10px;
    color: #999;
    font-size: 16px;
    text-align: center;
  }
  .pay-text1{
    font-size: 14px;
    color: #999;
  }
  .for-box{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    border-top: 1px solid #e0e0e0;
    align-items: center;
    position: relative;
    top: 0;

  }
  .pay-box2{
    height: auto;
    padding: 15px 0;
    background: rgb(242,242,242);
    border: 1px solid #e0e0e0;
    border-radius: 8px;
  }
  .pay-box2 p{
    font-size: 14px;
    color: #333;
    text-align: center;
  }
  .or-box{
    height: 250px;
    width: 220px;
    margin: 5px auto;
    background: #e0e0e0;
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
    background: #6f7180;
    margin-top:15px;
    margin-bottom: 15px;
  }
  .pro-bottom p{
    text-align: center;
    color: #ffffff;
    font-size: 16px;
  }
  .pol-content1{
    height: 25px;
    padding: 0 8px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    margin-right: 8px;
    background: rgb(242,242,242);
    line-height: 25px;
  }
  .pol-content1 p {
    font-size: 12px;
    text-align: center;
    color: #333;
  }
  .box-content1 div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .box-top{
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
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
  .se-title4{
    font-size: 16px;
    color: #666;
    line-height: 35px;
  }
</style>

