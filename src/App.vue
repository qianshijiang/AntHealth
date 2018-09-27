<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style  lang="scss">
$font-size: 16px;
html, body, #app {height: 100%;}
#app {
  font-family: Avenirltstd,Microsoft YaHei,Helvetica,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:auto;
  position:relative;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  font-size: $font-size;
  .panel {
    background-color: #FFFFFF;
    padding: 20px 20px 0 20px;
    margin-bottom: 25px;
  }
  .nav {
    padding-bottom: 20px;
  }
  .operations {
    padding: 18px;
    background-color: #FFFFFF;
  }
  th {
    background-color: #FAFAFA;
    font-weight: 700;
    color: #303133;
  }
  .el-date-editor--datetimerange.el-input__inner {
    width: 330px;
  }
  .el-input--mini .el-input__inner,.el-date-editor.el-input, .el-date-editor.el-input__inner, .select-input-input.el-input {
    width: 200px;
  }
  .select-input-select.el-select .el-input--mini .el-input__inner {
    width: 60px;
  }
  .el-dialog__header {
    border-left: #409EFF solid 4px;
  }
  .el-dialog__body {
    padding: 20px;
  }
  .el-range-editor--mini .el-range__close-icon {
    margin-top: -20px;
  }
  .amap-ui-smp-ifwn-content-body {
    border: none;
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.10);
    padding: 0;
    font-size: 12px;
    text-align: center;
  }
  .amap-ui-infowindow-title {
    font-size: 14px;
  }
  .amap-ui-smp-ifwn-info-content {
    padding: 8px;
  }
  .grid-content {
    word-wrap: break-word;
  }
}
</style>
