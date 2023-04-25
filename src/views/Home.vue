<script setup>
import { ref, } from 'vue';
import gsap from 'gsap'

const imageArr = ref([6, 1, 2])
const imageID = ref(0)

const textArr = [
  {
    id: '1', text1: '取得珍貴土地、雲集頂尖建築團隊更是邁向新里程的第一步。', text2: "一切，只為了打造無愧土地情感與記憶", text3: '足以傳承品牌精神的理想建築'
  },
  { id: '2', text1: '壯闊的外牆', text2: '是建築的點綴之美。', text3: '保護建築物不受損害' },
  { id: '3', text1: '集合式建築', text2: '集合式建築，集合式建築。', text3: '集合式建築' },
  { id: '4', text1: '大器，藏於細節之中', text2: '無法言喻卻又無比清晰的工藝內涵', text3: '' },
  { id: '5', text1: '漫天的雪白世界', text2: '漫天的雪白世界漫天的雪白世界，風景如畫。', text3: '最美的景致。' },
  { id: '6', text1: '沙漠裡的跑車', text2: '跑車跑車跑車跑車跑車跑車跑車跑車跑車。', text3: '最美的景致。' },
]

const handleNumber = (index) => {
  if (index > 6) return 1
  if (index < 1) return 6
  return index
}

function currentPageAnimate() {
  if (!gsap.isTweening('#currentPage')) {
    gsap.from('#currentPage', { duration: 0.2, y: 20, opacity: 0 })
    gsap.to('#currentPage', { duration: 0.2, y: 0, opacity: 1, })
  }
}



function prev() {
  if (!gsap.isTweening(".carouselGround")) {
    currentPageAnimate()
    imageID.value--
    if (imageID.value < 0) imageID.value = textArr.length - 1
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
function next() {
  if (!gsap.isTweening(".carouselGround")) {
    currentPageAnimate()
    imageID.value++
    if (imageID.value > textArr.length - 1) imageID.value = 0
    gsap.from('.carouselGround', { duration: 1.5, x: 0, })
    gsap.to('.carouselGround', {
      duration: 1.5, x: -window.innerWidth, onComplete: function () {
        for (let i = 0; i < imageArr.value.length; i++) {
          imageArr.value[i]++;
          if (imageArr.value[i] > 6) {
            imageArr.value[i] = 1
          }
        }
        gsap.set(".carouselGround", { x: 0, });
      }
    })
  }
}




function clickLine(index) {
  currentPageAnimate()
  imageID.value = index
  imageArr.value[0] = handleNumber(index)
  imageArr.value[1] = handleNumber(index + 1)
  imageArr.value[2] = handleNumber(index + 2)
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
      <div class="lineBg center" :key="index" v-for="value, index in 6" @click="clickLine(index)">
        <div class="lineEl" :class="{ isClick: imageID === index }"></div>
      </div>
      <div class="number">
        <p id="currentPage">{{ imageID + 1 }}</p>
        <p>/</p>
        <p>{{ textArr.length }}</p>
      </div>

    </div>

  </div>
</template>

<style scoped lang="scss">
p {
  font-size: 24px;
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
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('../assets/img/home_page_1.jpg');
  p{
    margin-top: 15px;
  }
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
  gap: 5px;
  align-items: center;

  .lineBg {
    width: 40px;
    height: 20px;
    cursor: pointer;

    .lineEl {
      width: 35px;
      height: 2px;
      border-radius: 3rem;
      background-color: rgba(245, 244, 244, 0.863);
    }

    .isClick {
      background-color: #cc9b55;
    }

  }

  .number {
    width: 50px;
    height: 20px;
    overflow: hidden;
    gap: 10px;
    margin-left: 15px;
    display: flex;

    p {
      font-size: 14px;
    }
  }
}
</style>