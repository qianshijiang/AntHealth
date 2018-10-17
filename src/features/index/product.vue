<template>
  <div class="layout pb120">
    <div class="header">
      <div class="left">
        <div @click="prev" class="back"></div>
      </div>
      <div class="center">
        <p>产品详情</p>
      </div>
    </div>
    <div class="prod">
      <div class="prod-vw">
        <div class="img">
          <yd-slider autoplay="3000" style="width: 100%;height: 230px;" >
            <yd-slider-item v-for="item in detailData.banners" :key="item.id">
              <a :href="item.htmlUrl">
                <img :src="item.imgUrl">
              </a>
            </yd-slider-item>
          </yd-slider>
          <!--<img src="../../assets/imgs/img75.jpg"/>-->
          <!--<img style="width: 100%;height: 230px;" :src="detailData.banners[0].imgUrl"/>-->
        </div>
        <div class="txt">
          <h4>{{detailData.insurance_title}}</h4>
          <p>{{detailData.introduction}}</p>
        </div>
      </div>
      <div class="prod-txt">
        <div class="head">
          投保方案
        </div>
        <div class="body">
          <ul>
            <li>
              <div class="left">保障计划</div>
              <div class="right">{{detailData.insurance_label}}</div>
            </li>
            <li>
              <div class="left">被保人年龄</div>
              <div class="right">{{detailData.insured_age}}</div>
            </li>
            <li>
              <div class="left">保障期间</div>
              <div class="right">{{detailData.guarantee_period}}</div>
            </li>
          </ul>
        </div>
      </div>

      <div class="prod-txt">
        <div class="head">
          保障范围
        </div>
        <div class="body">
          <ul>
            <li v-for="(item,index) in detailData.guarantees" :key="index">
              <div class="left">{{item.insuranceTitle}}</div>
              <div class="right">{{item.insuranceContent}}</div>
            </li>
            <!--<li>-->
              <!--<div class="left">医院范围</div>-->
              <!--<div class="right">二级或二级以上公立医院普通部</div>-->
            <!--</li>-->
          </ul>
        </div>
      </div>

      <div class="prod-tabs">
        <div class="head g-tab-hd">
          <ul>
            <li :class="{'on' : flag === 1}" @click="getclass(1)"><a>产品介绍</a></li>
            <li :class="{'on' : flag === 2}" @click="getclass(2)"><a >保险案例</a></li>
            <li :class="{'on' : flag === 3}" @click="getclass(3)"><a >理赔须知</a></li>
          </ul>
        </div>
        <div class="body g-tab-bd" style="margin-bottom: 60px;">
          <!--<p><img src="../../assets/imgs/img73.jpg"/></p>-->
          <!--<p><img v-show="detailData.htmlurls !== null &&  detailData.htmlurls !== ''" style="height: 220px;width: 100%;" :src="detailData.htmlurls"/></p>-->
          <div  v-show="flag == 1" style="widht:100%;height:100%;word-wrap: break-word">
            <quill-editor ref="myTextEditor" v-model="detailData.insured_introduction" :options = "editorOption"  @change="onEditorChange($event)"></quill-editor>
          </div>
          <div  v-show="flag == 2" style="widht:100%;height:100%;word-wrap: break-word">
            <quill-editor ref="myTextEditor1" v-model="detailData.insured_case" :options = "editorOption"  @change="onEditorChange1($event)"></quill-editor>
          </div>
          <div  v-show="flag == 3" style="widht:100%;height:100%;word-wrap: break-word">
            <quill-editor ref="myTextEditor2" v-model="detailData.insured_notes" :options = "editorOption"  @change="onEditorChange2($event)"></quill-editor>
          </div>
          <!--<div style="overflow: hidden" v-if="flag == 1">{{detailData.insured_introduction}}</div>-->
          <!--<p style="overflow: hidden" v-if="flag == 2">{{detailData.insured_case}}</p>-->
          <!--<p style="overflow: hidden" v-if="flag == 3">{{detailData.insured_notes}}</p>-->
        </div>




      </div>
      <div class="prod-ft" @click="goTou(detailData.htmlurls)">
        <a>立即投保</a>
      </div>
    </div>
  </div>
</template>
<script>
  import {quillEditor} from 'vue-quill-editor'
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'My',
    data () {
      return {
        detailData: {},
        flag: 1,
        editorOption: {
          modules:{
            toolbar:[
              ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
              ['blockquote', 'code-block']
            ]
          }
          // something config
        }
      }
    },
    methods: {
      goTou(url){
        if(url !== null &&  url !== ''){
          window.location.href = url
        }
      },
      getclass(v){
        this.flag = v
        if(v ==2 ){
          this.$refs.myTextEditor1.quill.enable(false)
        }
        else if(v == 3){
          this.$refs.myTextEditor2.quill.enable(false)
        }
        else if(v == 1){
          this.$refs.myTextEditor.quill.enable(false)
        }
      },
      onEditorChange({ editor, html, text }) {
        //富文本编辑器  文本改变时 设置字段值
        this.detailData.insured_introduction = html
      },
      onEditorChange1({ editor, html, text }) {
        //富文本编辑器  文本改变时 设置字段值
        this.detailData.insured_case = html
      },
      onEditorChange2({ editor, html, text }) {
        //富文本编辑器  文本改变时 设置字段值
        this.detailData.insured_notes = html
      },
      prev(){
        this.$router.go(-1)
      },
      getDetail(){
        let self = this
        let paramts = {
          inseranceid : this.$route.query.id,
        }
        this.$dialog.loading.open('获取中...')
        self.$http.post('/healthymvc/getinseranceDetails',paramts,{ emulateJSON: true })
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.detailData = response.data.data
              this.$refs.myTextEditor.quill.enable(false)
            }else {
              this.$dialog.toast({
                mes:  response.data.msg,
                timeout: 1500
              })
            }
          })
          .catch(function (error) {
            this.$dialog.loading.close()
            console.log(error)
          })
      },
    },
    mounted: function () {
      this.getDetail()
    },
    components: {
      FooterBar,
      TopBar,
      quillEditor
    }
  }
</script>
<style lang="scss" scoped>
  button{
    display: none !important;
  }
</style>

