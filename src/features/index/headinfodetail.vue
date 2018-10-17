<template>
  <div class="layout ">
    <div class="header header-bg">
      <div class="left">
        <div  @click="prev" class="back"></div>
      </div>
      <div class="center">
        <p>头条详情</p>
      </div>
    </div>

    <div class="newsd">
      <div class="head">
        <h4>{{detailData.newTitle}}</h4>
        <p>2018 09/17  08:02</p>
      </div>
      <div class="body">
        <!--<p><img src="../../assets/imgs/img67.jpg"/></p>-->
        <p><img style="width: 100%;height: 210px;border-radius: 6px;" :src="detailData.newImg"/></p>
        <!--<p style="overflow: hidden">{{detailData.newcontent}}</p>-->
        <div style="widht:100%;height:100%;word-wrap: break-word">
          <quill-editor ref="myTextEditor" v-model="content" :options = "editorOption" @focus="onEditorFocus"  @change="onEditorChange($event)"></quill-editor>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import {quillEditor} from 'vue-quill-editor'
  export default {
    name: 'Headinfodetail',
    data () {
      return {
        detailData: {},
        content: '',                // 编辑器的内容
        editorOption: {
          toolbar:[
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block']
          ]
          // something config
        }
      }
    },
    methods: {
      prev(){
        this.$router.go(-1)
      },
      onEditorFocus(editor,val,text){ // 富文本获得焦点时的事件
        editor.enable(false) // 在获取焦点的时候禁用
      },
      onEditorChange({ editor, html, text }) {
        //富文本编辑器  文本改变时 设置字段值
        this.content = html
        editor.enable(false)
      },
      getDetail(){
        let self = this
        let paramts = {
          newid: this.$route.query.id,
        }
        this.$dialog.loading.open('获取中...')
        self.$http.post('/healthymvc/getnewsdetails',paramts,{ emulateJSON: true , headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.detailData = response.data.data
              this.content = this.detailData.newcontent
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
      this.$refs.myTextEditor.quill.enable(false)
    },
    components: {
      quillEditor                 // 声明组件quillEditor
    }
  }
</script>
<style lang="scss" scoped>
  button{
    display: none !important;
  }
</style>

