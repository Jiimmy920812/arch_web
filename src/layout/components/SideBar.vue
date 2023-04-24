<script setup>
import gsap from 'gsap'
import { ref } from 'vue';


const isActive =ref(false)

const arrlink = [
    {name:'首頁',href:'/'},
    {name:'關於建興',href:'/About'},
    {name:'建興工學',href:'/Tech'},
    {name:'建案介紹',href:'/Introduce'},
    {name:'聯絡我們',href:'/Contact'}
]



const innerIndex = (index)=>{
    return `inner${index+1} `
}

function onEnter(el, done) {
  gsap.from(el, {
    opacity: 1,
    duration:0.5,
    x:450,
    }),
  gsap.to(el, {
    opacity: 1,
    duration:0.5,
    x:0,
    }),
    gsap.from('.inner1', {
    opacity: 0,
    x:500,
    delay: 0.1,
    }),
    gsap.from('.inner2', {
    opacity: 0,
    x:500,
    delay: 0.2,
    }),
    gsap.from('.inner3', {
    opacity: 0,
    x:500,
    delay: 0.3,
    }),
    gsap.from('.inner4', {
    opacity: 0,
    x:500,
    delay: 0.4,
    }),
    gsap.from('.inner5', {
    opacity: 0,
    x:500,
    delay: 0.5,
    }),


    gsap.to('.inner1', {
    opacity: 1,
    x:100,
    delay: 0.1,
    }),
    gsap.to('.inner2', {
    opacity: 1,
    x:100,
    delay: 0.2,
    }), 
    gsap.to('.inner3', {
    opacity: 1,
    x:100,
    delay: 0.3,
    })
    gsap.to('.inner4', {
    opacity: 1,
    x:100,
    delay: 0.4,
    })
    gsap.to('.inner5', {
    opacity: 1,
    x:100,
    delay: 0.5,
    onComplete: done
    })
    }
function  onLeave(el, done) {
    gsap.to(el, {
    opacity: 0,
    duration:0.5,
    x:300,
    delay: 0.2,
    onComplete: done
    })
 }  
</script>

<template>
 <div class="menuGround">
      <p class="menuText">M E N U</p>
      <div class="sideBarGround">
        <div class="menu" :class="{'active':isActive}" @click="isActive=!isActive">
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>

    <div class="hamburgerMenu">
        <Transition name="slide-fade"
                    @enter="onEnter"
                    @leave="onLeave"
                > 
                    <ul class="linkGround" v-if="isActive">
                        <li v-for="value,index in arrlink" :key="index" :class="innerIndex(index)">
                          <router-link :to="value.href"> {{ value.name }}</router-link>
                            <!-- <a :href="value.href">{{ value.name }}</a> -->
                        </li>
                    </ul> 
        </Transition>
    </div> 
  </div>
</template>

<style lang="scss">

.menuGround{
  position: absolute;
  justify-content: end;
  height: 100px;
  width: 200px;
  display: flex;
  align-items: center;
}
.menuText{
  font-size: 20px;
  color: white;
  font-weight: bolder;
}


.hamburgerMenu{
  position: absolute;
  top: 0px;
  right: -50px;
  width: 450px;
  height: 100vh;
  
  overflow: hidden;
  z-index: -1;
  .linkGround{
        display: flex;
        gap: 20px;
        position: absolute;
        top: 0;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        width: 450px;
        height: 100vh;
        background-color: #111;
        background-image: url('../../assets/img/menu-line.png');
        list-style: none;
        z-index: 3;
        opacity: 0.8;
    }
}

    .linkGround a{
        text-decoration: none;
        font-size: 18px;
        color: rgba(255, 255, 255, 0.70);
    }

    .linkGround a:hover{
        color: #cc9b55;
    }

    .menu {
        width: 22px;
        height: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        margin: 20px;
    }

    .menu span {
        width: 100%;
        height: 2px;
        border-radius: 99px;
        background: rgb(255, 255, 255);
        transition: 0.3s ease;
        transform-origin: left;
    }

    /* menu icon 動畫 */
    .menu.active span:nth-child(1) {
        transform: rotate(40deg);
    }

    .menu span:nth-child(3) {
        transform-origin: left;
    }

    .menu.active span:nth-child(3) {
        transform: rotate(-40deg);
    }

    .menu.active span:nth-child(2) {
        transform: scale(0);
    }
    
</style>


<style lang="scss">

</style>
