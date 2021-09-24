<template>
  <div>
        <!--banner轮播-->
        <div class="swiper-container" ref="mybanner">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(banner, index) in bannerList"
              :key="banner.id">
              <img :src="banner.imgUrl" />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    name:'',
    props:["bannerList"],
    watch: {
    // 使用watch来对轮播图进行管理
    // 在这个组件中 dispatch 需要数据的引入所以要通过watch检测数据是否请求回来 然后通过 new swiper 的实例 来实现
    bannerList: {
        immediate:true,
      handler(newVal, oldVal) {
        this.$nextTick(() => {
          new Swiper(this.$refs.mybanner, {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },

            // 如果需要滚动条
            // scrollbar: {
            // el: '.swiper-scrollbar',
            // },
          });
        });
      },
    },
  },
}
</script>

<style>

</style>