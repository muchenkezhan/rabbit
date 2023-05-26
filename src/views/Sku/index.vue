<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
<<<<<<< HEAD
=======
import powerSet from "./power-set";
>>>>>>> master
// 商品数据
const goods = ref({})
const getGoods = async () => {
  // 1135076  初始化就有无库存的规格
  // 1369155859933827074 更新之后有无库存项（蓝色-20cm-中国）
<<<<<<< HEAD
  const res = await axios.get('http://pcapi-xiaotuxian-front-devtest.itheima.net/goods?id=1369155859933827074')
  goods.value = res.data.result
=======
  const res = await axios.get('http://pcapi-xiaotuxian-front-devtest.itheima.net/goods?id=1135076')
  goods.value = res.data.result
  const pathMap = getPathMap(goods.value)
  console.log(pathMap);
  initDisabledState(goods.value.specs,pathMap)

>>>>>>> master
}
onMounted(() => getGoods())

// 点击active
<<<<<<< HEAD
const changeSelectedStatus = (item,val)=>{
    // item： 同排对象
    // val： 点击对象
    if(val.selected){
        // 自己是false就为true
        val.selected= false
    }else{
        // 1.取消兄弟们激活
        item.values.forEach(item => {
            item.selected=false
        });
        // 2.激活自己
        val.selected = true
    }
    
}

// 生产有效字典
const getPathMap = (goods)=>{
    // 1.根据sku字段生产有效的sku数组
    const effectiveSkus =goods.skus.filter(item=>{
        return sku.inventory > 0
    })

    // 2.根据上面得到的有效的sku得到算法（子集算法）
}

=======
const changeSelectedStatus = (item, val) => {
  if(val.disabled) return
  // item： 同排对象
  // val： 点击对象
  if (val.selected) {
    // 自己是false就为true
    val.selected = false
  } else {
    // 1.取消兄弟们激活
    item.values.forEach(item => {
      item.selected = false
    });
    // 2.激活自己
    val.selected = true
  }

}

// 生产有效字典
// 创建生成路径字典对象函数
const getPathMap = (goods) => {
  const pathMap = {}
  // 1. 得到所有有效的Sku集合 
  const effectiveSkus = goods.skus.filter(sku => sku.inventory > 0)
  // 2. 根据有效的Sku集合使用powerSet算法得到所有子集 [1,2] => [[1], [2], [1,2]]
  effectiveSkus.forEach(sku => {
    // 2.1 获取可选规格值数组
    const selectedValArr = sku.specs.map(val => val.valueName)
    // 2.2 获取可选值数组的子集
    const valueArrPowerSet = powerSet(selectedValArr)
    // 3. 根据子集生成路径字典对象
    // 3.1 遍历子集 往pathMap中插入数据
    valueArrPowerSet.forEach(arr => {
      // 根据Arr得到字符串的key，约定使用-分割 ['蓝色'，'美国'] => '蓝色-美国'
      const key = arr.join('-')
      // 给pathMap设置数据
      if (pathMap[key]) {
        pathMap[key].push(sku.id)
      } else {
        pathMap[key] = [sku.id]
      }
    })
  })
  return pathMap
}

// 1. 定义初始化函数
// specs：商品源数据 pathMap：路径字典
const initDisabledState = (specs, pathMap) => {
  // 约定：每一个按钮的状态由自身的disabled进行控制
  specs.forEach(item => {
    item.values.forEach(val => {
      // 路径字典中查找是否有数据 有-可以点击 没有-禁用
      val.disabled = !pathMap[val.name]
    })
  })
}

// 切换时更新禁用
const updateDisabledState = (specs, pathMap) => {
  // 约定：每一个按钮的状态由自身的disabled进行控制
  specs.forEach((item, i) => {
    const selectedValues = getSelectedValues(specs)
    item.values.forEach(val => {
      if (val.selected) return
      const _seletedValues = [...selectedValues]
      _seletedValues[i] = val.name
      const key = _seletedValues.filter(value => value).join('*')
      // 路径字典中查找是否有数据 有-可以点击 没有-禁用
      val.disabled = !pathMap[key]
    })
  })  
}


>>>>>>> master

</script>

<template>
  <div class="goods-sku">
    <dl v-for="item in goods.specs" :key="item.id">
      <dt>{{ item.name }}</dt>
      <dd>
        <template v-for="val in item.values" :key="val.name">
          <!-- 图片类型规格 -->
<<<<<<< HEAD
          <img v-if="val.picture" :src="val.picture" :title="val.name"  :class="{'selected':val.selected == true}" @click="changeSelectedStatus(item,val)">
          <!-- 文字类型规格 -->
          <span :class="{'selected':val.selected == true}" v-else @click="changeSelectedStatus(item,val)">{{ val.name }}</span>
=======
          <img v-if="val.picture" :src="val.picture" :title="val.name" :class="{ 'selected': val.selected,disabled:val.disabled }"
            @click="changeSelectedStatus(item, val)">
          <!-- 文字类型规格 -->
          <span :class="{ 'selected': val.selected == true }" v-else @click="changeSelectedStatus(item, val)">{{ val.name
          }}</span>
>>>>>>> master
        </template>
      </dd>
    </dl>
  </div>
</template>

<style scoped lang="scss">
@mixin sku-state-mixin {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;

  &.selected {
    border-color: #27ba9b;
  }

  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}

.goods-sku {
  padding-left: 10px;
  padding-top: 20px;

  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;

    dt {
      width: 50px;
      color: #999;
    }

    dd {
      flex: 1;
      color: #666;

      >img {
        width: 50px;
        height: 50px;
        margin-bottom: 4px;
        @include sku-state-mixin;
      }

      >span {
        display: inline-block;
        height: 30px;
        line-height: 28px;
        padding: 0 20px;
        margin-bottom: 4px;
        @include sku-state-mixin;
      }
    }
  }
}
</style>