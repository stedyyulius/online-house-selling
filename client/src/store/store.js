import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    houses: [],
    isLogin: false,
    center:{lat:-6.2023936 , lng:106.65270989999999},
    markers: [{
    }]
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
    },
    markers(state){
      return state.markers
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
      console.log(`masuk add`);
    },
    deleteHouse(state,index){
      state.houses.splice(index,1)
      console.log(`masuk delete`);
    },
    listLocation(state,data){
      data.forEach(d=>{
      state.markers.push({
          position:{
            lat:d.latitude,
            lng:d.longitude,
            pic:d.image
          }
        })
      })
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
      console.log(payload);
      axios.post(`http://localhost:3000/house`,payload)
      .then(reponse=>{
        console.log(`masuk`);
        commit('addHouse',response.data)
      })
    },
    deleteHouse({commit},id,index){
      axios.delete(`http://localhost:3000/house/${id}`)
      .then(response=>{
        commit('deleteHouse',index)
      })
    },
    listLocation({commit}){
      axios.get(`http://localhost:3000/house/list`)
      .then(response=>{
        commit('listLocation',response.data)
      })
    }
  }
})