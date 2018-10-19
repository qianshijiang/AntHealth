<template>
  <div class="layout  h-bg pb30" style="min-height: auto;">
    <div class="header onetouch-head">
      <div class="left">
        <div @click="prev" class="back"></div>
      </div>
      <div class="center">
        <p>一键急救</p>
      </div>
    </div>
    <div class="onetouch" style="margin-top: .5rem">
      <div class="head" style="border-radius: 6px;">
        <yd-cell-item style="background-color: #fff;border-bottom: 1px solid #e0e0e0;">
          <span slot="left">姓名：</span>
          <yd-input slot="right" v-model="name" required placeholder="请输入姓名"></yd-input>
        </yd-cell-item>
        <yd-cell-item arrow type="label">
          <span slot="left">性别：</span>
          <select slot="right" v-model="gender" required >
            <option value="1">男</option>
            <option value="0">女</option>
          </select>
        </yd-cell-item>
        <yd-cell-item arrow type="label">
          <span slot="left">血型：</span>
          <select slot="right" v-model="blood" required >
            <option value="">请选择血型</option>
            <option value="A">A型</option>
            <option value="AB">AB型</option>
            <option value="B">B型</option>
            <option value="O">O型</option>
          </select>
        </yd-cell-item>
        <yd-cell-item style="background-color: #fff;border-bottom: 1px solid #e0e0e0;">
          <span slot="left">身高：</span>
          <yd-input slot="right" v-model="height" required placeholder="请输入身高"></yd-input>
        </yd-cell-item>
        <yd-cell-item style="background-color: #fff;border-bottom: 1px solid #e0e0e0;">
          <span slot="left">体重：</span>
          <yd-input slot="right" v-model="weight" required placeholder="请输入体重"></yd-input>
        </yd-cell-item>
        <yd-cell-item style="background-color: #fff;border-bottom: 1px solid #e0e0e0;">
          <span slot="left">紧急联系人：</span>
          <yd-input slot="right" v-model="phone" required regex="mobile" placeholder="请输入紧急联系人号码"></yd-input>
        </yd-cell-item>
      </div>

      <div class="body">
        <ul>
          <li>
            <div class="body-hd">
              医疗状况备注
            </div>
            <div class="body-bd">
              <textarea v-model="medical" style="border:0;width: 100%;color: #666;" placeholder="请输入医疗状况备注"></textarea>
            </div>
          </li>
          <li>
            <div class="body-hd">
              过敏反应备注
            </div>
            <div class="body-bd">
              <textarea  v-model="allergy" class="c_red" style="border:0;width: 100%;color: #666;" placeholder="请输入过敏反应备注"></textarea>
            </div>
          </li>
          <li>
            <div class="body-hd">
              在使用的药物
            </div>
            <div class="body-bd">
              <textarea v-model="usedrag" style="border:0;width: 100%;color: #666;" placeholder="请输入在使用的药物"></textarea>
            </div>
          </li>
          <li>
            <div class="body-hd">
              急救地址
            </div>

            <div class="body-bd">
              <textarea v-model="address" style="border:0;width: 100%;color: #666;" placeholder="请输入急救地址"></textarea>
            </div>
          </li>
        </ul>
      </div>
      <div class="foot" @click="submit">
        <a >{{title}}</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Aidcard',
    data () {
      return {
        name: '',
        gender: '1',
        blood: '',
        height: '',
        weight: '',
        phone: '',
        medical: '',
        allergy: '',
        usedrag: '',
        address: '',
        logonData: {},
        title: '保 存',
        aidData:{}
      }
    },
    methods: {
      getInfo(){
        let self = this
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'aidcard'
            }})
          return
        }
        this.$dialog.loading.open('获取中...')
        self.$http.get('/healthymvc/getmyFirstAid',{ emulateJSON: true , headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token") }})
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.aidData = response.data.data
              if(response.data.data == null){
                this.title = '保 存'
              }else {
                if(this.aidData.sex == '男'){
                  this.gender == '1'
                }
                else if(this.aidData.sex == '女'){
                  this.gender == '0'
                }
                else{
                  this.gender = this.aidData.sex
                }
                if(this.aidData.blood == 'A型'){
                  this.blood == 'A'
                }
                else if(this.aidData.blood == 'B型'){
                  this.blood == 'B'
                }
               else  if(this.aidData.blood == 'AB型'){
                  this.blood == 'AB'
                }
                else if(this.aidData.blood == 'O型'){
                  this.blood == 'O'
                }
                else{
                  this.blood = this.aidData.blood
                }
                this.name = this.aidData.name
                this.height = this.aidData.height
                this.weight = this.aidData.weight
                this.phone = this.aidData.sosPhone
                this.medical = this.aidData.medicalRemarks
                this.allergy = this.aidData.allergyRemarks
                this.usedrag = this.aidData.medicine
                this.address = this.aidData.sosAddress
                this.title = '修 改'
              }
            }
            else{
              this.$dialog.toast({
                mes: response.data.msg,
                timeout: 1500
              })
              if(response.data.msg == 'token错误'){
                this.$router.push({path: '/login',query:{url:'aidcard'}})
              }
            }
          })
          .catch(function (error) {
            this.$dialog.loading.close()
            console.log(error)
          })
      },
      submit(){
        let self = this
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'aidcard'
            }})
          return
        }
        if(!this.name || !this.gender || !this.blood || !this.height || !this.weight || !this.phone || !this.medical || !this.allergy
        || !this.usedrag || !this.address){
          this.$dialog.toast({
            mes: '信息未填写完！',
            timeout: 1500
          })
          return
        }
        if(this.gender == '男'){
          this.gender == '1'
        }
        if(this.gender == '女'){
          this.gender == '0'
        }
        if(this.blood == 'A型'){
          this.blood == 'A'
        }
        if(this.blood == 'B型'){
          this.blood == 'B'
        }
        if(this.blood == 'AB型'){
          this.blood == 'AB'
        }
        if(this.blood == 'O型'){
          this.blood == 'O'
        }
        this.$dialog.loading.open('提交中...')
        let paramts = {
          name: this.name,
          sex: this.gender,
          blood : this.blood,
          height : this.height,
          weight : this.weight,
          sosphone : this.phone,
          medicalRemarks : this.medical,
          allergyRemarks : this.allergy,
          medicine : this.usedrag,
          sosaddress : this.address,
        }
        let url = '/healthymvc/insertFirstAid'
        if(this.title == '保 存'){
          url = '/healthymvc/insertFirstAid'
        }
        else if(this.title == '修 改'){
          url = '/healthymvc/upFirstAid'
        }
        self.$http.post(url,paramts,{ emulateJSON: true , headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            this.$dialog.loading.close()
            // if (response.data.status == true) {
              this.$dialog.toast({
                mes: response.data.msg,
                timeout: 1500
              })
            if(response.data.msg == 'token错误'){
              this.$router.push({path: '/login',query:{url:'aidcard'}})
            }
          })
          .catch(function (error) {
            this.$dialog.loading.close()
            console.log(error)
          })
      },
      prev(){
        this.$router.replace({path: '/my'})
      }
    },
    mounted: function () {
      this.getInfo()
    },
  }
</script>
<style lang="scss" scoped>
  .pro-bottom p{
    text-align: center;
    color: #ffffff;
    font-size: 16px;
  }
  span{
    padding-top: 0 !important;
  }
</style>

