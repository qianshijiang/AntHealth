import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  logonData: {},
  state:{
    NewMsg:{
      Msgs:[
        {
          adcode:'暂无消息',
          name:'暂无消息',
          id:'no_msg'
        }
      ]
    },
  }
}
const actions = {
  fetchMsg (context){
    axios.post('/region/provinces')
    .then(function (res) {
      let data = res.data.data
      data.forEach( item => {
        context.commit('modifyMsg',item)
      })
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}
const mutations = {
  setLogonData (state, data) {
    state.logonData = data
  },
  modifyMsg (state,Obj){
    if(state.state.NewMsg.Msgs[0].id === 'no_msg'){
      state.state.NewMsg.Msgs.shift()
    }
    let obj = {
      adcode:Obj.adcode,
      name:Obj.name
    }
    obj.id = Obj.id
    state.state.NewMsg.Msgs.push(obj)
    // console.error(state.state.NewMsg.Msgs)
  }
}

const getters = {}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
