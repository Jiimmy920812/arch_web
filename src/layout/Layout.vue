<script  setup>
import headerNav from './components/HeaderNav.vue';
import SideBar from './components/SideBar.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
import { usePageData } from '@/stores/pageData';
const uPageData = usePageData();


import { ref } from 'vue';

const scrollDistance = ref(null)

function handleScroll() {
  // const { scrollHeight } = scrollDistance.value;
  // const { clientHeight } = scrollDistance.value;
  // const distance = scrollHeight - scrollTop - clientHeight;
  const scrollTop = scrollDistance.value.scrollTop || document.documentElement.scrollTop;
  if (scrollTop !== 0) uPageData.scorllUse = true
  if (scrollTop === 0) uPageData.scorllUse = false
}


</script>

<template>
  <div class="container">
    <div class="sideBar">
      <SideBar :isScroll="uPageData.scorllUse" />
    </div>
    <header>
      <headerNav :isScroll="uPageData.scorllUse" />
    </header>
    <div class="routerView" @wheel="handleScroll" ref="scrollDistance">
      <RouterView />
    </div>
    <div class="topButtonBg" @click="uPageData.toTopSmooth" v-if="router.currentRoute.value.path !== '/'">
      <div class="topButton"></div>
      <div class="line"></div>
      <p>TOP</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  position: relative;
}

.sideBar {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 7
}

header {
  position: absolute;
  top: 0px;
  z-index: 3;
}

.routerView {
  width: 100%;
  height: 100%;
}

.topButtonBg {
  cursor: pointer;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 20px;
  right: 30px;

  .line {
    position: absolute;
    width: 5px;
    height: 20px;
    top: 12px;
    left: 15px;
    background-color: var(--gold_1);
  }

  .topButton {
    width: 20px;
    height: 20px;
    border: 3px solid var(--gold_1);
  }

  p {
    margin-top: 5px;
    color: var(--gold_1);
  }
}

.topButtonBg:hover .line {
  transform: translateY(-20px);
  transition: all 0.5s;
}
</style>
