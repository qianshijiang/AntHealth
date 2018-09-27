<template>
  <el-container>
    <el-main>
      <div class="logon-panel">
        <el-form :model="logonForm" :rules="rules" ref="logonForm" :label-position="'left'" label-width="0" class="logon-form">
          <div class="title">蚂蚁健康</div>
          <el-form-item label="" prop="staffId" class="usernametop">
            <div class="usernameicon">
              <img src="../../assets/image/u19.svg" />
              <el-input type="text" class="usernameinput" v-model="logonForm.name" placeholder="手机号码" maxlength="18"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="" prop="password" class="paswtop">
            <div class="paswicon">
              <img src="../../assets/image/u18.svg"/>
              <el-input type="password" class="passwordinput" v-model="logonForm.pwd" placeholder="登录密码" maxlength="20"></el-input>
              <div class="seepaswicon">
                <div class="seepaswicondv">
                  <div class="text seepaswicondv_text">
                    <div>
                      <img  src="../../assets/image/circular_u26.png">
                      <span>123</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
    <el-footer>
      注册账号
    </el-footer>
  </el-container>
</template>
<script>
  import validationRules from '../../common/validationRules'

  export default {
    name: 'Logon',
    data () {
      return {
        logonForm: {
          name: '',
          pwd: ''
        },
        codeImg: '',
        rules: {
          name: [
            { validator: validationRules.validateStaffId, trigger: 'blur,change' }
          ],
          pwd: [
            { validator: validationRules.validatePassword, trigger: 'blur,change' }
          ]
        }
      }
    },
    methods: {
      login: function () {
        this.$refs['logonForm'].validate((valid) => {
          if (valid) {
            let self = this
            let params = {
              'name': this.logonForm.name,
              'pwd': this.logonForm.pwd
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
    .logon-panel {
      margin: 80px 200px;
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
        .title {
          letter-spacing: 2.4px;
          margin-bottom: 20px;
          font-weight: 400;
          font-style: normal;
          font-size: 42px;
          color: #999999;
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
        width: 350px;
      }
      .usernametop,.paswtop{
        box-sizing: border-box;
        border-width: 0px;
        border-bottom-width: 1px;
        border-style: solid;
        width: 90%;
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
        .seepaswicon{
          height: 25px;
          border-width: 0px;
          margin-top:2px;
          font-size: 12px;
          color: #FFFFFF;
          text-align: left;
          display: flex;
          .seepaswicondv{
            width: 65px;
            height: 30px;
            background-color: rgb(204, 204, 204);
            box-sizing: border-box;
            border-width: 1px;
            border-style: solid;
            border-radius: 20px;
            -moz-box-shadow: none;
            -webkit-box-shadow: none;
            box-shadow: none;
            font-size: 12px;
            color: #FFFFFF;
            text-align: left;
            .seepaswicondv_text{
              div{
                position: relative;
                margin: 0px;
                right: 0;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                span{
                  font-size: 12px;
                  line-height: 30px;
                  margin-right: 8px;
                }
                img{
                  position: absolute;
                  left: 4px;
                  top: -7px;
                  width: 22px;
                  height: 22px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
