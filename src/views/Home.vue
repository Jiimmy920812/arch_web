<script setup>
import { ref, } from 'vue';
import gsap from 'gsap'

const imageArr = ref([6, 1, 2])
const imageID = ref(0)

const textArr = [
  {
    id: '1', text1: '取得珍貴土地、雲集頂尖建築團隊更是邁向新里程的第一步。', text2: "一切，只為了打造無愧土地情感與記憶", text3: '足以傳承品牌精神的理想建築'
  },
  { id: '2', text1: '壯闊的外牆', text2: '光線、風景、材料和細節，打造出寧靜與和諧的氛圍。', text3: '遇見建築的點綴之美。' },
  { id: '3', text1: '材料美學，建築之魂', text2: '材料是建築的靈魂，選擇合適的建築材料至關重要。', text3: '細節中見真章，注重每一個細節。' },
  { id: '4', text1: '大器，藏於細節之中', text2: '無法言喻卻又無比清晰的工藝內涵', text3: '' },
  { id: '5', text1: '', text2: '', text3: '' },
  { id: '6', text1: '和風建築，融合自然', text2: '優雅而自然，和風建築體現了日本人對自然美的崇尚。', text3: '建築物整體美學對自然致敬。' },
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
        <p class="text1">PREV</p>
      </div>
      <div class="line"></div>
      <div class="textGround" @click="next">
        <p class="text2">NEXT</p>
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

  p {
    margin-top: 15px;
    color: white;
  }
}

.control {
  position: absolute;
  bottom: 30px;
  right: 80px;
  display: flex;
  gap: 60px;
  z-index: 5;

  .line {
    height: 50px;
    width: 1px;
    background-color: white;
  }

}

.textGround {
  width: 80px;
  justify-content: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  .text1,
  .text2 {
    font-size: 16px;
    color: white;
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

.textGround:hover .text1 {
  transition: all 0.3s;
  color: var(--gold_1) !important;
  margin-left: 10px;
}


.textGround:hover .text2 {
  transition: all 0.3s;
  margin-right: 10px;
  color: var(--gold_1) !important;
}

.textGround:hover .arrow {
  border-color: transparent transparent transparent var(--gold_1) !important;
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
      background-color: var(--gold_1);
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
      color: white;
    }
  }
}

@media screen and (max-width:800px) {
  .control {
    display: none;
  }

  .lineControl {
    left: 50%;
    transform: translate(-50%, 0);
  }

}
</style>