<template>
  <div class="recommend">
    <div v-if="banners.length!==0">
      <swiper :options="swiperOption" class="banner" ref="swper">
        <swiper-slide v-for="(item, index) in banners" :key="index" class="banner-item">
          <img :src="item.imageUrl">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="disk">
      <div class="disk-item" v-for="item in disks" :key="item.id">
        <img  v-lazy="item.picUrl"/>
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { getBanner, getDisk } from "./../api/recommend";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "recommend",
  data() {
    return {
      banners: [],
      disks: [],
      swiperOption: {
        autoplay: true,
        speed: 500,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    };
  },
  created() {
    this._getBanner();
    this._getDisk();
  },
  methods: {
    _getBanner() {
      getBanner().then(data => {
        this.banners = data.banners;
      });
    },
    _getDisk() {
      getDisk().then(data => {
        this.disks = data.result;
      });
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 200px;
  .banner-item, img {
    height: 100%;
    width: 100%;
  }
}
.disk {
  width: 100%;
  .disk-item {
    width: 33.33%;
    height: 33.33%;
    float: left;
    padding: 3px;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
    p {
      font-size: 10px;
    }
  }
}
</style>

