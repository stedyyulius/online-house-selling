<template lang="html">
  <div>
  <div class="services">
  <div class="col-md-4" v-for="(house,index) in houses">
      <figure class="snip1174 navy col-md-4">
        <img class ="rumah" :src="house.image" alt="planet" />
        <figcaption>
          <h3>{{house.name}}</h3>
          <h4>
          Rp {{house.price}},00
        </h4>
          <p>
          {{house.description}}  
          </p>
          <p>
          {{house.owner}}
          </p>
          <button type="button" v-if="user._id === house.user_id" class="btn btn-danger" @click="confirmDel(house._id,index)">Delete</button>
        </figcaption>
      </figure>
  </div>
  </div>
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
    },
    deleteHouse(id,index){
      this.$store.dispatch('deleteHouse',id,index)
    },
    confirmDel(id,index){
      if(confirm(`Are You Sure You Want To Delete This House?`)){
        this.deleteHouse(id,index)
      }
      else{
        return false
      }
    }
  },
  created () {
    this.checkLogin()
    this.listHouses()
  },
  computed:{
    user(){
      let user = JSON.parse(localStorage.getItem('user'))
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
.rumah{
  height:250px;
  width:400px;
}

.services{
    margin: 20px auto;
    }
figure.snip1174 {
  color: #fff;
  position: relative;
  float: left;
  overflow: hidden;
  background-color: #1a1a1a;
  color: #ffffff;
  text-align: left;
  margin: 10px;
  width: 100%;
  border-radius: 0px;
}
figure.snip1174 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
figure.snip1174 img {
  max-width: 100%;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  vertical-align: top;
  opacity: 0.7;
}
figure.snip1174 figcaption {
  position: absolute;
  /*padding: 40px 25px;*/
  margin-left: 20px;
  top: 0;
  left: 0;
}
figure.snip1174 h2,
figure.snip1174 p {
  margin: 0;
  padding: 0;
}
figure.snip1174 h2 {
  margin-bottom: 10px;
  display: inline-block;
  font-weight: 100;
  font-size: 1.8em;
}
figure.snip1174 p {
  font-weight: 300;
  margin-bottom: 20px;
  line-height: 1.4em;
}
figure.snip1174 a {
  display: inline-block;
  /*padding: 10px 20px;*/
  border: 1px solid #ffffff;
  text-decoration: none;
  color: #ffffff;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 0.8em;
  -webkit-transform: translateY(50%);
  transform: translateY(50%);
  opacity: 0;
}
figure.snip1174 a:hover {
  /*background-color: rgba(0, 0, 0, 0.2);*/
}
figure.snip1174.blue {
  background-color: #20638f;
}
figure.snip1174.yellow {
  background-color: #c87f0a;
}
figure.snip1174.green {
  background-color: #1e8449;
}
figure.snip1174.navy {
  background-color: #222f3d;
}
figure.snip1174.red {
  background-color: #962d22;
}
figure.snip1174:hover img,
figure.snip1174.hover img {
  opacity: 0;
  -webkit-transform: scale(1);
  transform: scale(1);
}
figure.snip1174:hover a,
figure.snip1174.hover a {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
}

</style>
