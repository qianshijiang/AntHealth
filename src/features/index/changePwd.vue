<template>
  <div class="change-pwd">
    <el-dialog title="修改密码" width="350px" :visible.sync="isShow" @close="cancel" :close-on-click-modal="false">
      <el-form :model="changeForm" size="mini" :rules="rules" ref="changeForm" :label-position="'left'">
        <el-form-item label="原密码" :label-width="formLabelWidth" prop="oldPwd">
          <el-input type="password" v-model="changeForm.oldPwd"></el-input>
        </el-form-item>
        <el-form-item label="新密码" :label-width="formLabelWidth" prop="newPwd">
          <el-input type="password" v-model="changeForm.newPwd"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" :label-width="formLabelWidth" prop="confirmPwd">
          <el-input type="password" v-model="changeForm.confirmPwd"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" @click="cancel">取 消</el-button>
        <el-button type="primary" size="mini" @click="changePwd">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
  export default {
    name: 'ChangePwd',
    props: ['showChangePwdPanel'],
    data () {
      let validateOldPwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入原始密码'))
        } else if (!/[0-9]+/.test(value) || !/[a-zA-Z]+/.test(value) || !/^[0-9a-zA-Z]{6,}$/.test(value)) {
          callback(new Error('密码由字母和数字组成，至少6位'))
        } else {
          callback()
        }
      }
      let validateNewPwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'))
        } else if (!/[0-9]+/.test(value) || !/[a-zA-Z]+/.test(value) || !/^[0-9a-zA-Z]{6,}$/.test(value)) {
          callback(new Error('密码由字母和数字组成，至少6位'))
        } else {
          if (this.changeForm.confirmPwd !== '') {
            this.$refs.changeForm.validateField('confirmPwd')
          }
          callback()
        }
      }
      let validateConfirmPwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入新密码'))
        } else if (value !== this.changeForm.newPwd) {
          callback(new Error('两次新密码输入不一致!'))
        } else {
          callback()
        }
      }
      return {
        changeForm: {
          oldPwd: '',
          newPwd: '',
          confirmPwd: ''
        },
        formLabelWidth: '85px',
        isShow: this.showChangePwdPanel,
        rules: {
          oldPwd: [
            { validator: validateOldPwd, trigger: 'change' }
          ],
          newPwd: [
            { validator: validateNewPwd, trigger: 'change' }
          ],
          confirmPwd: [
            { validator: validateConfirmPwd, trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      changePwd () {
        let self = this
        this.$refs['changeForm'].validate((valid) => {
          if (valid) {
            let params = {
              oldPassword: self.changeForm.oldPwd,
              password: self.changeForm.newPwd,
              token: {
                value: sessionStorage.getItem('token')
              }
            }
            this.$http.post('/index/updatemypw', params)
              .then(function (res) {
                self.cancel()
                self.$message({
                  type: 'success',
                  message: '密码修改成功,请重新登录!'
                })
                sessionStorage.clear()
                self.$router.replace({path: '/logon'})
              })
              .catch(function (error) {
                console.log(error)
              })
          }
        })
      },
      cancel () {
        this.$refs['changeForm'].resetFields()
        this.isShow = false
        this.$emit('update:showChangePwdPanel', this.isShow)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
