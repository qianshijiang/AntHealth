<template>
  <div class="layout">
    <div class="header">
      <div class="left">
        <a href="#/login" class="back"></a>
      </div>
      <div class="center">
        <p>重置密码</p>
      </div>
      <div class="right">
      </div>
    </div>
    <div class="rstpwd">
      <form action="" method="post">
        <ul>
          <li>
            <label><img src="../../assets/imgs/img13.png"/></label>
            <input type="number" style="width:120px;" class="txt" v-model="findForm.name" placeholder="请输入手机号" @blur="checkName"/>
            <p class="messagesty">{{messagename}}</p>
          </li>
          <li>
            <label><img src="../../assets/imgs/img35.png"/></label>
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

          <li>
            <label><img src="../../assets/imgs/img36.png"/></label>
            <input type="type" v-model="findForm.pwd" style="width: 120px;" class="txt" placeholder="请输入密码" v-if="seePwdModel" @blur="checkPwd"/>
            <input type="password" v-model="findForm.pwd" style="width: 120px;" class="txt" placeholder="请输入密码" v-else @blur="checkPwd"/>
            <button type="button" class="eye" :class="{'eye-on':!seePwdModel}" @click="displayorHidePwd"></button>
            <p class="messagesty">{{messagepwd}}</p>
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
          name: '',
          pwd: '',
          codeVal: '',
        },
        switchModel: false, //按钮开关控制
        codeStart:false,//控制发送验证码
        seePwdModel:true, //密码显示隐藏控制
        isSubmit:false,//控制提交按钮
        messagename: '', //用户名校验
        messagepwd:'',//密码校验
        messagecode:'',//验证码校验
      }
    },
    methods: {
      submit () {
        let self = this
        if(!this.checkName() || !this.checkPwd || !this.checkCode){
          return
        }
        let params = {
          'phone': this.findForm.name,
          'password': this.findForm.pwd,
          'code':this.findForm.codeVal
        }
        this.$dialog.loading.open('提交中...')
        self.$http.post('/healthymvc/retrieve', params,{ emulateJSON: true })
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status === true) {
              // sessionStorage.setItem('token', response.data.result.mobileToken)
              // sessionStorage.setItem('setLogonData', JSON.stringify(response.data.result))
              self.$router.replace({path: '/login'})
            }else{
              this.$dialog.toast({
                mes: response.body.msg,
                timeout: 1500
              })
            }
          })
        .catch(function (error) {
          this.$dialog.loading.close()
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
        if (this.findForm.name === '') {
          this.messagename='请输入手机号码'
          return false
        } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.findForm.name)) {
          this.messagename='请输入正确的11位手机号码'
          return false
        }else{
          this.messagename = ''
          return true
        }
      },
      //密码格式校验
      checkPwd(){
        if (this.findForm.pwd === '') {
          this.messagepwd = '请输入密码'
          return false
        } else if(!/^[0-9a-zA-Z]{6,20}$/.test(this.findForm.pwd)){
          this.messagepwd = '密码为6-20位的字母或数字'
          return false
        }else{
          this.messagepwd = ''
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
          this.messagecode = ''
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
            "/healthymvc/setsms",
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
