<template>
  <el-container>
    <el-main>
      <div class="logon-panel">
        <el-form :model="logonForm" :rules="rules" ref="logonForm" :label-position="'left'" label-width="0" class="logon-form">
          <div class="title">蚂蚁健康</div>
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
              <yd-sendcode class="sendcode" slot="right"
                           v-model="codeStart"
                           init-str="点击获取"
                           @click.native="getVerificationCode"
                           run-str="{%s}秒"
                           reset-str="重新获取"
              ></yd-sendcode>
            </div>
          </el-form-item>
          <el-form-item label="" prop="pwd" class="paswtop" v-if="seePwdModel">
            <div class="paswicon">
              <img src="../../assets/image/u18.svg"/>
              <el-input type="text" class="passwordinput" v-model="logonForm.pwd" placeholder="设置登录密码" maxlength="20" auto-complete="true"></el-input>
              <div>
                <yd-switch v-model="switchModel" size="normal" color="rgb(158, 158, 158)" :callback="displayorHidePwd"></yd-switch>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="" prop="pwd" class="paswtop" v-else>
            <div class="paswicon">
              <img src="../../assets/image/u18.svg"/>
              <el-input type="password" class="passwordinput" v-model="logonForm.pwd" placeholder="设置登录密码" maxlength="20" auto-complete="true"></el-input>
              <div>
                <yd-switch v-model="switchModel" size="normal" color="rgb(158, 158, 158)" :callback="displayorHidePwd"></yd-switch>
              </div>
            </div>
          </el-form-item>
          <div class="agreement">
            <yd-checkbox v-model="radioAgreement" color="rgb(158, 158, 158)" :change="isAgreement" shape="circle">已阅读并同意</yd-checkbox>
            <a href="###" >《用户服务协议》</a>
          </div>
          <el-form-item class="logintop">
            <el-button type="primary" @click="register" :disabled=isSubmit>确认</el-button>
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
  import {CheckBox, CheckBoxGroup} from 'vue-ydui/dist/lib.rem/checkbox';

  Vue.component(Button.name, Button);
  Vue.component(Switch.name, Switch);
  Vue.component(CheckBox.name, CheckBox);
  Vue.component(CheckBoxGroup.name, CheckBoxGroup);
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
        switchModel: false, //按钮开关控制
        codeStart:false,//控制发送验证码
        seePwdModel:false, //密码显示隐藏控制
        radioAgreement:true, //是否同意协议
        isSubmit:false,//控制提交按钮
      }
    },
    methods: {
      register: function () {
        this.$refs['logonForm'].validate((valid) => {
          if (valid) {
            let self = this;
            let params = {
              'name': this.logonForm.name,
              'pwd': this.logonForm.pwd,
              'codeVal':this.logonForm.codeVal
            };
            localStorage.setItem("token", 'hhhhh');
            self.$router.replace({path: '/my'});
            self.$http.post('/api/mobileLogin/login', params)
              .then(function (response) {
                console.log(JSON.stringify(response));
                if (response.data.result) {
                  localStorage.setItem('token', response.data.result.mobileToken);
                  // sessionStorage.setItem('setLogonData', JSON.stringify(response.data.result));
                  self.$router.replace({path: '/my'})
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
        let self = this;
        let params = {
          'height': 30,
          'lineSize': 60,
          'stringNum': 4,
          'width': 80
        };
        self.$http.post('/staff/idyCodeImg', params)
          .then(function (res) {
            self.codeImg = res.data.data.image;
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
          //this.getcode()
          this.$dialog.toast({
            mes: "已发送",
            icon: "success",
            timeout: 1500
          });
        }, 1000)
      },
      //是否同意协议
      isAgreement(){
          if(this.radioAgreement){
            this.isSubmit=true;
          }else{
            this.isSubmit=false;
          }
      },
    },
    mounted: function () {
      // this.getCodeImg()
    }
  }
</script>
<style>

</style>
<style lang="scss" scoped>
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
    color: #333;
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
    color: #333;
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
    color: #333;
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
  .yd-checkbox-text{
    font-size: 14px;
    color: #999;
  }
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
      .usernametop,.paswtop,.codeinputtop{
        box-sizing: border-box;
        border-width: 0px;
        border-bottom-width: 1px;
        border-style: solid;
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
          .sendcode {
            width: 88px;
            height: 28px;
            background: rgb(158, 158, 158);
            border-radius: 14px;
            font-size: 12px;
          }
        }
      }
      .agreement{
        text-align: left;
        margin: 22px 0px;
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
