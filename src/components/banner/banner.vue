<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) of data" :key="index">
        <img :src="item.pic_info.url" alt />
      </div>
      <!-- <div class="swiper-slide">
        <img src="/images/b2.jpg" alt />
      </div>
      <div class="swiper-slide">
        <img src="/images/c3.jpg" alt />
      </div>
      <div class="swiper-slide">
        <img src="/images/d4.jpg" alt />
      </div>-->
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  methods: {
    initBanner() {
      new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        slidesPerView: "auto",
        // loopedSlides: _this.bannerList.length,
        speed: 300,
        autoplay: {
          disableOnInteraction: false, //手动滑动之后不打断播放
          delay: 2000
        },
        observer: true,
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  },
  mounted() {
    this.data.length && this.initBanner();
  },
  updated() {
    this.initBanner();
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>