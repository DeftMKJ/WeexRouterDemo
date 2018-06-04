<template>
  <div class="wrapper">
    <div class="container" @click="loadImage">
      <image class="image" v-if="src" :src="src" resize="cover"></image>
      <text class="alt" v-else>Click to load image</text>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        src: ''
      }
    },
    methods: {
      loadImage () {
        if (!this.src) {
          this.src = 'https://cdn.dribbble.com/users/179241/screenshots/1829868/nerfwarrior_dribbble.png'
        }
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .container {
    width: 602px;
    height: 602px;
    border-width: 2px;
    border-color: #DDD;
    background-color: #F5F5F5;
    justify-content: center;
    align-items: center;
  }
  .image {
    width: 600px;
    height: 600px;
  }
  .alt {
    font-size: 50px;
    color: #AAA;
  }
</style>
<!-- 
<template>
  <list class="list">
    <cell class="cell">
      <div class="pannal"><text class="text">first</text></div>
      
    </cell>

    <cell class="cell">
      <div class="pannal"><text class="text">fir22st</text></div>
      
    </cell>

    <cell class="cell">
      <div class="pannal"><text class="text">first</text></div>
      
    </cell>

    <cell class="cell">
      <div class="pannal"><text class="text">first</text></div>
      
    </cell>

    <cell class="cell">
      <div class="pannal"><text class="text">first</text></div>
      
    </cell>

    <cell class="cell">
      <div class="pannal"><text class="text">first</text></div>
      
    </cell>

  </list>
</template>


<style scope="">
  .pannal {
    width: 500px;
    height: 250px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    border-width: 2px;
    border-style: dashed;
    border-color: black;
    background-color: yellow;
    flex-direction: column;
    justify-content: center;
  }
  
  .text {
    font-size: 50px;
    text-align: center;
    color: black;
  }



</style>
 -->






















<!-- <template>
  <div class="wrapper" @click="update">
    <image :src="logoUrl" class="logo"></image>
    <text class="title">Hello mikejing  jiaojiao {{target}}</text>
    <text class="desc">Now, let's use vue to build your weex app.Mike璟哈哈哈哈哈哈哈，我了个擦擦擦，不错哈柔柔弱弱若若若若若若若若若若若dffsdfsfsfsfsfsfsfsdfsfsfsfsdfsfsfsffsfsfsd</text>

    <text class="name">Mike璟</text>

    <text class="name2">娇娇</text>
    
  </div>
</template>

<style>
  .wrapper { align-items: center; margin-top: 0px; background: red;}
  .title { padding-top:140px; padding-bottom: 40px; font-size: 48px; background: blue;}
  .logo { width: 360px; height: 156px; background: yellow;}
  .desc { padding-top: 100px; color:#888; font-size: 30px; background: black;padding-bottom: 50px; overflow: auto;}
  .name {background: white;padding-left: 100px;}
  .name2 {background: white;padding-left: 100px;display: inline;}
</style>

<script>
  export default {

    data () {
    return {
      logoUrl: 'http://www.ypppt.com/uploads/allimg/180303/1-1P3031301360-L.jpg'
    }
  },
    // data: {
    //   logoUrl: 'https://p.ssl.qhimg.com/dm/364_207_/t018b8900b6bb742c62.jpg',
    //   target: 'World'
    // },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    }
  }
</script> -->
