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
                <h3 style="line-height:20%;"><i class="fa fa-picture-o fa-1x" style="line-height:6%;color:#339966"></i>Image Url</h3>
                <input type="text" style="margin-top:6%;" v-model="image" placeholder="copy image url here">
                <br />
                <br />
                <h3 style="line-height:20%;"><i class="fa fa-map-marker fa-1x" style="line-height:6%;color:#339966"></i>Location</h3>
                <input type="text" style="margin-top:6%;" v-model="longitude" placeholder="longitude">
                <input type="text" style="margin-top:6%;" v-model="langitude" placeholder="langitude">
                <br>
                <br>
                <button type="button" class="btn btn-success">Sell</button>
              </form>              
            </div>
        </div>
        <div class="col-sm-6">
            <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96690.80542089987!2d29.864461132544537!3d40.77109282810726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4f66644bfb9d%3A0x82690ee7586b7eb9!2zxLB6bWl0LCBLb2NhZWxp!5e0!3m2!1str!2str!4v1480782606579" width="565" height="430" frameborder="0" style="border:0" allowfullscreen></iframe> -->
            <gmap-map
              :center='center'
              :zoom="7"
              style="width:500px; height:300px"
              >
              <gmap-marker
                :key="index"
                v-for="(m,index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
                ></gmap-marker>
              </gmap-map>
        </div>
    </div>
</div>
</div>       

</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps';

import {mapGetters} from 'vuex'
export default {
  data(){
    return{
      name:"",
      price:0,
      description:"",
      image:"",
      longitude: "",
      langitude: "",
      location:"",
      center:{lat:-6.2023936 , lng:106.65270989999999},
      markers: [{
        position:{lat:-6.2023936,lng:106.65270989999999},
      }]
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
      this.$store.dispatch('sellHouse',{
        name: this.name,
        price: this.price,
        description: this.description,
        image: this.image,
        location:{lat:this.langitude,lng:this.longitude}
      })
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
