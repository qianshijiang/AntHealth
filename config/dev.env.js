'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DUMMY: true,
  // HOST: '"http://118.190.26.38:8888/healthymvc"',
})
