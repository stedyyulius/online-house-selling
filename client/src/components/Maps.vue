<template lang="html">
  <div>  
    <gmap-map
      :center='center'
      :zoom="7"
      style="width:100%; height:300px"
      >
      <gmap-marker
        :key="index"
        v-for="(m,index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        @mouseover="image=m.position.pic"
        @mouseleave="image=''"
        ></gmap-marker>
      </gmap-map>
      <div class="detail">
        <img :src="image">
      </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return{
      image:""
    }
  },
  methods:{
    listLocations(){
      this.$store.dispatch('listLocation')
    }
  },
  created (){
    this.listLocations()
    console.log(JSON.stringify(this.markers));
  },
  computed:{
    ...mapGetters([
      'houses',
      'isLogin',
      'center',
      'markers'
      ])
    }
}
</script>

<style lang="css">
.detail img{
  margin-left: 300px;

}
</style>
