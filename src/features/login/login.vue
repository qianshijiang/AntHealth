<template>
    <div class="layout">
      <div class="loginpage">
        <div class="head">
          <img src="../../../static/imgs/logo_1.png"/>
        </div>
        <div class="body">
          <form action="" method="post">
            <ul>
              <li>
                <label>
                  <img src="../../../static/imgs/img13.png"/>
                </label>
                <input type="number" class="txt" v-model.number="logonForm.name" placeholder="请输入手机号" @change="checkName"/>
              </li>
              <p class="messagesty">{{messagename}}</p>
              <li>
                <label>
                  <img src="../../../static/imgs/img36.png"/>
                </label>
                <input type="text" v-model="logonForm.pwd" class="txt" placeholder="请输入密码" v-if="seePwdModel" @change="checkPwd"/>
                <input type="password" v-model="logonForm.pwd" class="txt" placeholder="请输入密码" v-else @change="checkPwd"/>
                <button type="button" class="eye" :class="{'eye-on':!seePwdModel}" @click="displayorHidePwd"></button>
              </li>
              <p class="messagesty">{{messagepwd}}</p>
            </ul>
            <div class="fgtpwd">
              <a href="#">忘记密码</a>
            </div>
            <div class="submit">
              <input type="submit" @click="login" value="登  录" />
            </div>
            <div class="regbtn">
              <a href="#">注册账号</a>
            </div>
          </form>
        </div>
        <div class="foot">
          <p>公司版权所有2018-2019</p>
        </div>
      </div>
    </div>
</template>
<script>
  import validationRules from '../../common/validationRules'
  import Vue from 'vue';
  export default {
    name: 'Login',
    data () {
      return {
        logonForm: {
          name: '',
          pwd: ''
        },
        messagename: '', //用户名校验
        messagepwd:'',//密码校验
        seePwdModel:true, //密码显示隐藏控制
      }
    },
    methods: {
      login() {
        this.$refs['logonForm'].validate((valid) => {
          if (valid) {
            let self = this;
            let params = {
              'name': this.logonForm.name,
              'pwd': this.logonForm.pwd
            };
            localStorage.setItem("token", 'hhhhh');
            self.$router.replace({path: '/my'});
            self.$http.post('/index/logon', params)
              .then(function (response) {
                console.log(JSON.stringify(response));
                if (response.data.result) {
                  localStorage.setItem("token", res.body.data.token);
                  self.$router.replace({path: '/index'})
                }
              })
              .catch(function (error) {
                console.log(error)
              })
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
      if (this.logonForm.name === '') {
        this.messagename='请输入手机号码';
      } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.logonForm.name)) {
        this.messagename='请输入正确的11位手机号码';
      }else{
        this.messagename = '';
      }
    },
    //密码格式校验
    checkPwd(){
      if (this.logonForm.pwd === '') {
        this.messagepwd = '请输入密码';
      } else if(!/^[0-9a-zA-Z]{6,20}$/.test(this.logonForm.pwd)){
        this.messagepwd = '密码为6-20位的字母或数字';
      }else{
        this.messagepwd = '';
      }
    },
   },
    mounted: function () {
      // this.getCodeImg()
    }
  }
</script>
<style lang="scss" scoped>
 .body{
   li label img{
     width:31px !important;
   }
   .messagesty{
     font-size: 12px;
     color: red;
   }
 }
</style>
