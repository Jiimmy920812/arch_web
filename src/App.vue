<script setup>
import { RouterView } from 'vue-router'
import { usePageData } from '@/stores/pageData';
const uPageData = usePageData();


window.addEventListener('scroll',()=>{
  const scrollTop = document.documentElement.scrollTop || window.scrollY || window.pageYOffset;
  if (scrollTop > 0) uPageData.scorllUse = true
  if (scrollTop === 0) uPageData.scorllUse = false
},true)


</script>

<template>
  <div class="container"  >
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
