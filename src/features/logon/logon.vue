<template>
  <el-container>
    <el-main>
      <div class="logon-panel">
        <el-form :model="logonForm" :rules="rules" ref="logonForm" :label-position="'left'" label-width="0" class="logon-form">
          <div class="title">杨大翠想要干啥你。。。。。。</div>
          <el-form-item label="" prop="staffId">
            <el-input type="text" v-model="logonForm.name" placeholder="请输入帐号" maxlength="18"></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input type="password" v-model="logonForm.pwd" placeholder="请输入密码" maxlength="20"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="logon">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
    <el-footer>
      我是你大爷七千
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
      logon: function () {
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
          font-size: 22.4px;
          color: #333333;
          letter-spacing: 2.4px;
          margin-bottom: 20px;
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
    }
  }
</style>
