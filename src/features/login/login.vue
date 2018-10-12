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
                <input type="text" class="txt" v-model="logonForm.name" placeholder="请输入手机号" @change="checkName"/>
              </li>
              <p class="messagesty">{{messagename}}</p>
              <li>
                <label>
                  <img src="../../../static/imgs/img36.png"/>
                </label>
                <input type="text" v-model="logonForm.pwd" class="txt" placeholder="请输入密码" v-if="seePwdModel" @change="checkPwd"/>
                <input type="password" v-model="logonForm.pwd" class="txt" placeholder="请输入密码" v-else @change="checkPwd"/>
                <button type="button" style="margin-top: 8px;" class="eye" :class="{'eye-on':!seePwdModel}" @click="displayorHidePwd"></button>
              </li>
              <p class="messagesty">{{messagepwd}}</p>
            </ul>
            <div class="fgtpwd" @click="goPage(1)">
              <p style="color: #00CE9F">忘记密码</p>
            </div>
            <div class="submit">
              <div class="logins" @click="login" >登  录</div>
            </div>
            <div class="regbtn" @click="goPage(0)">
              <p style="color: #999">注册账号</p>
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
      goPage(v) {
        if( v === 0 ){
          this.$router.push({path: '/register'})
        }
        if( v === 1 ){
          this.$router.push({path: '/findpwd'})
        }
      },
      login() {
        if(!this.checkName() || !this.checkPwd()){
          return
        }
          let self = this;
          let params = {
            'phone': this.logonForm.name,
            'password': this.logonForm.pwd
          }
          self.$http.post('/api/login', params,{ emulateJSON: true })
            .then(function (response) {
              console.log(JSON.stringify(response))
              if (response.data.status === true) {
                localStorage.setItem('token', response.data.data.token)
                localStorage.setItem('avatar_url', response.data.data.avatar_url)
                localStorage.setItem('display_name', response.data.data.display_name)
                localStorage.setItem('address', response.data.data.address)
                localStorage.setItem('phone', response.data.data.phone)
                localStorage.setItem('data', JSON.stringify(response.data.data))
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
            _this.seePwdModel = false;
        }else{
          _this.seePwdModel = true;
        }
    },
    //名字格式校验
    checkName(){
      if (this.logonForm.name === '') {
        this.messagename='请输入手机号码'
        return false
      }
      else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.logonForm.name)) {
        this.messagename='请输入正确的11位手机号码'
        return false
      }
      else{
        this.messagename = ''
        return true
      }
    },
    //密码格式校验
    checkPwd(){
      if (this.logonForm.pwd === '') {
        this.messagepwd = '请输入密码'
        return false
      }
      else if(!/^[0-9a-zA-Z]{6,20}$/.test(this.logonForm.pwd)){
        this.messagepwd = '密码为6-20位的字母或数字'
        return false
      }
      else{
        this.messagename = ''
        return true
      }
    },
   },
    mounted: function () {}
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
   .logins{
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
   }
</style>
