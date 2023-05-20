<script setup>
import HomePanel from './HomePanel/index.vue'
// 导入封装好的卡片组件
import GoodsItem from "@/views/Home/components/GoodsItem/index.vue";
// 导入接口
import { getGoodsAPI } from "@/apis/home";
import { onMounted, ref } from "vue";
// 提前准备数据
const goodsProduct = ref([])

// 封装成函数请求接口
const getGoodsList = async () => {
    const res = await getGoodsAPI()
    goodsProduct.value = res.result
}

// 组件挂载完毕请求调用函数请求接口
onMounted(() => {
    getGoodsList()
})


</script>

<template>
    <div class="home-product">
        <HomePanel :title="cate.name" v-for="cate in goodsProduct" :key="cate.id">
            <div class="box">
                <RouterLink class="cover" to="/">
                    <img v-img-lazy="cate.picture" />
                    <strong class="label">
                        <span>{{ cate.name }}馆</span>
                        <span>{{ cate.saleInfo }}</span>
                    </strong>
                </RouterLink>
                <ul class="goods-list">
                    <GoodsItem :good="good" ></GoodsItem>
                </ul>
            </div>
        </HomePanel>
    </div>
</template>

<style scoped lang='scss'>
.home-product {
    background: #fff;
    margin-top: 20px;

    .sub {
        margin-bottom: 2px;

        a {
            padding: 2px 12px;
            font-size: 16px;
            border-radius: 4px;

            &:hover {
                background: $xtxColor;
                color: #fff;
            }

            &:last-child {
                margin-right: 80px;
            }
        }
    }

    .box {
        display: flex;

        .cover {
            width: 240px;
            height: 610px;
            margin-right: 10px;
            position: relative;

            img {
                width: 100%;
                height: 100%;
            }

            .label {
                width: 188px;
                height: 66px;
                display: flex;
                font-size: 18px;
                color: #fff;
                line-height: 66px;
                font-weight: normal;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translate3d(0, -50%, 0);

                span {
                    text-align: center;

                    &:first-child {
                        width: 76px;
                        background: rgba(0, 0, 0, 0.9);
                    }

                    &:last-child {
                        flex: 1;
                        background: rgba(0, 0, 0, 0.7);
                    }
                }
            }
        }

        .goods-list {
            width: 990px;
            display: flex;
            flex-wrap: wrap;

            li {
                width: 240px;
                height: 300px;
                margin-right: 10px;
                margin-bottom: 10px;

                &:nth-last-child(-n + 4) {
                    margin-bottom: 0;
                }

                &:nth-child(4n) {
                    margin-right: 0;
                }
            }
        }


    }
}
</style>