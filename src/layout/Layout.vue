<script  setup>
import headerNav from './components/HeaderNav.vue';
import SideBar from './components/SideBar.vue';


</script>

<template>
  <div class="container" >
    <div class="sideBar">
      <SideBar />
    </div> 
      <header>
        <headerNav />
      </header>
      <RouterView />
     
  </div>
  
</template>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100vh;
  position: relative;
}
.sideBar{
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 7
}
header{
  position: absolute;
  top: 0px;
  z-index: 3;
}

</style>
