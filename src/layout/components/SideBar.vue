<script setup>
import gsap from 'gsap'
import { ref } from 'vue';

import { useRouter } from 'vue-router';
const router = useRouter();

const isShow = ref(false)
const isActive = ref(false)
const isSemiRouter = ref(false)

const props = defineProps({
    isScroll: {
        type: Boolean,
        default: false,
    }
})


function onEnter(el, done) {
    gsap.from(el, { opacity: 1, duration: 0.5, x: 450, }),
        gsap.to(el, { opacity: 1, duration: 0.5, x: 0, }),
        gsap.from('.inner1', { opacity: 0, x: 500, delay: 0.1, }),
        gsap.from('.inner2', { opacity: 0, x: 500, delay: 0.2, }),
        gsap.from('.inner3', { opacity: 0, x: 500, delay: 0.3, }),
        gsap.from('.inner4', { opacity: 0, x: 500, delay: 0.4, }),
        gsap.from('.inner5', { opacity: 0, x: 500, delay: 0.5, }),
        gsap.to('.inner1', { opacity: 1, x: 100, delay: 0.1, }),
        gsap.to('.inner2', { opacity: 1, x: 100, delay: 0.2, }),
        gsap.to('.inner3', { opacity: 1, x: 100, delay: 0.3, })
    gsap.to('.inner4', { opacity: 1, x: 100, delay: 0.4, })
    gsap.to('.inner5', { opacity: 1, x: 100, delay: 0.5, onComplete: done })
}
function onLeave(el, done) {
    gsap.to(el, { opacity: 0, duration: 0.5, x: 300, delay: 0.2, onComplete: done })
}

function menuClick() {
    isSemiRouter.value = false
    isShow.value = !isShow.value
    setTimeout(() => {
        isActive.value = !isActive.value
    }, 100)
}
</script>

<template>
    <div class="menuGround">
        <p class="menuText"
            :class="{ blackText: router.currentRoute.value.path !== '/' && router.currentRoute.value.path !== '/Introduce', whiteText: isShow || props.isScroll }">
            M E N U</p>
        <div class="sideBarGround">
            <div class="menu" :class="{ 'active': isActive }" @click="menuClick">
                <span
                    :class="{ blackSpan: router.currentRoute.value.path !== '/' && router.currentRoute.value.path !== '/Introduce', whiteSpan: isShow || props.isScroll }"></span>
                <span
                    :class="{ blackSpan: router.currentRoute.value.path !== '/' && router.currentRoute.value.path !== '/Introduce', whiteSpan: isShow || props.isScroll }"></span>
                <span
                    :class="{ blackSpan: router.currentRoute.value.path !== '/' && router.currentRoute.value.path !== '/Introduce', whiteSpan: isShow || props.isScroll }"></span>
            </div>
        </div>

        <div class="hamburgerMenu" v-if="isShow">
            <Transition name="slide-fade" @enter="onEnter" @leave="onLeave">
                <ul class="linkGround" v-if="isActive">
                    <li class="inner1">
                        <RouterLink to="/" @click="menuClick">首頁</RouterLink>
                    </li>
                    <li class="inner2">
                        <RouterLink to="/About" @click="menuClick">關於建興</RouterLink>
                    </li>
                    <li class="inner3">
                        <div class="mainRouter">
                            <RouterLink to="/Tech" @click="menuClick">建興工學</RouterLink>
                            <div class="icon" @click="isSemiRouter = !isSemiRouter" :class="{ iconReverse: isSemiRouter }">
                            </div>
                        </div>
                        <transition name="semiRouter-slide">
                            <div class="semiRouter" v-if="isSemiRouter">
                                <RouterLink to="/Tech_arch" @click="menuClick">建築工法</RouterLink>
                                <RouterLink to="/Tech_material" @click="menuClick">嚴選建材</RouterLink>
                                <RouterLink to="/Tech_team" @click="menuClick">建興團隊</RouterLink>
                            </div>
                        </transition>
                    </li>
                    <li class="inner4">
                        <RouterLink to="/Introduce" @click="menuClick">建案介紹</RouterLink>
                    </li>
                    <li class="inner5">
                        <RouterLink to="/Contact" @click="menuClick">聯絡我們</RouterLink>
                    </li>
                </ul>
            </Transition>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.blackText {
    color: black !important;
}

.blackSpan {
    background: rgb(0, 0, 0) !important;
}

.whiteText {
    color: white !important;
}

.whiteSpan {
    background: rgb(255, 255, 255) !important;
}


.menuGround {
    position: fixed;
    justify-content: end;
    padding-right: 50px;
    top: 0;
    right: 0;
    height: 100px;
    width: 450px;
    display: flex;
    align-items: center;

    .menuText {
        font-size: 20px;
        color: white;
        font-weight: bolder;
    }

}



.hamburgerMenu {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 450px;
    height: 100vh;
    overflow: hidden;
    z-index: -4;

    .linkGround {
        display: flex;
        gap: 35px;
        position: absolute;
        flex-direction: column;
        align-items: start;
        width: 450px;
        height: 100vh;
        background-color: var(--black_1);
        background-image: url('../../assets/img/menu-line.png');
        list-style: none;
        z-index: 3;
        opacity: 0.8;

        .inner1 {
            margin-top: 20vh;
        }
    }
}



.mainRouter {
    display: flex;
    align-items: center;
    gap: 80px;

    .icon {
        border-style: solid;
        border-width: 8px 8px 0 8px;
        border-color: white transparent transparent transparent;
        cursor: pointer;
    }

    .iconReverse {
        rotate: (180deg);
    }
}

.semiRouter {
    margin-top: 20px;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}



.linkGround a {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.70);
}

.linkGround a:hover {
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

.semiRouter-slide-enter-active {
    transition: all 0.3s ease-out;
}

.semiRouter-slide-leave-active {
    transition: all 0.3s ease-out;
}

.semiRouter-slide-enter-from,
.semiRouter-slide-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>


