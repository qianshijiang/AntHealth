<template>
    <div class="layout">
      <div class="loginpage">
        <div class="head">
          <img src="../../assets/imgs/logo_1.png"/>
        </div>
        <div class="body">
          <form action="" method="post">
            <ul>
              <li>
                <label>
                  <img src="../../assets/imgs/img13.png"/>
                </label>
                <input type="text" class="txt" v-model="logonForm.name" placeholder="请输入手机号" @change="checkName"/>
              </li>
              <p class="messagesty">{{messagename}}</p>
              <li>
                <label>
                  <img src="../../assets/imgs/img36.png"/>
                </label>
                <input type="text" v-model="logonForm.pwd" class="txt" placeholder="请输入密码" v-if="seePwdModel" @change="checkPwd"/>
                <input type="password" v-model="logonForm.pwd" class="txt" placeholder="请输入密码" v-else @change="checkPwd"/>
                <button type="button" class="eye" :class="{'eye-on':!seePwdModel}" @click="displayorHidePwd"></button>
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
        this.$dialog.loading.open('登录中...')
          self.$http.post('/healthymvc/login', params,{ emulateJSON: true })
            .then(function (response) {
              this.$dialog.loading.close()
              if (response.data.status === true) {
                localStorage.setItem('token', response.data.data.token)
                localStorage.setItem('avatar_url', response.data.data.avatar_url)
                localStorage.setItem('display_name', response.data.data.display_name)
                localStorage.setItem('address', response.data.data.address)
                localStorage.setItem('phone', response.data.data.phone)
                localStorage.setItem('data', JSON.stringify(response.data.data))
                localStorage.setItem('parksid', response.data.data.parksid)
                localStorage.setItem('communityid', response.data.data.communityid)
                localStorage.setItem('commaddress', response.data.data.communityaddress)
                localStorage.setItem('parkaddress', response.data.data.parksaddress)
                if(this.$route.query.url == 'aidcardt'){
                  setTimeout(self.$router.replace({path: '/aidcardt'}),3000)
                }
                else if(this.$route.query.url == 'service'){
                  setTimeout(self.$router.replace({path: '/service'}),3000)
                }
                else if(this.$route.query.url == 'activdetail'){
                  setTimeout(self.$router.replace({path: '/activ'}),3000)
                }
                else if(this.$route.query.url == 'appointment'){
                  setTimeout(self.$router.replace({path: '/service'}),3000)
                }
                else if(this.$route.query.url == 'addressmanage'){
                  setTimeout(self.$router.replace({path: '/addressmanage'}),3000)
                }
                else if(this.$route.query.url == 'addressmanage1'){
                  setTimeout(self.$router.replace({path: '/addressmanage1'}),3000)
                }
                else if(this.$route.query.url == 'addressmanage2'){
                  setTimeout(self.$router.replace({path: '/addressmanage2'}),3000)
                }
                else if(this.$route.query.url == 'aidcard'){
                  setTimeout(self.$router.replace({path: '/aidcard'}),3000)
                }
                else if(this.$route.query.url == 'myinfo'){
                  setTimeout(self.$router.replace({path: '/myinfo'}),3000)
                }
                else if(this.$route.query.url == 'updatephone'){
                  setTimeout(self.$router.replace({path: '/updatephone'}),3000)
                }
                else if(this.$route.query.url == 'aidorder'){
                  setTimeout(self.$router.replace({path: '/aidorder'}),3000)
                }
                else if(this.$route.query.url == 'integral'){
                  setTimeout(self.$router.replace({path: '/integral'}),3000)
                }
                else if(this.$route.query.url == 'integraldetail'){
                  setTimeout(self.$router.replace({path: '/integraldetail'}),3000)
                }
                else if(this.$route.query.url == 'pay'){
                  setTimeout(self.$router.replace({path: '/pay'}),3000)
                }
                else if(this.$route.query.url == 'serviceorder'){
                  setTimeout(self.$router.replace({path: '/serviceorder'}),3000)
                }
                else if(this.$route.query.url == 'areas'){
                  setTimeout(self.$router.replace({path: '/areas'}),3000)
                }
                else if(this.$route.query.url == 'activeorder'){
                  setTimeout(self.$router.replace({path: '/activeorder'}),3000)
                }
                else if(this.$route.query.url == 'activeorderdetail'){
                  setTimeout(self.$router.replace({path: '/activeorderdetail',query:{item:this.$route.query.item}}),3000)
                }
                else if(this.$route.query.url == 'activedetail'){
                  setTimeout(self.$router.replace({path: '/activedetail',query:{id:this.$route.query.id}}),3000)
                }
                else {
                  self.$router.replace({path: '/my'})
                }
              }else{
                this.$dialog.toast({
                  mes: response.data.msg,
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
