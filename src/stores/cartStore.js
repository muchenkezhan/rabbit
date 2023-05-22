// 封装购物车模块
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    // 1.定义state  购物车列表
    const cartList = ref([])
    // 2.定义action - 方法
    const addCatr = (goods) => {
        // 添加购物车操作
        // 已添加  count+1
        // 思路：匹配传递过来的skuid是否在state数组中存在
        // 未添加-加入购物车
        const item = cartList.value.find(item => {
            return goods.skuId === item.skuId
        })
        if (item) {
            //加购了
            item.count++
        } else {
            //没有加购
            cartList.value.push(goods)
        }

    }
    // 3.导航栏购物车的删除功能
    // 思路：1.使用删除下标：splice
    const deleteCart = (index) => {
        cartList.value.splice(index, 1);
    }
    // 2.使用数组过滤方法  filter

    // 计算属性
    // 1.总数量  所有项的count之和
    const allCount = computed(() => {
        return cartList.value.reduce((a, c) => {
            return a + c.count
        }, 0)
    })

    // 2.总价  所有项的count*price
    const allPrice = computed(() => {
        return cartList.value.reduce((a, c) => {
            return a + c.count * c.price
        }, 0)
    })

    // 点击选中功能
    const ischeckbox = (skuId, selected) => {
        // 通过skuid找到需要修改的数据,把selected修改为传来的状态
        const item = cartList.value.find(item => {
           return  item.skuId === skuId
        })
        item.selected = selected
    }

    // 是否全选 计算属性
    const isAll =computed(()=>cartList.value.every(item=>item.selected))
    // 全选功能回调函数
    const isAllCheck =(e)=>{
        cartList.value.forEach(item=>{
            item.selected = e
        })
    }
    // 已选中的数量
    const selectedCount = computed(()=>{
        // filter： 获取所有满足条件的元素,提取成数组
        const filteredItem = cartList.value.filter((item)=>item.selected);
        // 拿到数组之后进行链式操作，把每个数组里面的 数量 提取出来然后相加
        console.log(filteredItem);
        return filteredItem.reduce((a,c)=>{
            return a + c.count
        }, 0)
    })
    // 已选中商品合计
    const selectedPrice = computed(() => {
        const filteredItems = cartList.value.filter(item => item.selected);
        return filteredItems.reduce((total, item) => {
          return total + item.count * item.price;
        }, 0);
      });
      
    
    return {
        cartList,
        addCatr,
        deleteCart,
        allCount,
        allPrice,
        ischeckbox,
        isAll,
        isAllCheck,
        selectedCount,
        selectedPrice
    }
}, {
    persist: true,
})