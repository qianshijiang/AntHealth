<template>
  <el-container>
    <el-main>
      <div class="logon-panel">
        <el-form :model="logonForm" :rules="rules" ref="logonForm" :label-position="'left'" label-width="0" class="logon-form">
          <div class="title">蚂蚁健康</div>
          <el-form-item label="" prop="name" class="usernametop">
            <div class="usernameicon">
              <img src="../../assets/image/u19.svg" />
              <el-input type="number" class="usernameinput" v-model.number="logonForm.name" placeholder="手机号码" maxlength="11" auto-complete="true"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="" prop="pwd" class="paswtop" v-if="seePwdModel">
            <div class="paswicon">
              <img src="../../assets/image/u18.svg"/>
              <el-input type="text" class="passwordinput" v-model="logonForm.pwd" placeholder="登录密码" maxlength="16" auto-complete="true"></el-input>
              <div>
                <yd-switch v-model="switchModel" size="normal" color="rgb(158, 158, 158)" :callback="displayorHidePwd"></yd-switch>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="" prop="pwd" class="paswtop" v-else>
            <div class="paswicon">
              <img src="../../assets/image/u18.svg"/>
              <el-input type="password" class="passwordinput" v-model="logonForm.pwd" placeholder="登录密码" maxlength="16" auto-complete="true"></el-input>
              <div>
                <yd-switch v-model="switchModel" size="normal" color="rgb(158, 158, 158)" :callback="displayorHidePwd"></yd-switch>
              </div>
            </div>
          </el-form-item>
          <div class="forgetpasw" @click="goReg(2)">
            <a href="###" >忘记密码</a>
          </div>
          <el-form-item class="logintop">
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
          <el-form-item>
            <div class="footer">
              <p style="color: #999;" @click="goReg(1)">注册账号</p>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>
<script>
  import validationRules from '../../common/validationRules'
  import Vue from 'vue';
  import {Switch} from 'vue-ydui/dist/lib.rem/switch';
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  Vue.component(Switch.name, Switch);
  export default {
    components: {ElFormItem},
    name: 'Login',
    data () {
      return {
        logonForm: {
          name: '',
          pwd: ''
        },
        rules: {
          name: [
            {required: true,trigger: 'blur',message:'用户名不能为空'},
            {validator: validationRules.validatePhone, trigger: 'blur'}
          ],
          pwd: [
            {required: true,trigger: 'blur',message:'密码不能为空'},
            {validator: validationRules.validatePassword, trigger: 'blur'}
          ]
        },
        switchModel: false, //按钮开关控制
        seePwdModel:false, //密码显示隐藏控制
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
      goReg(v){
        if(v === 1){
          this.$router.push({path: '/register'})
        }
        if(v === 2){
          this.$router.push({path: '/findpwd'})
        }
      },
      getCodeImg () {
        let self = this
        let params = {
          'height': 30,
          'lineSize': 60,
          'stringNum': 4,
          'width': 80
        }
        self.$http.post('/staff/idyCodeImg', params)
          .then(function (res) {
            self.codeImg = res.data.data.image
            self.logonForm.idyKey = res.data.data.idyKey
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      //显示或隐藏密码
      displayorHidePwd(){
          let _this = this;
          if(_this.switchModel){
              _this.seePwdModel = true;
          }else{
            _this.seePwdModel = false;
          }
      }
    },
    mounted: function () {
      // this.getCodeImg()
    }
  }
</script>
<style>
  .usernameicon input{
    outline-color: invert;
    outline-style: none;
    outline-width: 0px;
    border: none;
    border-style: none;
    text-shadow: none;
    -webkit-appearance: none;
    -webkit-user-select: text;
    outline-color: transparent;
    box-shadow: none;
    color: #333 !important;
  }
  .paswicon input{
    outline-color: invert;
    outline-style: none;
    outline-width: 0px;
    border: none;
    border-style: none;
    text-shadow: none;
    -webkit-appearance: none;
    -webkit-user-select: text;
    outline-color: transparent;
    box-shadow: none;
    color: rgb(204, 204, 204);
  }
  a{
    text-decoration:none;
    border-width: 0px;
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    color: #999;
    text-align: right;
    cursor: pointer;
  }
  input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
    background-color: rgb(255, 255, 255) !important;
    background-image: none !important;
    color: rgb(0, 0, 0) !important;
  }
</style>
<style lang="scss" scoped>
  .logo {
    width: 132px;
  }
  .el-header, .el-footer {
    background-color: #EFF4FA;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .el-main {
    background-color: #FFFFFF;
    padding: 0px;
    .logon-panel {
      margin: 80px 188px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .logo-img {
        width: 460px;
        height: 460px;
      }
      .logon-form {
        width: 300px !important;
        .title {
          letter-spacing: 2.4px;
          margin-bottom: 20px;
          font-weight: 400;
          font-style: normal;
          font-size: 42px;
          color: #999;
          text-align:center;
        }
        .code{
          display: flex;
          flex-direction: row;
          img{
            height: 30px;
            width: 80px;
            margin-left: 15px;
            margin-top: 5px;
          }
          span{
            color: #0000ff;
            margin-left: 15px;
            text-decoration:underline;
            cursor:pointer;
          }
        }
      }
      .el-button {
        width: 300px;
        border-radius: 25px;
        border-width: 0px;
        height: 45px;
        font-family: '微软雅黑';
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        color: #FFF;
      }
      .el-form-item{
        margin-bottom: 15px;
      }
      .usernametop,.paswtop{
        box-sizing: border-box;
        border-width: 0px;
        border-bottom-width: 1px;
        border-style: solid;
        border-color: rgba(228, 228, 228, 1);
        .usernameicon,.paswicon{
          display: flex;
          outline-style: none;
          img{
            border-width:0px;
            width: 20px;
            height: 20px;
            margin-top:10px;
          }
        }
        .yd-switch{
          margin-top: 4px;
        }
      }
      .forgetpasw{
        text-align: right;
        margin-bottom: 22px;
      }
      .logintop{
        width:300px;
        .el-button{
          background-color: rgb(158, 158, 158);
        }
      }
      .footer{
        text-align: center;
        a{
          font-size: 16px;
        }
      }
    }
  }
</style>
