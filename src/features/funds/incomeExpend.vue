<template>
  <div>
    <div class="panel">
      <div class="nav">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>财务管理</el-breadcrumb-item>
          <el-breadcrumb-item>平台收支查询</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="search-panel">
        <el-form :inline="true" :model="searchData" :label-position="'left'" class="demo-form-inline" size="mini">
          <el-form-item label="月份">
            <el-date-picker v-model="searchData.month" type="month" value-format="yyyy-MM" :clearable="false" :editable="false" placeholder="请选择月份">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="mini" @click="incomeExpendList('')">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="incomeExpend-list">
      <el-table :data="tableData" ref="tableData" stripe show-summary size="mini" style="width: 100%" max-height="450" @sort-change="handleSortChange">
        <el-table-column fixed prop="createDate" label="日期" width="100"></el-table-column>
        <el-table-column prop="freightFee" label="运费(元)" width="80"></el-table-column>
        <el-table-column prop="tipFee" label="感谢费(元)" width="80"></el-table-column>
        <el-table-column prop="extraFee" label="额外费(元)" width="80"></el-table-column>
        <el-table-column prop="serviceFee" label="货滴单服务费(元)" width="120"></el-table-column>
        <el-table-column prop="logisticsServiceFee" label="物流单服务费(元)" width="120"></el-table-column>
        <el-table-column prop="sumFee" label="司机提现(元)" width="90"></el-table-column>
        <el-table-column prop="aliIncomeFee" label="支付宝收入(元)" width="110"></el-table-column>
        <el-table-column prop="aliExpensesFee" label="支付宝退费(元)" width="110"></el-table-column>
        <el-table-column prop="aliCommission" label="支付宝手续费(元)"></el-table-column>
        <el-table-column prop="wxIncomeFee" label="微信支付收入(元)"></el-table-column>
        <el-table-column prop="wxExpensesFee" label="微信支付退费(元)"></el-table-column>
        <el-table-column prop="wxCommission" label="微信支付手续费(元)"></el-table-column>
        <el-table-column prop="appServiceFee" label="货滴提现服务费">
          <template slot-scope="scope">
            {{ scope.row.appServiceFee | nullFilter }}
          </template>
        </el-table-column>
        <el-table-column prop="logisticsServiceFee" label="物流提现服务费">
          <template slot-scope="scope">
            {{ scope.row.logisticsServiceFee | nullFilter }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'

  export default {
    name: 'IncomeExpend',
    data () {
      return {
        searchData: {
          month: Vue.filter('momentFilter')(new Date(), 'YYYY-MM')
        },
        tableData: []
      }
    },
    methods: {
      incomeExpendList (sortRule) {
        let self = this
        let params = {
          'createDate': this.searchData.month
        }
        if (sortRule) {
          params.sortProperty = sortRule.prop
          if (sortRule.order === 'ascending') {
            params.sortDirection = 'ASC'
          } else {
            params.sortDirection = 'DESC'
          }
        } else {
          this.$refs.tableData.clearSort()
        }
        this.$http.post('/capital/month', params)
          .then(function (res) {
            let data = res.data.data
            self.tableData = data
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      handleSortChange (sortRule) {
        this.incomeExpendList(sortRule)
      }
    },
    mounted: function () {
      this.incomeExpendList()
    }
  }
</script>
