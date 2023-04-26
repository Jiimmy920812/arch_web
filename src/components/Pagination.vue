<script setup>
import { computed } from 'vue';

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

const currentPage = computed({
    get() {
        return props.currentPage;
    },
    set(val) {
        emits('page', val);
    },
});


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



</script>

<template>
    {{ currentPage }}
    {{ pageNumber }}
    <div class="el-pagination ">
        <button :disabled="currentPage === 1" @click="currentPage = 1">
            <div class="left"></div>
        </button>
        <ul class="el-pager">
            <li v-for="pageNumber, index in renderArr" :key="index" :class="{ 'is-active': currentPage == pageNumber }"
                class="number " @click="currentPage = pageNumber" @keydown="fn">{{ pageNumber }}</li>
        </ul>

        <button :disabled="currentPage === pageNum" @click="currentPage = pageNum">
            <div class="right"></div>
        </button>
    </div>
</template>

<style scoped lang="scss">
.el-pager {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border: 1px solid var(--black_1);
        list-style: none;
        margin: 10px;
        color: var(--text_Gray);
    }
}

.is-active {
    width: 42px !important;
    height: 42px !important;
    background-color: var(--gold_1);
    border: none !important;
    color: white !important;
}
</style>
