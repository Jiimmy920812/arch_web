<script setup>
import Card from '../components/Card.vue'
const cardArr = [
  {
    position_right: false,
    img: "../../public/img/About/About_1.jpg",
    verticalText: 'CHIEN SHIH 初心',
    title: "建築的果實",
    content: "從選地開始，以精銳眼光挑選好的土地，並且在規劃與營造的每一個環節都投入百分百用心，只為了打造符合理想、美好舒適、內住實用的居家空間。「仰德建設」重視建築過程，每一件作品都傾力灌溉，歷年建築創作建構了成長與精進軌跡，也是最美好的綻放。"
  },
  {
    position_right: true,
    img: "../../public/img/About/About_2.jpg",
    verticalText: 'LAND擇地之學',
    title: "在好地方，蓋好房子",
    content: "建築於精華地段，追逐都市難得風景，是仰德式的固執。總不斷提升建築美學，讓家的價值最大化，不因時光流轉而褪去芒。創立至今，遴選地點時，總思量著發展性、生活機能、城市景觀，期待將仰德作品遍佈於區域亮點之上。"
  },
  {
    position_right: false,
    img: "../../public/img/About/About_3.jpg",
    verticalText: 'LAND ARCHITECT雙建築師',
    title: "雙建築師團隊，1+1＞2的效果。",
    content: "有別於一般建設公司，採用單建築師設計全案。仰德建設特別選用雙建築師，順應生活氣息的建築師尤炯仁與形塑城市美學的建築家陳建宏分工合作、各司其職，只因相信術業有專攻，好可以再更好。由專業建築師團隊打造，每場作品的結構皆安穩扎實，建築外觀細膩而雅致，呈現最具匠心的建築，實現仰德品味。"
  },
  {
    position_right: true,
    img: "../../public/img/About/About_4.jpg",
    verticalText: 'CONSTRUCTION安全結構',
    title: "看不到的細節，安全，始終是仰德的第一順位",
    content: "仰德建設對於每個案子的地下連續壁工程不斷要求加深、加厚，並加入逆打鋼柱等多項安心工法，追求最高的安全性。選料上，仰德建設採用台灣第一品牌 台灣水泥造出適合「長居」的家，即使工期更長，也因承擔的是客戶一輩子的依靠，所以甘之如飴。"
  },
  {
    position_right: false,
    img: "../../public/img/About/About_5.jpg",
    verticalText: 'YOUNG DER 足跡',
    title: "超越自己，邁向巔峰",
    content: "成立二十餘年，始終秉持誠懇踏實的態度，在高雄深耕細耘，基於對這片土地與鄉親的情感，以追求更舒適美好的生活品質為目標。透過每一次創作，不斷挑戰自己，累積堆疊經驗，期許再一次超越，沿續著二十餘年歲月的考驗與淬鍊，建築人注入了創新與熱情，土地整合、 建築規劃、營造興建...等過程，是寶貴經驗傳承的開始。"
  }
]

const planImg = [
  "../../public/img/About/plan_1.jpg",
  "../../public/img/About/plan_2.jpg",
  "../../public/img/About/plan_3.jpg",
  "../../public/img/About/plan_4.jpg",
  "../../public/img/About/plan_5.jpg",
  "../../public/img/About/plan_6.jpg",
]
</script>

<template>
  <div class="section1">
    <img src="../../public/img/About/main.jpg" alt="">
    <div class="textGround center">
      <p class="title">ABOUT CHIEN SHIH</p>
      <div class="line"></div>
      <p>從一棟房屋到千百戶家庭的託付<br />
        從一步腳印到深情足跡遍布高雄<br />
        從一滴靈感到涓滴成流的建築理念<br />
        時間的種子，發芽，茁壯成建興的年輪一次又一次的付出<br />
        只為成就幸福生活</p>
    </div>
    <div class="section2 center" v-for="value, index in cardArr" :key="index">
      <Card :position_right="value.position_right" :img="value.img" :verticalText='value.verticalText'
        :title='value.title' :content="value.content" />
    </div>
    <div class="section3">
      <div class="line"></div>
      <p>初衷，未滅。我們很清楚，譁眾取寵的房子並非永續之路；我們一致追求，在無可取代的地段 佇立著內涵文化底蘊的外觀-仰德式建築。</p>
    </div>
    <div class="section4 center">
      <div class="imgBg" :key="index" v-for="img, index in planImg">
        <img :src="img" alt="">
      </div>
      <div class="textGround">
        <p>身、心、靈、的生活感受發想於堅實建築的錨點<br>
          完美創作與貼切創意規劃，賦予建築舒適、溫馨、享受的生命體<br>
          讓建築最終呈現在時代的特色與人文生活的結合
        </p>
        <div class="lastText">
          <div class="line"></div>
          <p>BRAND CONCEPT</p>
          <div class="line"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
.section1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  img {
    width: 100%;
    height: auto;
  }

  .line {
    height: 1.5px;
    width: 500px;
    background-color: var(--line_Gray);
  }

  .title {
    font-size: 18px;
    color: var(--gold_1);
    letter-spacing: 5px;
  }

  .textGround {
    text-align: center;
    flex-direction: column;
    line-height: 2;
    gap: 10px;
  }
}

.section3 {
  margin-top: 80px;
  margin-bottom: 80px;
  width: 60%;
  height: 70px;
  background-color: var(--black_1);
  background-image: url('../../public/img/menu-line.png');
  display: flex;
  align-items: center;
  padding: 30px;
  gap: 20px;

  p {
    font-size: 18px;
    width: 85%;
    color: white
  }

  .line {
    margin-left: 100px;
    width: 1.5px;
    height: 100%;
    background-color: var(--gold_1);
  }
}


.section4 {
  width: 60%;
  height: 60%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  .imgBg {
    margin: 0.5%;
    width: 25%;
    height: auto;
  }

  .textGround {
    text-align: center;

    .lastText {
      margin-top: 80px;
      margin-bottom: 100px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;

      p {
        color: var(--gold_1);
        letter-spacing: 15px;
      }

      .line {
        height: 1.5px;
        width: 60px;
        background-color: var(--gold_1);
      }
    }
  }

}
</style>
