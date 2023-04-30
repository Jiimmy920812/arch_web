<script setup>
const props = defineProps({
    img: {
        type: String,
        default: '',
    },
    title: {
        type: String,
        default: '籌備中',
    },
    content: {
        type: String,
        default: '',
    },
})
</script>

<template>
    <main>
        <div class="photoSize center">
            <div class="photo center" :style="{ backgroundImage: `${props.img}` }"></div>
            <p class="text">{{ props.title }}</p>
            <p class="text_content">{{ props.content }}</p>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6vw;
}

.photoSize {
    flex-direction: column;
    position: relative;
    cursor: pointer;
    width: 55vw;
    height: 46vw;
    border: 4px double #eab76e;
}

.photo {
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.text {
    font-size: 52px;
    color: var(--gold_1);
    margin-bottom: 12px;
}

.text_content {
    font-size: 18px;
    color: white;
}



.photoSize:hover .photo {
    transition: all 0.5s;
    opacity: 1;
}



.photoSize:hover .text {
    transition: all 0.5s;
    opacity: 0;
}



.photoSize:hover .text_content {
    transition: all 0.5s;
    opacity: 0;
}

@media screen and (max-width:600px) {
    .photoSize {
        width: 60vw;
        height: 50vw;
    }
}

@media screen and (max-width:880px) {
    .text {
        font-size: 40px;
    }
}


</style>
