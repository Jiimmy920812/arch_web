<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
  isScroll: {
    type: Boolean,
    default: false,
  }
})



</script>

<template>
  <div class="headerNav" :class="{ topBg: props.isScroll }">
    <div class="logo">
      <p class="title"
        :class="{ blackText: router.currentRoute.value.path !== '/' && router.currentRoute.value.path !== '/Introduce', whiteText: props.isScroll }">
        建興建設</p>
      <p class="subTitle"
        :class="{ blackText: router.currentRoute.value.path !== '/' && router.currentRoute.value.path !== '/Introduce', whiteText: props.isScroll }">
        CHIEN
        SHIH
        CO.,LTD</p>
    </div>


  </div>
</template>

<style lang="scss" scoped>
.blackText {
  color: black !important;
  ;
}

.whiteText {
  color: rgb(255, 255, 255) !important;
}


.headerNav {
  position: fixed;
  top: 0;
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.topBg {
  background-color: rgba(63, 63, 63, 0.8);
}



.logo {
  position: absolute;
  left: 50px;
}



.title {
  font-size: 25px;
  font-weight: bolder;
  color: white;
}

.subTitle {
  font-size: 9px;
  font-family: 'Carlito', sans-serif;
  color: white;
}
</style>
