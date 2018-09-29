<template>
  <el-container>
    <el-main>
      <div class="logon-panel">
        <el-form :model="logonForm" :rules="rules" ref="logonForm" :label-position="'left'" label-width="0" class="logon-form">
          <div class="changepwdtop">
            <yd-navbar title="重置密码" bgcolor="rgb(242, 242, 242)" height="60px" fontsize="20px">
              <router-link to="#" slot="left">
                <yd-navbar-back-icon></yd-navbar-back-icon>
              </router-link>
            </yd-navbar>
          </div>
          <el-form-item label="" prop="name" class="usernametop">
            <div class="usernameicon">
              <img src="../../assets/image/u64.svg" />
              <el-input type="number" class="usernameinput" v-model.number="logonForm.name" placeholder="输入手机号码" maxlength="11" auto-complete="true"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="" prop="codeVal" class="codeinputtop">
            <div class="codeinputicon">
              <img src="../../assets/image/u65.svg" />
              <el-input type="text" class="codeinput" v-model="logonForm.codeVal" placeholder="短信验证码" maxlength="6" auto-complete="true"></el-input>
              <div>
                <yd-button type="primary" color="#999">发送验证码</yd-button>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="" prop="pwd" class="paswtop">
            <div class="paswicon">
              <img src="../../assets/image/u18.svg"/>
              <el-input type="password" class="passwordinput" v-model="logonForm.pwd" placeholder="设置新的登录密码" maxlength="16" auto-complete="true"></el-input>
              <div>
                <yd-switch v-model="switchModel" size="normal" color="rgb(158, 158, 158)"></yd-switch>
              </div>
            </div>
          </el-form-item>
          <el-form-item class="logintop">
            <el-button type="primary" @click="register">确认</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>
<script>
  import validationRules from '../../common/validationRules'
  import Vue from 'vue';
  import {Button, ButtonGroup} from 'vue-ydui/dist/lib.rem/button';
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  import {Switch} from 'vue-ydui/dist/lib.rem/switch';
  import {NavBar, NavBarBackIcon, NavBarNextIcon} from 'vue-ydui/dist/lib.rem/navbar';

  Vue.component(NavBar.name, NavBar);
  Vue.component(NavBarBackIcon.name, NavBarBackIcon);
  Vue.component(Button.name, Button);
  Vue.component(Switch.name, Switch);
  export default {
    components: {ElFormItem},
    name: 'Register',
    data () {
      return {
        logonForm: {
          name: '',
          pwd: '',
          codeVal: '',
        },
        rules: {
          name: [
            {required: true,trigger:'blur',message:'用户名不能为空'},
            {validator: validationRules.validatePhone, trigger: 'blur'}
          ],
          codeVal: [
            {required: true,trigger:'blur',message:'验证码不能为空'},
            {validator: validationRules.VerificationCode, trigger: 'blur'}
          ],
          pwd:[
            {required: true,trigger: 'blur',message:'密码不能为空'},
            {validator: validationRules.validatePassword, trigger: 'blur'}
          ]
        },
        switchModel: false,
        radioAgreement:['1'],
      }
    },
    methods: {
      register: function () {
        this.$refs['logonForm'].validate((valid) => {
          if (valid) {
            let self = this
            let params = {
              'name': this.logonForm.name,
              'pwd': this.logonForm.pwd,
              'codeVal':this.logonForm.codeVal
            }
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
      }
    },
    mounted: function () {
      alert(1)
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
    color: rgb(204, 204, 204);
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
  .codeinputicon input{
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
      margin: 20px 200px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .logo-img {
        width: 460px;
        height: 460px;
      }
      .logon-form {
        width: 350px !important;
        .changepwdtop {
          letter-spacing: 2.4px;
          height:60px;
          text-align:center;
          width:90%;
          margin-top: 0px;
          margin-bottom: 30px;
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
        width: 350px;
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
      .usernametop,.paswtop,.codeinputtop{
        box-sizing: border-box;
        border-width: 0px;
        border-bottom-width: 1px;
        border-style: solid;
        width: 90%;
        border-color: rgba(228, 228, 228, 1);
        .usernameicon,.paswicon,.codeinputicon{
          display: flex;
          outline-style: none;
          img{
            border-width:0px;
            width: 20px;
            height: 20px;
            margin-top:10px;
          }
          .yd-btn{
            background-color: #FFFFFF;
            cursor: pointer;
          }
          .yd-switch{
            margin-top: 4px;
          }
        }
      }
      .agreement{
        width: 90%;
        text-align: left;
        margin-bottom: 22px;
      }
      .logintop{
        width:350px;
        .el-button{
          width:90%;
          background-color: rgb(158, 158, 158);
          margin-top: 20px;
        }
      }
      .footer{
        width:90%;
        text-align: center;
        a{
          font-size: 16px;
        }
      }
      .agreement{
        margen:30px 0px;
        a{
          font-size: 15px;
          color: #333;
          cursor: pointer;
        }
        .yd-checkbox{
          padding-right: 0px;
        }
      }
    }
  }
</style>
