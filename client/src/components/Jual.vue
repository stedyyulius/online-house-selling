<template lang="html">
  <div>
  <div class="container">
    <div class="jumbotron jumbotron-sm" style="background-color:#339966;margin-top:2%;color:white;">
        <div class="row">
            <div class="col-sm-12 col-lg-12">
                <h1 class="h2" style="margin-top:-2%">
                    Jual Rumah
                </h1>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-sm-6">
            <div class="well">
              <form>
                <h3 style="line-height:20%;"><i class="fa fa-home fa-1x" style="line-height:6%;color:#339966"></i>House Name</h3>               
                <input type="text" style="margin-top:6%;" v-model="name" placeholder="might be a place name">
                <br />
                <br />
                <h3 style="line-height:20%;"><i class="fa fa-money fa-1x" style="line-height:6%;color:#339966"></i>Price</h3>
                <input type="text" style="margin-top:6%;" v-model="price" placeholder="in Rp">
                <br />
                <br />
                <h3 style="line-height:20%;"><i class="fa fa-bars fa-1x" style="line-height:6%;color:#339966"></i>Description</h3>
                <textarea type="text" style="margin-top:6%;" rows="7" cols="40" v-model="description" placeholder="description(optional)"></textarea>
                <br />
                <br />
                <!-- <template>
                <h3 style="line-height:20%;"><i class="fa fa-picture-o fa-1x" style="line-height:6%;color:#339966"></i>Image Url</h3>
                <vue-clip :options="options">
                  <template slot="clip-uploader-action">
                    <div>
                      <div class="dz-message"><button type="button">Choose File</button></div>
                    </div>
                  </template>
                  <template slot="clip-uploader-body" scope="props" v-model="image">
                    <div v-for="file in props.files">
                      <img v-bind:src="file.dataUrl" v-model="image">
                      {{ file.name }} {{file.status}}
                    </div>
                  </template>

                </vue-clip>
              </template> -->

                <h3 style="line-height:20%;"><i class="fa fa-picture-o fa-1x" style="line-height:6%;color:#339966"></i>Image Url</h3>
                <input type="text" style="margin-top:6%;" v-model="image" placeholder="copy image url here">
                <br />
                <br />
                <h3 style="line-height:20%;"><i class="fa fa-map-marker fa-1x" style="line-height:6%;color:#339966"></i>Location</h3>
                <input type="text" style="margin-top:6%;" v-model="latitude" placeholder="latitude">
                <input type="text" style="margin-top:6%;" v-model="longitude" placeholder="longitude">      
                <br>
                <br>
                <button type="button" class="btn btn-success" @click="sellHouse()">Sell</button>
              </form>              
            </div>
        </div>
        <div class="col-sm-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96690.80542089987!2d29.864461132544537!3d40.77109282810726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4f66644bfb9d%3A0x82690ee7586b7eb9!2zxLB6bWl0LCBLb2NhZWxp!5e0!3m2!1str!2str!4v1480782606579" width="565" height="430" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
    </div>
</div>
</div>       

</template>

<script>
import Vue from 'vue'
import {mapGetters} from 'vuex'
import VueClip from 'vue-clip'

Vue.use(VueClip)

export default {
  data(){
    return{
      name:"",
      price:0,
      description:"",
      image:"",
      longitude: "",
      latitude: "",
      location:"",
      options:{
        url:'/upload',
        paramName:'file'
      }
    }
  },
  methods:{
    checkLogin(){
      if(localStorage.getItem('user') === null){
        alert(`You Must Login First!`)
        this.$router.push('/login')
      }
    },
    sellHouse(){
      let val = (this.price/1).toFixed(2).replace('.', ',')
      let formatedPrice = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      let user = JSON.parse(localStorage.getItem('user'))
      this.$store.dispatch('sellHouse',{
        name: this.name,
        price: formatedPrice,
        description: this.description,
        image: this.image,
        latitude: this.latitude,
        longitude: this.longitude,
        owner: user.username,
        user_id: user._id
      })
      alert(`${this.name} Posted!`)
      // this.$router.push('/')
    }
  },

  created (){
    this.checkLogin ()
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
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css");
</style>
