<script setup>
import { ref } from 'vue';
import gsap from 'gsap'

const imageArr = ref([6, 1, 2])
const imageID = ref(0)

const textArr = [
  { id: '1', text1: '土耳其熱氣球節', text2: '成百上千個五颜六色的熱氣球，風景如畫。', text3: '最美的景致。' },
  { id: '2', text1: '壯闊的山地形', text2: '壯闊的山地形，壯闊的山地形。', text3: '壯闊的山地形' },
  { id: '3', text1: '集合式建築', text2: '集合式建築，集合式建築。', text3: '集合式建築' },
  { id: '4', text1: '水母的生態系', text2: '水母的生態系，水母的生態系。', text3: '水母的生態系' },
  { id: '5', text1: '漫天的雪白世界', text2: '漫天的雪白世界漫天的雪白世界，風景如畫。', text3: '最美的景致。' },
  { id: '6', text1: '沙漠裡的跑車', text2: '跑車跑車跑車跑車跑車跑車跑車跑車跑車。', text3: '最美的景致。' },
]



function next() {
  if (!gsap.isTweening(".carouselGround")) {
    gsap.from('.carouselGround', { duration: 1.5, x: 0, })
    gsap.to('.carouselGround', {
      duration: 1.5, x: window.innerWidth, onComplete: function () {
        for (let i = 0; i < imageArr.value.length; i++) {
          imageArr.value[i]--;
          if (imageArr.value[i] < 1) {
            imageArr.value[i] = 6
          }
        }
        gsap.set(".carouselGround", { x: 0, });
      }
    })
  }
}

function prev() {
  if (!gsap.isTweening(".carouselGround")) {
    gsap.from('.carouselGround', { duration: 1.5, x: window.innerWidth, })
    gsap.to('.carouselGround', {
      duration: 1.5, x: 0, onComplete: function () {
        for (let i = 0; i < imageArr.value.length; i++) {
          imageArr.value[i]++;
          if (imageArr.value[i] > 6) {
            imageArr.value[i] = 1
          }
        }
        gsap.set(".carouselGround", { x: window.innerWidth, });
      }
    })
  }
}

function clickLine(index) {
  imageArr
}



</script>


<template>
  <div class="bg">
    <div class="carouselGround">
      <div class="carousel" :style="{ backgroundImage: `url(${`src/assets/img/home_page_${imageArr[0]}.jpg`})` }">
        <p>{{ textArr[imageArr[0] - 1].text1 }}</p>
        <p>{{ textArr[imageArr[0] - 1].text2 }}</p>
        <p>{{ textArr[imageArr[0] - 1].text3 }}</p>
      </div>
      <div class="carousel" :style="{ backgroundImage: `url(${`src/assets/img/home_page_${imageArr[1]}.jpg`})` }">
        <p>{{ textArr[imageArr[1] - 1].text1 }}</p>
        <p>{{ textArr[imageArr[1] - 1].text2 }}</p>
        <p>{{ textArr[imageArr[1] - 1].text3 }}</p>
      </div>
      <div class="carousel" :style="{ backgroundImage: `url(${`src/assets/img/home_page_${imageArr[2]}.jpg`})` }">
        <p>{{ textArr[imageArr[2] - 1].text1 }}</p>
        <p>{{ textArr[imageArr[2] - 1].text2 }}</p>
        <p>{{ textArr[imageArr[2] - 1].text3 }}</p>
      </div>
    </div>
    <div class="control">
      <div class="textGround" @click="prev">
        <div class="arrow left"></div>
        <p>PREV</p>
      </div>
      <div class="line"></div>
      <div class="textGround" @click="next">
        <p>NEXT</p>
        <div class="arrow "></div>
      </div>
    </div>

    <div class="lineControl">
      <div class="lineBg center" :key="index" v-for="value, index in 5" @click="clickLine(index)">
        <div class="lineEl" :class="{ isClick: imageID === index }"></div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
p {
  font-size: 32px;
  color: white;
  font-weight: bolder;
}

.bg {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: black;
  overflow: hidden;
}

.carouselGround {
  position: absolute;
  display: flex;
}

.carousel {
  width: 100vw;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('../assets/img/home_page_1.jpg');
}

.control {
  position: absolute;
  bottom: 30px;
  right: 80px;
  display: flex;
  gap: 80px;
  z-index: 5;

  p {
    font-size: 16px;
  }

  .textGround {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .line {
    height: 50px;
    width: 1px;
    background-color: white;
  }

  .arrow {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 7px 0 7px 7px;
    border-color: transparent transparent transparent #ffffff;
  }

  .left {
    rotate: (180deg);
  }
}

.lineControl {
  bottom: 40px;
  left: 40px;
  display: flex;
  position: absolute;
  gap: 15px;



  .lineBg {
    width: 40px;
    height: 20px;
    cursor: pointer;

    .lineEl {
      width: 40px;
      height: 2px;
      border-radius: 3rem;
      background-color: rgba(245, 244, 244, 0.863);
    }

    .isClick {
      background-color: #cc9b55;
    }

  }


}
</style>