<template>
  <el-dialog title="查看资金流水" :visible.sync="isShow" @close="cancel" :close-on-click-modal="false">
    <el-table :data="transDetail" size="mini" style="width: 100%" max-height="350" border>
      <el-table-column fixed prop="createDate" label="日期"></el-table-column>
      <el-table-column label="类型">
        <template slot-scope="scope">
          {{ scope.row.incomeExpensesType | formatType }}
        </template>
      </el-table-column>
      <el-table-column prop="balance" label="金额(元)"></el-table-column>
      <el-table-column label="服务费(元)">
        <template slot-scope="scope">
          {{ scope.row.withdrawFee | nullFilter }}
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
  </el-dialog>
</template>

<script>
  export default {
    name: 'TransactionView',
    props: ['showTransDetailPanel', 'userId'],
    data () {
      return {
        transDetail: [],
        isShow: this.showTransDetailPanel,
        page: 1,
        size: 20,
        total: 0
      }
    },
    filters: {
      formatType: function (val) {
        return val === 'INCOME' ? '收入' : '支出'
      }
    },
    methods: {
      getTransDetail () {
        let self = this
        let page = this.page > 0 ? this.page - 1 : this.page
        let params = {
          'pagingConfig': {
            'direction': 'DESC',
            'page': page,
            'property': 'date',
            'size': this.size
          },
          'userId': this.userId
        }
        this.$http.post('/capital/detail', params)
          .then(function (res) {
            let data = res.data.data
            self.transDetail = data.content
            self.total = data.totalElements
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      handleSizeChange (val) {
        this.size = val
        this.getTransDetail()
      },
      handleCurrentChange (val) {
        this.page = val
        this.getTransDetail()
      },
      cancel () {
        this.isShow = false
        this.$emit('update:showTransDetailPanel', this.isShow)
      }
    },
    mounted: function () {
      this.getTransDetail()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
