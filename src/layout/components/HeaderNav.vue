<script setup>

</script>

<template>
 <div class="headerNav">
    <div class="logo" >
      <p class="title">建興建設</p>
      <p class="subTitle">CHIEN SHIH CO.,LTD</p>
    </div>

 
  </div>
  
  
</template>

<style lang="scss">


.headerNav{
  position: absolute;
  height: 100px;
  width: 100vw;
  // background-color: rgb(21 23 28 / 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo{
  position: absolute;
  left: 50px;
}
.menuGround{
  position: absolute;
  right: 50px;
}
.title{
  font-size: 25px;
  font-weight: bolder;
  color: white;
}

.subTitle{
  font-size: 9px;
  font-family: 'Carlito', sans-serif;
  color: white;
}

.menuGround{
  display: flex;
  align-items: center;
  gap: 10px;
}
.menuText{
  font-size: 20px;
  color: white;
  font-weight: bolder;
}

</style>
