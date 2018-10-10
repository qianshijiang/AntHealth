<template>
    <div class="layout">
      <div class="loginpage">
        <div class="head">
          <img src="../../assets/image/logo_1.png"/>
        </div>
        <div class="body">
          <form action="" method="post">
            <ul>
              <li>
                <label>
                  <img src="../../assets/image/img13.png"/>
                </label>
                <input type="text" class="txt" name="" id="" value="" placeholder="请输入手机号"/>
              </li>
              <li>
                <label>
                  <img src="../../assets/image/img36.png"/>
                </label>
                <input type="password" class="txt" name="" id="pass-id" value="" placeholder="请输入密码"/>
                <button type="button" class="eye " id="eye"></button>
              </li>
            </ul>
            <div class="fgtpwd">
              <a href="#">忘记密码</a>
            </div>
            <div class="submit">
              <input type="submit" name="" id="" value="登  录" />
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
 <!-- <el-container>
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
              <el-input type="text" class="passwordinput" v-model="logonForm.pwd" placeholder="登录密码" maxlength="20" auto-complete="true"></el-input>
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
            <p style="font-size: 14px;color: #999;">忘记密码</p>
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
  </el-container>-->
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
        /*logonForm: {
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
        seePwdModel:false, //密码显示隐藏控制*/
      }
    },
    methods: {
      /*login() {
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
          this.$router.replace({path: '/register'})
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
      }*/
    },
    mounted: function () {
      // this.getCodeImg()
    }
  }
</script>
<style lang="scss" scoped>

</style>
