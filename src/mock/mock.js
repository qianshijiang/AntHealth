import Mock from 'mockjs'

const logon = require('./logon/logon')
const codeImg = require('./logon/codeImg')
const changePwd = require('./logon/changePwd')

export default {
  mockData () {
    const env = process.env
    Mock.mock(env.HOST + '/index/logon', logon)
    Mock.mock(env.HOST + '/staff/idyCodeImg', codeImg)
    Mock.mock(env.HOST + '/index/updatemypw', changePwd)
  }
}
