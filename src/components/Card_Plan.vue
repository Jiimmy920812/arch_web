<script setup>

const props = defineProps({
    position_right: {
        type: Boolean,
        default: false,
    },
    img: {
        type: String,
        default: '',
    },
    verticalText: {
        type: String,
        default: '',
    },
    title: {
        type: String,
        default: '',
    },
    date: {
        type: String,
        default: '',
    },
    content: {
        type: String,
        default: '',
    }
})



</script>

<template>
    <div class="cardBg" :class="{ cardBg_right: props.position_right }">
        <div class="photoGround">
            <div class="subTitle">
                <p class="verticalText" :class="{ verticalText_right: props.position_right }">{{ props.verticalText }}</p>
            </div>
            <div class="imgBg">
                <img :src="props.img" alt="">
            </div>
        </div>
        <div class="textBg" :class="{ textBg_right: props.position_right }">
            <div class="textGround">
                <p class="title">{{ props.title }}</p>
                <div class="dateGround">
                    <div class="dateIcon bgSetting"></div>
                    <p>{{ props.date }}</p>
                </div>
                <p class="content">{{ props.content }}</p>
                <div class="more center">MORE</div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.cardBg {
    padding: 89px;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 160px;
    border-bottom: 1px solid var(--line_Gray);
}


.photoGround {
    display: flex;

    .subTitle {
        position: relative;
    }
}

.verticalText {
    color: gray;
    position: absolute;
    width: 500px;
    text-align: center;
    top: 50%;
    left: -25px;
    transform: rotate(270deg) translate(-50%, -50%);
    transform-origin: top left;
    letter-spacing: 15px;
}

.imgBg {
    width: 458px;
    height: auto;

    img {
        width: 100%;
        height: 100%;
    }
}


.textBg {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
}

.textGround {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 15px;

    .title {
        width: 500px;
        font-size: 28px;
    }

    .dateGround {
        display: flex;
        align-items: center;
        gap: 20px;

        p {
            color: var(--gold_1);
            letter-spacing: 3px;
        }
    }

    .dateIcon {
        width: 20px;
        height: 20px;
        background-image: url('../../public/img/icons8-calendar-50.png');
    }

    .content {
        width: 100%;
        line-height: 2.5;
        text-align: start;
        color: gray;
    }

    .more {
        cursor: pointer;
        width: 140px;
        height: 50px;
        background-color: var(--gold_1);
        font-size: 18px;
        letter-spacing: 3px;
        color: white;
    }
}


.title:hover {
    cursor: pointer;
    color: var(--gold_1);
}

.more:hover {
    background-color: var(--black_1);
}
</style>
