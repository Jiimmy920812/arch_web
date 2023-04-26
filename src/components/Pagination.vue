<script setup>
import { computed, ref, watch } from 'vue';

const emits = defineEmits(['page']);
const props = defineProps({
    dataTotal:
    {
        default: 30,
    },
    pageSize:
    {
        default: 6,
    },
    currentPage:
    {
        default: 1,
    },
});




const currentPage = ref(props.currentPage)

watch(() => currentPage.value, () => {
    emits('page', currentPage.value);
})

const pageNum = computed(() => Math.ceil(props.dataTotal / props.pageSize));



const renderArr = computed(() => {
    const arr = [];
    let newArr = [];

    for (let i = 1; i <= pageNum.value; i += 1) {
        arr.push(i);
    }
    if (currentPage.value % 10 !== 0) {
        newArr = arr.slice(currentPage.value - (currentPage.value % 10), currentPage.value - (currentPage.value % 10) + 10);
    }

    if (currentPage.value % 10 === 0) {
        newArr = arr.slice(currentPage.value - 10, currentPage.value);
    }
    return newArr;
});

function toTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

</script>

<template>
    <div class="el-pagination ">
        <ul class="el-pager">
            <button class="numbrerBg" :disabled="currentPage === 1" @click="currentPage = 1, toTop()">
                <div class="arrow left"></div>
            </button>
            <li v-for="pageNumber, index in renderArr" :key="index" :class="{ 'is-active': currentPage === pageNumber }"
                class="numbrerBg" @click="(currentPage = pageNumber), toTop()" @keydown="fn">{{ pageNumber }}
            </li>
            <button class="numbrerBg" :disabled="currentPage === pageNum" @click="currentPage = pageNum, toTop()">
                <div class="arrow right "></div>
            </button>
        </ul>
    </div>
</template>

<style scoped lang="scss">
button {
    background: none;
    cursor: pointer;
}

button:disabled {
    cursor: not-allowed;
}



.arrow {
    border: solid var(--text_Gray);
    border-width: 0px 3px 3px 0;
    display: inline-block;
    padding: 3px;
}

.right {
    transform: rotate(-45deg);
}

.left {
    transform: rotate(135deg);
}


.el-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
}

.is-active {
    width: 40px !important;
    height: 40px !important;
    background-color: var(--gold_1);
    border: none !important;
    color: white !important;
}

.numbrerBg {
    width: 40px;
    height: 40px;
    border: 1px solid var(--black_1);
    box-sizing: border-box;
}

.numbrerBg:hover {
    width: 40px;
    height: 40px;
    background-color: var(--gold_1);
    border: none !important;
    color: white !important;
}

.numbrerBg:hover .arrow {
    border: solid white;
    border-width: 0px 3px 3px 0;
}




.el-pager {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    li {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        list-style: none;
        color: var(--text_Gray);
    }
}
</style>
