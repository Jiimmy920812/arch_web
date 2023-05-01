<script setup>
import { ref } from 'vue';
import Card_introduce from '../components/Card_introduce.vue'
import Card_introduce_row from '../components/Card_introduce_row.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Mousewheel, Pagination } from 'swiper';

const modules = [Mousewheel, Pagination]
const isShow = ref(false)
const resizewidth = ref(null)
const viewportWidth = ref(window.innerWidth);


function viewtWidth() {
  if (viewportWidth.value < 900) isShow.value = false
  if (viewportWidth.value > 900 || viewportWidth.value < 500) isShow.value = true
}
viewtWidth()


window.onresize = function () {
  resizewidth.value = window.innerWidth;
  if (resizewidth.value < 900) isShow.value = false
  if (resizewidth.value > 900 || resizewidth.value < 500) isShow.value = true
};






const introduceArr = [
  {
    img: "url('../../public/img/plan/plan_1.jpg')",
    title: "建興-駁二",
    content: '',
  },
  {
    img: "url('../../public/img/plan/plan_2.jpg')",
    title: "建興-絜",
    content: '陽明學區 文山特區',
  },
  {
    img: "url('../../public/img/plan/plan_3.jpg')",
    title: "建興-文",
    content: '',
  },
  {
    img: "url('../../public/img/plan/plan_4.jpg')",
    title: "建興-漾",
    content: '美術館海景第一排',
  },
  {
    img: "url('../../public/img/plan/plan_5.jpg')",
    title: "建興-昕",
    content: '',
  },
  {
    img: "url('../../public/img/plan/plan_6.jpg')",
    title: "建興-玄碩",
    content: '前鎮軟體園區',
  },
  {
    img: "url('../../public/img/plan/plan_7.jpg')",
    title: "建興-悅界",
    content: '高雄新灣區',
  },
  {
    img: "url('../../public/img/plan/plan_8.jpg')",
    title: "建興-望海",
    content: '愛河左岸旁',
  },
  {
    img: "url('../../public/img/plan/plan_9.jpg')",
    title: "建興-湛參庫",
    content: '',
  }
]


const introduceArr_row = [
  {
    img_1: "url('../../public/img/plan/plan_1.jpg')",
    title_1: "建興-駁二",
    content_1: '',
    img_2: "url('../../public/img/plan/plan_2.jpg')",
    title_2: "建興-絜",
    content_2: '陽明學區 文山特區',
  },
  {
    img_1: "url('../../public/img/plan/plan_3.jpg')",
    title_1: "建興-文",
    content_1: '',
    img_2: "url('../../public/img/plan/plan_4.jpg')",
    title_2: "建興-漾",
    content_2: '美術館海景第一排',
  },
  {
    img_1: "url('../../public/img/plan/plan_5.jpg')",
    title_1: "建興-昕",
    content_1: '',
    img_2: "url('../../public/img/plan/plan_6.jpg')",
    title_2: "建興-玄碩",
    content_2: '前鎮軟體園區',
  },
  {
    img_1: "url('../../public/img/plan/plan_7.jpg')",
    title_1: "建興-悅界",
    content_1: '高雄新灣區',
    img_2: "url('../../public/img/plan/plan_8.jpg')",
    title_2: "建興-望海",
    content_2: '愛河左岸旁',
  },
  {
    img_1: "url('../../public/img/plan/plan_9.jpg')",
    title_1: "建興-湛參庫",
    content_1: '',
  }
]


</script>

<template>
  <swiper :direction="'vertical'" :slidesPerView="1" :mousewheel="true" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper">

    <swiper-slide v-if="isShow" v-for="v, index in introduceArr_row" :key="index">
      <Card_introduce_row :img_1="v.img_1" :title_1="v.title_1" :content_1="v.content_1" :img_2="v.img_2"
        :title_2="v.title_2" :content_2="v.content_2" />
    </swiper-slide>

    <swiper-slide v-if="!isShow" class="introduceArr" v-for="v, index in introduceArr" :key="index">
      <Card_introduce :img="v.img" :title="v.title" :content="v.content" />
    </swiper-slide>


  </swiper>
  <div class="footer">
    <p>
      <RouterLink to="/Introduce">拭目以待</RouterLink>
    </p>
    <p>
      <RouterLink to="/Introduce">近期建案</RouterLink>
    </p>
    <p>
      <RouterLink to="/Introduce">歷年建案</RouterLink>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background-color: var(--black_2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

:deep(.swiper-pagination) {
  right: 50px !important;
}


:deep(.swiper-pagination-bullet) {
  width: 3px;
  border-radius: 2px;
  height: 25px;
  background: white;
  margin: 10px 0px !important;
  cursor: pointer;
}

:deep(.swiper-pagination-bullet-active) {
  background: var(--gold_1);
}



.footer {
  gap: 10vw;
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: rgb(27, 27, 27);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  z-index: 10;

  a {
    letter-spacing: 10px;
    font-size: 16px;
    color: var(--text_Gray);
  }

  a:hover {
    color: white;
  }
}


@media screen and (max-width:500px) {
  .footer {
    a {
      letter-spacing: 3px;
      font-size: 14px;
    }
  }

}
</style>
