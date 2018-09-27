<template>
  <div>
    <div class="panel">
      <div class="nav">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>财务管理</el-breadcrumb-item>
          <el-breadcrumb-item>提现申请管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="search-panel">
        <el-form :inline="true" :model="searchData" :label-position="'left'" class="demo-form-inline" size="mini">
          <el-form-item label="银行卡号">
            <el-input v-model="searchData.accountNo" placeholder="请输入银行卡号"></el-input>
          </el-form-item>
          <el-form-item label="收款人姓名">
            <el-input v-model="searchData.name" placeholder="请输入收款人姓名"></el-input>
          </el-form-item>
          <el-form-item label="收款人手机号码">
            <el-input v-model="searchData.phone" placeholder="请输入收款人手机号码"></el-input>
          </el-form-item>
          <el-form-item label="导出状态">
            <el-select v-model="searchData.applyStatus" placeholder="请选择导出状态">
              <el-option label="--请选择--" value=""></el-option>
              <el-option label="未导出" value="0"></el-option>
              <el-option label="已导出" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="提交时间">
            <el-date-picker v-model="searchData.submitTime" type="datetimerange" range-separator="至" start-placeholder="开始日期"
                            value-format="yyyy-MM-dd HH:mm:ss" end-placeholder="结束日期" :editable="false"></el-date-picker>
          </el-form-item>
          <el-form-item label="导出时间">
            <el-date-picker v-model="searchData.exportTime" type="datetimerange" range-separator="至" start-placeholder="开始日期"
                            value-format="yyyy-MM-dd HH:mm:ss" end-placeholder="结束日期" :editable="false"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="mini" @click="searchWithdraw('')">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="operations">
      <el-button type="primary" size="mini" @click="export2Excel">导出</el-button>
    </div>
    <div class="withdraw-list">
      <el-table :data="tableData" ref="tableData" stripe size="mini" style="width: 100%" max-height="450"
                @selection-change="handleSelectionChange" @sort-change="handleSortChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column fixed prop="accountNo" label="银行卡号" sortable="custom" width="220"></el-table-column>
        <el-table-column fixed prop="name" label="收款人姓名" sortable="custom" width="120"></el-table-column>
        <el-table-column prop="applyAmout" label="金额" width="120"></el-table-column>
        <el-table-column prop="phone" label="收款人手机号码"></el-table-column>
        <el-table-column prop="applyStatus" label="导出状态" width="120" :formatter="formatStatus"></el-table-column>
        <el-table-column prop="createDate" label="提交时间" :formatter="formatDatetime"></el-table-column>
        <el-table-column label="导出人">
          <template slot-scope="scope">
            {{ scope.row.exportStaffName | nullFilter}}
          </template>
        </el-table-column>
        <el-table-column prop="exportDate" label="导出时间" :formatter="formatDatetime"></el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[100, 400, 700, 1000]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'

  export default {
    name: 'Withdraw',
    data () {
      return {
        searchData: {
          accountNo: '',
          name: '',
          phone: '',
          applyStatus: '0',
          submitTime: '',
          exportTime: ''
        },
        tableData: [],
        multipleSelection: [],
        page: 1,
        size: 1000,
        total: 0
      }
    },
    methods: {
      withdrawList () {
        let self = this
        let page = this.page > 0 ? this.page - 1 : this.page
        let params = {
          'pagingConfig': {
            'direction': 'ASC',
            'page': page,
            'property': 'createDate',
            'size': this.size
          },
          'applyStatus': this.searchData.applyStatus,
        }
        this.$http.post('/withdraw/pagelist', params)
          .then(function (res) {
            let data = res.data.data
            self.tableData = data.content
            self.total = data.totalElements
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      searchWithdraw (sortRule) {
        let self = this
        let page = this.page > 0 ? this.page - 1 : this.page
        let params = {
          'pagingConfig': {
            'direction': 'ASC',
            'page': page,
            'property': 'createDate',
            'size': this.size
          },
          'accountNo': this.searchData.accountNo,
          'name': this.searchData.name,
          'phone': this.searchData.phone,
          'applyStatus': this.searchData.applyStatus,
          'createDateStart': this.searchData.submitTime ? this.searchData.submitTime[0] : '',
          'createDateEnd': this.searchData.submitTime ? this.searchData.submitTime[1] : '',
          'exportDateStart': this.searchData.exportTime ? this.searchData.exportTime[0] : '',
          'exportDateEnd': this.searchData.exportTime ? this.searchData.exportTime[1] : ''
        }
        if (sortRule) {
          params.pagingConfig.property = sortRule.prop
          if (sortRule.order === 'ascending') {
            params.pagingConfig.direction = 'ASC'
          } else {
            params.pagingConfig.direction = 'DESC'
          }
        } else {
          this.$refs.tableData.clearSort()
        }
        this.$http.post('/withdraw/pagelist', params)
          .then(function (res) {
            let data = res.data.data
            self.tableData = data.content
            self.total = data.totalElements
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => v[j]))
      },
      export2Excel () {
        let self = this
        if (this.multipleSelection.length === 0) {
          this.$alert('请选择要导出的记录！', '提示', {
            confirmButtonText: '确定',
            callback: action => {}
          })
        } else {
          this.$confirm('是否导出所选记录?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            let params = self.multipleSelection.map((currentValue,index,arr) => {
              return arr[index].id
            })
            let list = []
            for (let obj of self.multipleSelection) {
              obj.usage = '货滴提现'
              obj.huilu = '12'
              obj.phone = ''
              list.push(obj)
            }
            self.$http.post('/withdraw/updateExport', params)
              .then(function (res) {
                require.ensure([], () => {
                  const { export_json_to_excel } = require('@/vendor/Export2Excel')
                  const tHeader = ['收款人账号','收款人账户类型','收款人账户名称','付款金额','用途组成','汇路','开户行号','收款人手机号']
                  const filterVal = ['accountNo','accountType', 'name', 'applyAmout', 'usage', 'huilu', 'bankCode', 'phone']
                  const data = self.formatJson(filterVal, list)
                  export_json_to_excel(tHeader, data, '批量付款制单')
                })
                self.searchWithdraw()
              })
              .catch(function (error) {
                console.log(error)
              })
          }).catch(() => {
            console.log('取消导出')
          })
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      handleSortChange (sortRule) {
        this.searchWithdraw(sortRule)
      },
      handleSizeChange (val) {
        this.size = val
        this.searchWithdraw()
      },
      handleCurrentChange (val) {
        this.page = val
        this.searchWithdraw()
      },
      formatStatus: function (row, column, cellValue) {
        return cellValue === '0' ? '未导出' : '已导出'
      },
      formatDatetime: function (row, column, cellValue) {
        return (cellValue === null || cellValue === '') ? '-' : Vue.filter('momentFilter')(new Date(cellValue))
      }
    },
    mounted: function () {
      this.withdrawList()
    }
  }
</script>
