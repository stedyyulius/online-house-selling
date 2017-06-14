<template lang="html">
  <div>
    <nav id="header" class="navbar navbar-fixed-top">
      <div id="header-container" class="container navbar-container">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <a id="brand" class="navbar-brand" href="#">RumahkuDiJual-Jual.com</a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                  <li v-if="isLogin === true"><router-link to="/">Home</router-link></li>
                  <li v-if="isLogin === true"><router-link to="/jual">Jual Rumah Gua</router-link></li>
                  <li v-if="isLogin === true"><a href="#" @click="logout">Logout</a></li>
                  <li v-if="isLogin === true"><router-link to="/maps">Maps</router-link></li>
              </ul>
          </div><!-- /.nav-collapse -->
      </div><!-- /.container -->
  </nav><!-- /.navbar -->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  methods:{
    checkLogin(){
      if(localStorage.getItem('user') !== null){
        this.$store.commit('changeLoginStatus',true)
      }
    },
    logout(){
      localStorage.clear()
      this.$store.commit('changeLoginStatus',false)
      this.$router.push('/login')
    }
  },
  created (){
    this.checkLogin()
  },
  computed:{
    ...mapGetters([
      'houses',
      'isLogin'
    ])
  }
}
</script>

<style lang="css">
*/
html,
body {
    overflow-x: hidden; /* Prevent scroll on narrow devices */
}
body {
    padding-top: 100px;
}
footer {
    padding: 30px 0;
}

/*
 * Custom styles
 */
.navbar-brand {
    font-size: 24px;
    margin-left: 50px;
}

.navbar-container {
    padding: 20px 0 20px 0;
    background-color: black;
}

.navbar.navbar-fixed-top.fixed-theme {
    background-color: #222;
    border-color: #080808;
    box-shadow: 0 0 5px rgba(0,0,0,.8);
}

.navbar-brand.fixed-theme {
    font-size: 18px;
}

.navbar-container.fixed-theme {
    padding: 0;
}

.navbar-brand.fixed-theme,
.navbar-container.fixed-theme,
.navbar.navbar-fixed-top.fixed-theme,
.navbar-brand,
.navbar-container{
    transition: 0.8s;
    -webkit-transition:  0.8s;
}
.navbar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand {
     margin-left: 0px; 
}
</style>
