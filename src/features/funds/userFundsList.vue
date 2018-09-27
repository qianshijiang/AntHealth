<template>
  <div>
    <div class="panel">
      <div class="nav">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>财务管理</el-breadcrumb-item>
          <el-breadcrumb-item>用户资金管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="search">
        <el-form :inline="true" :model="searchData" class="demo-form-inline" size="mini">
          <el-form-item label="手机号码">
            <el-input v-model="searchData.phone" placeholder="请输入手机号码"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="searchData.nickname" placeholder="请输入昵称"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="searchData.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="新增渠道">
            <el-select v-model="searchData.userCategory" placeholder="请选择新增渠道">
              <el-option label="--请选择--" value=""></el-option>
              <el-option label="APP" value="0"></el-option>
              <el-option label="运营系统" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="mini" @click="search('')">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="user-list">
      <el-table :data="tableData" ref="tableData" stripe size="mini" style="width: 100%;" max-height="450" @sort-change="handleSortChange">
        <el-table-column fixed prop="phone" sortable="custom" label="手机号码"></el-table-column>
        <el-table-column label="昵称">
          <template slot-scope="scope">
            {{ scope.row.nickname | nullFilter}}
          </template>
        </el-table-column>
        <el-table-column label="姓名">
          <template slot-scope="scope">
            {{ scope.row.name | nullFilter}}
          </template>
        </el-table-column>
        <el-table-column prop="userCategory" label="新增渠道" :formatter="formatUserCategory"></el-table-column>
        <el-table-column prop="balance" label="余额(元)"></el-table-column>
        <el-table-column fixed="right" align="center" label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" v-if="scope.row.balance !== 0" @click="checkTransDetail(scope.$index)">查看资金流水</el-button>
            <span v-if="scope.row.balance === 0">-</span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
    <div class="view-panel">
      <view-transaction-panel v-if="showTransDetailPanel" :showTransDetailPanel.sync="showTransDetailPanel" :userId="selectedUser.userId"></view-transaction-panel>
    </div>
  </div>
</template>
<script>
  import TransactionView from './viewTransaction'

  export default {
    name: 'UserFundsList',
    data () {
      return {
        searchData: {
          phone: '',
          nickname: '',
          name: '',
          userCategory: ''
        },
        tableData: [],
        selectedUser: {},
        showTransDetailPanel: false,
        page: 1,
        size: 20,
        total: 0
      }
    },
    methods: {
      search (sortRule) {
        let self = this
        let page = this.page > 0 ? this.page - 1 : this.page
        let params = {
          'pagingConfig': {
            'direction': 'ASC',
            'page': page,
            'property': 'phone',
            'size': this.size
          },
          'phone': this.searchData.phone,
          'nickname': this.searchData.nickname,
          'name': this.searchData.name,
          'userCategory': this.searchData.userCategory === '' ? 2 : this.searchData.userCategory,
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
        this.$http.post('/capital/record', params)
          .then(function (res) {
            let data = res.data.data
            self.tableData = data.content
            self.total = data.totalElements
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      checkTransDetail (index) {
        this.selectedUser = {}
        this.selectedUser = Object.assign({}, this.tableData[index])
        this.showTransDetailPanel = true
      },
      handleSizeChange (val) {
        this.size = val
        this.search()
      },
      handleCurrentChange (val) {
        this.page = val
        this.search()
      },
      handleSortChange (sortRule) {
        this.search(sortRule)
      },
      formatUserCategory: function (row, column, cellValue) {
        return cellValue === 0 ? 'APP用户' : '自营司机'
      }
    },
    mounted: function () {
      this.search()
    },
    components: {
      'view-transaction-panel': TransactionView
    }
  }
</script>
<style lang="scss" scoped>
</style>
