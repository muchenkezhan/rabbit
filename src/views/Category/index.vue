<script setup>
import { onMounted, ref } from "vue";
import { getCategoryAPI } from "@/apis/category";
import { getBannerAPI } from "@/apis/home";
import { useRoute,onBeforeRouteUpdate } from "vue-router";
import GoodsItem from "@/views/Home/components/GoodsItem/index.vue";

// 获取分类数据
const categoryData = ref({})
// 调用useRoute方法得到一个route实例对象
// 相当于vue2中的：this.$route.params.id
const route = useRoute()

// route.params.id  : 会得到当前路由的params参数  相当于vue2中的this.$router.params.id

// 准备state  存储轮播图
const bannerlist = ref([])
// 发送请求
const getBanner = async () => {
    const res = await getBannerAPI({
        distributionSite: '2'
    })
    bannerlist.value = res.result
}

const categorylist = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
}

onMounted(() => {
    categorylist()
    getBanner()
})

//在当前路由改变，但是该组件被复用时调用
onBeforeRouteUpdate((to)=>{
    // 请求最新的列表数据
    categorylist(to.params.id)
})

</script>

<template>
    <div class="top-category">
        <div class="container m-top-20">
            <!-- 面包屑 -->
            <div class="bread-container">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <!-- 轮播图 -->
            <div class="home-banner">
                <el-carousel height="500px">
                    <el-carousel-item v-for="item in bannerlist" :key="item">
                        <img :src="item.imgUrl" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <!-- 列表数据 -->
            <div class="sub-list">
                <h3>全部分类</h3>
                <ul>
                    <li v-for="i in categoryData.children" :key="i.id">
                        <RouterLink to="/">
                            <img :src="i.picture" />
                            <p>{{ i.name }}</p>
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
                <div class="head">
                    <h3>- {{ item.name }}-</h3>
                </div>
                <div class="body">
                    <GoodsItem v-for="good in item.goods" :good="good" :key="good.id" />
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.top-category {
    h3 {
        font-size: 28px;
        color: #666;
        font-weight: normal;
        text-align: center;
        line-height: 100px;
    }

    .sub-list {
        margin-top: 20px;
        background-color: #fff;

        ul {
            display: flex;
            padding: 0 32px;
            flex-wrap: wrap;

            li {
                width: 168px;
                height: 160px;


                a {
                    text-align: center;
                    display: block;
                    font-size: 16px;

                    img {
                        width: 100px;
                        height: 100px;
                    }

                    p {
                        line-height: 40px;
                    }

                    &:hover {
                        color: $xtxColor;
                    }
                }
            }
        }
    }

    .ref-goods {
        background-color: #fff;
        margin-top: 20px;
        position: relative;

        .head {
            .xtx-more {
                position: absolute;
                top: 20px;
                right: 20px;
            }

            .tag {
                text-align: center;
                color: #999;
                font-size: 20px;
                position: relative;
                top: -20px;
            }
        }

        .body {
            display: flex;
            justify-content: space-around;
            padding: 0 40px 30px;
        }
    }

    .bread-container {
        padding: 25px 0;
    }
}

.home-banner {
    width: 1240px;
    height: 500px;
    margin: auto 0;
    left: 0;
    top: 0;
    z-index: 98;

    img {
        width: 100%;
        height: 500px;
    }
}
</style>