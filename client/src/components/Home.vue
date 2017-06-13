<template lang="html">
  <div>
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return{
      
    }    
  },
  methods:{
    checkLogin(){
      if(localStorage.getItem('user') === null){
        alert(`You Must Login First!`)
        this.$router.push('/login')
      }
    },
    listHouses(){
      this.$store.dispatch('listHouses')
    }
  },
  created () {
    this.checkLogin()
  },
  computed:{
    user(){
      let user = localStorage.getItem('user')
      if(user){
        return user
      }
    },
    ...mapGetters([
      'houses',
      'isLogin'
    ])
  }
}
</script>

<style lang="css">
</style>
