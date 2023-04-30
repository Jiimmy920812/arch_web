<script setup>
import { ref } from 'vue';
import gsap from 'gsap'

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Mousewheel, Pagination, } from 'swiper';

const modules = [Mousewheel, Pagination,]

const imageID = ref(0)
function currentPageAnimate() {
  if (!gsap.isTweening('#currentPage')) {
    gsap.from('#currentPage', { duration: 0.2, y: 20, opacity: 0 })
    gsap.to('#currentPage', { duration: 0.2, y: 0, opacity: 1, })
  }
}

//自訂義swiper函數
const swiperInstance = ref()
function onSwiper(swiper) {
  swiperInstance.value = swiper
}

//切頁執行fn
function onSlideChange() {
  imageID.value = swiperInstance.value.activeIndex
  currentPageAnimate()
}


function next() {
  swiperInstance.value.slideNext()
  currentPageAnimate()
}

function prev() {
  swiperInstance.value.slidePrev()
  currentPageAnimate()
}

const homeArr = [
  {
    id: '1',
    text1: '取得珍貴土地、雲集頂尖建築團隊更是邁向新里程的第一步。',
    text2: "一切，只為了打造無愧土地情感與記憶",
    text3: '足以傳承品牌精神的理想建築',
    img: `url(img/Home/home_page_1.jpg)`
  },
  {
    id: '2',
    text1: '壯闊的外牆',
    text2: '光線、風景、材料和細節，打造出寧靜與和諧的氛圍。',
    text3: '遇見建築的點綴之美。',
    img: `url(img/Home/home_page_2.jpg)`
  },
  {
    id: '3',
    text1: '材料美學，建築之魂',
    text2: '材料是建築的靈魂，選擇合適的建築材料至關重要。',
    text3: '細節中見真章，注重每一個細節。',
    img: `url(img/Home/home_page_3.jpg)`
  },
  {
    id: '4',
    text1: '大器，藏於細節之中',
    text2: '無法言喻卻又無比清晰的工藝內涵',
    text3: '',
    img: `url(img/Home/home_page_4.jpg)`
  },
  {
    id: '5',
    text1: '',
    text2: '',
    text3: '',
    img: `url(img/Home/home_page_5.jpg)`
  },
  {
    id: '6',
    text1: '和風建築，融合自然',
    text2: '優雅而自然，和風建築體現了日本人對自然美的崇尚。',
    text3: '建築物整體美學對自然致敬。',
    img: `url(img/Home/home_page_6.jpg)`
  },
]


</script>


<template>
  <div class="bg">
    <swiper @slideChange="onSlideChange" @swiper="onSwiper" :mousewheel="true" :pagination="{
        clickable: true,
      }" :modules="modules" class="mySwiper">
      <swiper-slide v-for="value, index in homeArr" :key="index">
        <div class="carousel" :style="{ backgroundImage: `${value.img}` }">
          <p>{{ value.text1 }}</p>
          <p>{{ value.text2 }}</p>
          <p>{{ value.text3 }}</p>
        </div>
      </swiper-slide>
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
      <div class="number">
        <p id="currentPage">{{ imageID + 1 }}</p>
        <p>/</p>
        <p>{{ homeArr.length }}</p>
      </div>
    </swiper>
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
  height: 100%;
  background-color: black;
}


.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.swiper-pagination) {
  bottom: 40px;
  left: 40px;
  display: flex;
  position: absolute;
  gap: 7px;
  align-items: center;
}


:deep(.swiper-pagination-bullet) {
  width: 30px;
  height: 4px;
  border-radius: 2px;
  background: white;
  margin: 10px 0px !important;
  cursor: pointer;

}

:deep(.swiper-pagination-bullet-active) {
  background: var(--gold_1);
}



.number {
  bottom: 43px;
  left: 265px;
  display: flex;
  position: fixed;
  width: 50px;
  height: 20px;
  overflow: hidden;
  gap: 10px;
  display: flex;

  p {
    font-size: 14px;
    color: white;
  }
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
  z-index: 20;

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
  flex-direction: row;
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
  color: var(--gold_1) !important;
  transition: all 0.3s;
  margin-left: 10px;
}


.textGround:hover .text2 {
  color: var(--gold_1) !important;
  transition: all 0.3s;
  margin-right: 10px;
}

.textGround:hover .arrow {
  border-color: transparent transparent transparent var(--gold_1) !important;
}



@media screen and (max-width:800px) {
  .control {
    display: none;
  }

  p {
    // text-align: center;
    width: 70vw;
  }
}
</style>