<script setup>
import { ref } from 'vue';
import Card_Plan from '../components/Card_Plan.vue'
import pagination from '../components/Pagination.vue'

const cardArr = [
  {
    type: 'arch',
    img: "src/assets/img/Tech/Tech_arch_1.jpg",
    verticalText: '建築工法',
    title: "高雄厝綠建築",
    date: '2021-10-28',
    content: "「高雄厝」不是只有大陽台！為了打造人性化室內外居住空間，除了大家第一直覺聯想到的景觀陽台外，高雄厝設計還包含通用化設計空間、綠能設施等。"
  },
  {
    type: 'team',
    img: "src/assets/img/Tech/Tech_team_1.jpg",
    verticalText: '建興團隊',
    title: "匯聚頂尖名師，成就永續建築",
    date: '2021-08-16',
    content: "由專業建築師團隊打造，每場作品的結構皆安穩扎實，建築外觀細膩而雅致，呈現最具匠心的建築，實現仰德品味。"
  },
  {
    type: 'team',
    img: "src/assets/img/Tech/Tech_material_1.jpg",
    verticalText: '嚴選建材',
    title: "德國DUKER鑄鐵管",
    date: '2021-09-13',
    content: ""
  },
  {
    type: 'material',
    img: "src/assets/img/Tech/Tech_material_2.jpg",
    verticalText: '嚴選建材',
    title: "嚴選建材日本YKK AP氣密窗",
    date: '2021-08-16',
    content: "特選YKK氣密窗，保障居家品質。 高超水密技術，將濕氣擋在窗外。 出色的隔音，降低噪音不讓外界打擾。 聽不見世界吵雜，重拾身體的沈淨。 真正能量，是由內而外。"
  },
  {
    type: 'material',
    img: "src/assets/img/Tech/Tech_material_3.jpg",
    verticalText: '嚴選建材',
    title: "日本住友(SUMITOMO)制震器",
    date: '2021-08-09',
    content: "「制震壁」是在建築的上下樑柱之間裝設鋼板，鋼板中間含有橡膠或其他化學聚合性黏彈材，能吸收地震部分能量，進而降低搖晃程度。"
  },
  {
    type: 'material',
    img: "src/assets/img/Tech/Tech_material_4.jpg",
    verticalText: '嚴選建材',
    title: "加拿大DURA隔音墊",
    date: '2021-08-09',
    content: "改善樓板衝擊音的最佳方案便是在建築階段就超前佈署，施作樓板隔音墊。防患於未然，多加一片隔音墊作為降噪緩衝材，不僅吸收噪音，更有減少樓板震動的效果。"
  },
  {
    type: 'material',
    img: "src/assets/img/Tech/Tech_material_5.jpg",
    verticalText: '嚴選建材',
    title: "荷蘭Poll-tex® 普特絲防霾透氣紗網",
    date: '2021-07-22',
    content: "仰德建設用無微不至的視角，提前安排。使用可防霾的 #Poll-tex紗窗，阻隔空氣中細懸浮微粒，阻隔率高達85%以上。 頂級紡織工藝技術，編織一張微米級靜電過濾紗網。 透過雙重攔截..."
  }
]

const currentPage = ref(1)


</script>

<template>
  <div class="TechBg">
    <div class="section1 center" v-for="value, index in cardArr" :key="index">
      <Card_Plan :img="value.img" :verticalText='value.verticalText' :title='value.title' :date="value.date"
        :content="value.content" />
    </div>
    <div class="pagination">
      <pagination :currentPage="currentPage" :dataTotal="30" :pageSize="6" />
    </div>

  </div>
</template>

<style lang="scss">
.TechBg {
  margin-top: 150px;
}

.pagination {
  width: 100%;
  height: 200px;
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
