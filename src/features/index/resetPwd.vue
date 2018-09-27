<template>
  <div class="change-pwd">
    <el-dialog title="重置密码" width="350px" :visible.sync="isShow" @close="cancel" :close-on-click-modal="false" :show-close="false">
      <el-form :model="resetForm" size="mini" :rules="rules" ref="resetForm" :label-position="'left'">
        <el-form-item label="原密码" :label-width="formLabelWidth" prop="oldPwd">
          <el-input type="password" v-model="resetForm.oldPwd"></el-input>
        </el-form-item>
        <el-form-item label="新密码" :label-width="formLabelWidth" prop="newPwd">
          <el-input type="password" v-model="resetForm.newPwd"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" :label-width="formLabelWidth" prop="confirmPwd">
          <el-input type="password" v-model="resetForm.confirmPwd"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" @click="cancel">取 消</el-button>
        <el-button type="primary" size="mini" @click="resetPwd">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
  export default {
    name: 'ResetPwd',
    props: ['showResetPwdPanel'],
    data () {
      let validateOldPwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入原始密码'))
        }
        else {
          callback()
        }
      }
      let validateNewPwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'))
        } else if (!/[0-9]+/.test(value) || !/[a-zA-Z]+/.test(value) || !/^[0-9a-zA-Z]{6,}$/.test(value)) {
          callback(new Error('密码由字母和数字组成，至少6位'))
        } else {
          if (this.resetForm.confirmPwd !== '') {
            this.$refs.resetForm.validateField('confirmPwd')
          }
          callback()
        }
      }
      let validateConfirmPwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入新密码'))
        } else if (value !== this.resetForm.newPwd) {
          callback(new Error('两次新密码输入不一致!'))
        } else {
          callback()
        }
      }
      return {
        resetForm: {
          oldPwd: '',
          newPwd: '',
          confirmPwd: ''
        },
        formLabelWidth: '85px',
        isShow: this.showResetPwdPanel,
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
      resetPwd () {
        let self = this
        this.$refs['resetForm'].validate((valid) => {
          if (valid) {
            let params = {
              oldPassword: self.resetForm.oldPwd,
              password: self.resetForm.newPwd,
              token: {
                value: sessionStorage.getItem('token')
              }
            }
            this.$http.post('/index/updatemypw', params)
              .then(function (res) {
                self.cancel()
                self.$message({
                  type: 'success',
                  message: '密码重置成功,请重新登录!'
                })
              })
              .catch(function (error) {
                console.log(error)
              })
          }
        })
      },
      cancel () {
        sessionStorage.clear()
        this.$router.replace({path: '/logon'})
      }
    },
    mounted: function () {
      this.$message({
        type: 'info',
        message: '第一次登录系统请重置密码!'
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
