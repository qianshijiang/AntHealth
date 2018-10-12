<template>
  <div class="layout">
    <div class="header">
      <div class="left">
        <a href="#/login" class="back"></a>
      </div>
      <div class="center">
        <p>修改手机号</p>
      </div>
      <div class="right">
      </div>
    </div>
    <div class="rstpwd">
      <form action="" method="post">
        <ul>
          <li>
            <label><img src="../../../static/imgs/img13.png"/></label>
            <input type="number" style="width:120px;" class="txt" v-model="findForm.oldphone" placeholder="请输入旧手机号" @blur="checkOldphone"/>
            <p class="messagesty">{{messageoldphone}}</p>
          </li>
          <li>
            <label><img src="../../../static/imgs/img13.png"/></label>
            <input type="number" style="width:120px;" class="txt" v-model="findForm.phone" placeholder="请输入新手机号" @blur="checkPhone"/>
            <p class="messagesty">{{messagephone}}</p>
          </li>
          <li>
            <label><img src="../../../static/imgs/img35.png"/></label>
            <input type="text" style="width: 100px;" class="txt" v-model="findForm.codeVal" placeholder="短信验证码" @blur="checkCode"/>
            <yd-sendcode class="sendcode" slot="right"
                         v-model="codeStart"
                         init-str="点击获取"
                         @click.native="getVerificationCode"
                         run-str="{%s}秒"
                         reset-str="重新获取"
            ></yd-sendcode>
            <p class="messagesty">{{messagecode}}</p>
          </li>
        </ul>
        <div class="foot" @click="submit">
          <div class="find">确 认</div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import validationRules from '../../common/validationRules'
  import Vue from 'vue';
  import {SendCode} from 'vue-ydui/dist/lib.rem/sendcode';

  Vue.component(SendCode.name, SendCode);
  export default {
    name: 'Findpwd',
    data () {
      return {
        findForm: {
          oldphone: '',
          phone: '',
          codeVal: '',
        },
        switchModel: false, //按钮开关控制
        codeStart:false,//控制发送验证码
        seePwdModel:true, //密码显示隐藏控制
        isSubmit:false,//控制提交按钮
        messageoldphone: '', //用户名校验
        messagephone:'',//密码校验
        messagecode:'',//验证码校验
      }
    },
    methods: {
      submit () {
        let self = this
        if(!this.checkOldphone() || !this.checkPhone|| !this.checkCode){
          return
        }
        let params = {
          'oldphone': this.findForm.oldphone,
          'newphone': this.findForm.phone,
          'code':this.findForm.codeVal
        }
        self.$http.post('/api/upphone', params,{ emulateJSON: true , headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            console.log(JSON.stringify(response))
            if (response.data.status === true) {
              localStorage.setItem('phone', response.data.data.phone)
              // sessionStorage.setItem('setLogonData', JSON.stringify(response.data.result))
              // self.$router.replace({path: '/login'})
            }else{
              this.$dialog.toast({
                mes: response.body.msg,
                timeout: 1500
              })
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      //显示或隐藏密码
      displayorHidePwd(){
        let _this = this;
        if(_this.seePwdModel){
          _this.seePwdModel = false
        }else{
          _this.seePwdModel = true
        }
      },
      //名字格式校验
      checkOldphone(){
        if (this.findForm.oldphone === '') {
          this.messageoldphone='请输入旧手机号码'
          return false
        } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.findForm.oldphone)) {
          this.messageoldphone='请输入正确的11位'
          return false
        }else{
          this.messageoldphone = ''
          return true
        }
      },
      //密码格式校验
      checkPhone(){
        if (this.findForm.phone === '') {
          this.messagephone='请输入新手机号码'
          return false
        } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.findForm.phone)) {
          this.messagephone='请输入正确的11位'
          return false
        }else{
          this.messagephone = ''
          return true
        }
      },
      //检验验证码
      checkCode(){
        if (this.findForm.codeVal === '') {
          this.messagecode = '验证码不能为空'
          return false
        } else if(!/^\d{6}$/.test(this.findForm.codeVal)){
          this.messagecode = '请输入6位验证码'
          return false
        } else {
          this.messagename = ''
          return true
        }
      },
      //获取验证码
      getVerificationCode() {
        if(!this.findForm.name){
          this.$dialog.toast({
            mes: "手机号不能为空",
            timeout: 1500
          });
          return
        }
        this.$dialog.loading.open("发送中...");
        setTimeout(() => {
          this.codeStart = true;
          this.$dialog.loading.close();
          this.getcode()
          this.$dialog.toast({
            mes: "已发送",
            icon: "success",
            timeout: 1500
          });
        }, 1000)

      },
      getcode(){
        this.$http
          .post(
            "/api/setsms",
            { phone: this.logonForm.name },
            { emulateJSON: true }
          )
          .then(
            function(res) {
              console.log(res)
              if(res.body.status==true){

              }else{
                this.$dialog.toast({
                  mes: res.body.msg,
                  timeout: 1500
                })
              }
            },
            function(res) {
              console.log(res);
              // 处理失败的结果
            }
          )
      },
    },
    mounted: function () {
      // this.getCodeImg()
    }
  }
</script>
<style lang="scss" scoped>
  .rstpwd{
  li label img{
    width:39px !important;
  }
  .messagesty{
    font-size: 12px;
    color: red;
    /*padding-top: 7px;padding-bottom: 15px;*/
    margin-left: 20px;
    line-height: 48px;
    width:100px;
    float: right;
  }
  .sendcode {
    width: 40px;
    height: 30px;
    background: rgb(158, 158, 158);
    border-radius: 20px;
    font-size: 12px;
    margin-right: 5px;
    margin-top: 10px;
    line-height: 20px;
  }
  .find{
    margin: 0.15rem 0;
    display: inline-block;
    width: 6.9rem;
    line-height: 0.8rem;
    text-align: center;
    color: #fff;
    font-size: 0.32rem;
    background: #00CE9F;
    border-radius: 0.42rem;
    -webkit-border-radius: 0.42rem;
    -moz-border-radius: 0.42rem;
    border: none;
    font-family: PingFangSC-Regular;
  }
  /*.loginpage .body li{*/
  /*margin-bottom: 0;*/
  /*height: auto;*/
  /*}*/
  }
</style>
