<template>
  <div class="layout">
    <div class="loginpage">
      <div class="head">
        <div class="l_back">
          <a href="#/login" class="back"></a>
        </div>
        <img src="../../../static/imgs/logo_1.png"/>
      </div>
      <div class="body">
        <form action="" method="post">
          <ul>
            <li>
              <label><img src="../../../static/imgs/img13.png"/></label>
              <input type="number" class="txt" v-model="logonForm.name" placeholder="请输入手机号" @change="checkName"/>
            </li>
            <p class="messagesty">{{messagename}}</p>
            <li>
              <label><img src="../../../static/imgs/img35.png"/></label>
              <input type="text" style="width: 160px;" class="txt" v-model="logonForm.codeVal" placeholder="短信验证码" @change="checkCode"/>
              <yd-sendcode class="sendcode" slot="right"
                           v-model="codeStart"
                           init-str="点击获取"
                           @click.native="getVerificationCode"
                           run-str="{%s}秒"
                           reset-str="重新获取"
              ></yd-sendcode>
            </li>
            <p class="messagesty">{{messagecode}}</p>
            <li>
              <label><img src="../../../static/imgs/img36.png"/></label>
              <input type="type" v-model="logonForm.pwd" class="txt" placeholder="请输入密码" v-if="seePwdModel" @change="checkPwd"/>
              <input type="password" v-model="logonForm.pwd" class="txt" placeholder="请输入密码" v-else @change="checkPwd"/>
              <button type="button" class="eye" :class="{'eye-on':!seePwdModel}" @click="displayorHidePwd"></button>
            </li>
            <p class="messagesty">{{messagepwd}}</p>
          </ul>
          <div class="submit reg-subm" @click="register">
            <div class="zc">立即注册</div>
          </div>
          <div class="rule">
            <label class="check_box check_box1">
              <input type="checkbox" id="check_1" :checked="radioAgreement" @click.native="isAgreement">
              <label for="check_1"></label>
              <em>已阅读并同意</em>
              <a href="#">《用户服务协议》</a>
            </label>
          </div>
        </form>
      </div>
      <div class="foot reg-f">
        <p>公司版权所有2018-2019</p>
      </div>
    </div>
  </div>
</template>
<script>
  import validationRules from '../../common/validationRules'
  import Vue from 'vue';
  import {SendCode} from 'vue-ydui/dist/lib.rem/sendcode';
  import {CheckBox, CheckBoxGroup} from 'vue-ydui/dist/lib.rem/checkbox';

  Vue.component(SendCode.name, SendCode);
  Vue.component(CheckBox.name, CheckBox);
  export default {
    name: 'Register',
    data () {
      return {
        logonForm: {
          name: '',
          pwd: '',
          codeVal: '',
        },
        switchModel: false, //按钮开关控制
        codeStart:false,//控制发送验证码
        seePwdModel:true, //密码显示隐藏控制
        radioAgreement:true, //是否同意协议
        isSubmit:false,//控制提交按钮
        messagename: '', //用户名校验
        messagepwd:'',//密码校验
        messagecode:''//验证码校验
      }
    },
    methods: {
      register() {
        if(!this.checkName() || !this.checkPwd || !this.checkCode){
          return
        }
        let self = this
        let params = {
          'phone': this.logonForm.name,
          'password': this.logonForm.pwd,
          'code':this.logonForm.codeVal
        }
        self.$http.post('/api/register', params,{ emulateJSON: true })
          .then(function (response) {
            console.log(JSON.stringify(response))
            if (response.data.status === true) {
              localStorage.setItem('token', response.data.data.token)
              localStorage.setItem('setLogonData', JSON.stringify(response.data.data))
              self.$router.replace({path: '/my'})
            }else{
              this.$dialog.toast({
                mes: response.data.msg,
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
      checkName(){
        if (this.logonForm.name === '') {
          this.messagename='请输入手机号码'
          return false
        } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.logonForm.name)) {
          this.messagename='请输入正确的11位手机号码'
          return false
        }else{
          this.messagename = ''
          return true
        }
      },
      //密码格式校验
      checkPwd(){
        if (this.logonForm.pwd === '') {
          this.messagepwd = '请输入密码'
          return false
        } else if(!/^[0-9a-zA-Z]{6,20}$/.test(this.logonForm.pwd)){
          this.messagepwd = '密码为6-20位的字母或数字'
          return false
        }else{
          this.messagename = ''
          return true
        }
      },
      //检验验证码
      checkCode(){
        if (this.logonForm.codeVal === '') {
          this.messagecode = '验证码不能为空'
          return false
        } else if(!/^\d{6}$/.test(this.logonForm.codeVal)){
          this.messagecode = '请输入6位验证码'
          return false
        } else {
          this.messagename = ''
          return true
        }
      },
      //获取验证码
      getVerificationCode() {
        if(!this.logonForm.name){
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
      //是否同意协议
      isAgreement(){
          if(this.radioAgreement){
            this.radioAgreement = false;
            this.isSubmit=true;
          }else{
            this.radioAgreement = true;
            this.isSubmit=false;
          }
      },
    },
    mounted: function () {
      // this.getCodeImg()
    }
  }
</script>
<style lang="scss" scoped>
  li label img{
    width:31px !important;
  }
  .messagesty{
    font-size: 12px;
    color: red;
    margin-top: 7px;margin-bottom: 15px;
    margin-left: 25px;
  }

  .zc{
    display: block;
    background: #00CE9F;
    border-radius: 0.42rem;
    -webkit-border-radius: 0.42rem;
    -moz-border-radius: 0.42rem;
    color: #fff;
    font-size: 0.36rem;
    line-height: 0.88rem;
    text-align: center;
    width: 100%;
    border: none;
  }
  .loginpage .body li{
    margin-bottom: 0;
    height: auto;
  }
  .loginpage .body li button{
    height: 30px;
  }
  .sendcode {
    width: 40px;
    height: 30px;
    background: rgb(158, 158, 158);
    border-radius: 20px;
    font-size: 12px;
    margin-right: 5px;
    margin-top: 7px;
  }
</style>
