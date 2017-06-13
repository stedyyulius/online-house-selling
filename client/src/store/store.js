import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    houses: [],
    isLogin: false,
    center:{lat:-6.2023936 , lng:106.65270989999999},
    location: ""
  },
  getters:{
    houses(state){
      return state.houses
    },
    isLogin(state){
      return state.isLogin
    },
    center(state){
      return state.center
    }
  },
  mutations:{
    listHouses(state,data){
      state.houses = data
    },
    changeLoginStatus(state,status){
      console.log(`masuk change`);
      state.isLogin = status
    },
    addHouse(state,house){
      state.houses.push(house)
    },
    getLocation(state,position){
      state.center = position
      state.location = JSON.stringify(position)
    }
  },
  actions:{
    listHouses({commit}){
      axios.get(`http://localhost:3000/house/list`)
      .then(response=>{
        commit('listHouses',response.data)
      })
      .catch(err=>{
        console.log(err);
      })
    },
    sellHouse({commit},payload){
      axios.post(`http://localhost:3000/house/createHouse`,payload)
      .then(reponse=>{
        commit('addHouse',response.data)
      })
    }
  }
})