<script setup>
// 以24h热榜为例渲染模板
import { getchHotGoodsAPI } from "@/apis/detail";
import { useRoute } from "vue-router";
import { ref, onMounted ,computed} from "vue";
const route = useRoute()

// 用defineProps宏函数，接收props参数
const props = defineProps({
    hotType: {
        type: Number,
    },

})
// 适配title  1-24h热榜  2-周热榜
const title = {
    1:'24小时热榜',
    2:'周热榜'
}
//计算属性
const titleTeaxt=computed(()=>{
   return  title[props.hotType]
})

// 1.封装接口
// 2.调用接口渲染数据
const hotList = ref([])
const getHotList = async () => {
    const res = await getchHotGoodsAPI({
        id: route.params.id,
        type: props.hotType,
        limit: '5'
    })
    hotList.value = res.result
}

onMounted(() => {
    getHotList()
})
</script>


<template>
    <div class="goods-hot">
        <h3>{{ titleTeaxt }}</h3>
        <!-- 商品区块 -->
        <RouterLink :to="`/detail/${item.id}`" class="goods-item" v-for="item in hotList" :key="item.id">
            <img :src="item.picture" alt="" />
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="desc ellipsis">{{ item.desc }}</p>
            <p class="price">&yen;{{ item.price }}.00</p>
        </RouterLink>
    </div>
</template>


<style scoped lang="scss">
.goods-hot {
    h3 {
        height: 70px;
        background: $helpColor;
        color: #fff;
        font-size: 18px;
        line-height: 70px;
        padding-left: 25px;
        margin-bottom: 10px;
        font-weight: normal;
    }

    .goods-item {
        display: block;
        padding: 20px 30px;
        text-align: center;
        background: #fff;

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        .name {
            font-size: 16px;
        }

        .desc {
            color: #999;
            height: 29px;
        }

        .price {
            color: $priceColor;
            font-size: 20px;
        }
    }
}
</style>