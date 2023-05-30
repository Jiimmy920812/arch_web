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
                <p class="content">{{ props.content }}</p>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.cardBg {
    padding: 5rem 0px;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 40px;
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
    letter-spacing: 10px;
}

.imgBg {
    width: 350px;
    height: auto;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
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
    align-items: start;

    .title {
        font-size: 28px;
        text-align: left;
    }

    .content {
        width: 100%;
        line-height: 2.5;
        text-align: start;
        color: gray;
    }
}




//向右模式
.cardBg_right {
    flex-direction: row-reverse;
}

.verticalText_right {
    left: 370px;
}

.textBg_right {
    align-items: end;
}


@media screen and (max-width:1000px) {
    .textGround {
        width: 100%;
    }
}

@media screen and (max-width:800px) {
    .cardBg {
        flex-direction: column;
    }

    .photoGround {
        margin: 0 auto;
    }


}

@media screen and (max-width:550px) {
    .verticalText_right {
        left: -25px;
    }

    .photoGround {
        width: 100%;
        margin-left: 10%;
    }

    .imgBg {
        width: 90%;
    }

    .verticalText {
        letter-spacing: 5px;
        font-size: 14px;
    }

    .textGround {
        .title {
            font-size: 18px;
        }

        .content {
            font-size: 14px;
        }
    }



}</style>
