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
            <label><img src="../../../static/imgs/img13.png"/></label>
            <input type="number" class="txt" v-model="findForm.name" placeholder="请输入手机号" @change="checkName"/>
          </li>
          <p class="messagesty">{{messagename}}</p>
          <li>
            <label><img src="../../../static/imgs/img35.png"/></label>
            <input type="text" style="width: 160px;" class="txt" v-model="findForm.codeVal" placeholder="短信验证码" @change="checkCode"/>
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
            <input type="type" v-model="findForm.pwd" class="txt" placeholder="请输入密码" v-if="seePwdModel" @change="checkPwd"/>
            <input type="password" v-model="findForm.pwd" class="txt" placeholder="请输入密码" v-else @change="checkPwd"/>
            <button type="button" class="eye" :class="{'eye-on':!seePwdModel}" @click="displayorHidePwd"></button>
          </li>
          <p class="messagesty">{{messagepwd}}</p>
        </ul>
        <div class="foot">
          <input type="submit" value="确 认" />
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
      submit: function () {
        this.$refs['findForm'].validate((valid) => {
          if (valid) {
            let self = this
            let params = {
              'name': this.findForm.name,
              'pwd': this.findForm.pwd,
              'codeVal':this.findForm.codeVal
            }
            self.$router.replace({path: '/login'});
            self.$http.post('/api/mobileLogin/login', params)
              .then(function (response) {
                console.log(JSON.stringify(response))
                if (response.data.result) {
                  sessionStorage.setItem('token', response.data.result.mobileToken)
                  sessionStorage.setItem('setLogonData', JSON.stringify(response.data.result))
                  self.$router.replace({path: '/index/staff/list'})
                }
              })
            // .catch(function (error) {
            //   alert(2)
            //   console.log(error)
            // })
          }
        })
      },
      //显示或隐藏密码
      displayorHidePwd(){
        let _this = this;
        if(_this.seePwdModel){
          _this.seePwdModel = false;
        }else{
          _this.seePwdModel = true;
        }
      },
      //名字格式校验
      checkName(){
        if (this.findForm.name === '') {
          this.messagename='请输入手机号码';
        } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.findForm.name)) {
          this.messagename='请输入正确的11位手机号码';
        }else{
          this.messagename = '';
        }
      },
      //密码格式校验
      checkPwd(){
        if (this.findForm.pwd === '') {
          this.messagepwd = '请输入密码';
        } else if(!/^[0-9a-zA-Z]{6,20}$/.test(this.findForm.pwd)){
          this.messagepwd = '密码为6-20位的字母或数字';
        }else{
          this.messagepwd = '';
        }
      },
      //检验验证码
      checkCode(){
        if (this.findForm.codeVal === '') {
          this.messagecode = '验证码不能为空';
        } else if(!/^\d{6}$/.test(this.findForm.codeVal)){
          this.messagecode = '请输入6位验证码';
        } else {
          this.messagecode = '';
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
          //this.getcode()
          this.$dialog.toast({
            mes: "已发送",
            icon: "success",
            timeout: 1500
          });
        }, 1000)

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
    }
    .sendcode {
      width: 48px;
      height: 48px;
      background: rgb(158, 158, 158);
      border-radius: 14px;
      font-size: 12px;
    }
  }
</style>
