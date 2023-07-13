<template>
  <div class="banner">
    <div class="banner-inner">
      <el-carousel class="carousel" animation-name="fade" height="100%">
        <el-carousel-item v-for="item in carouselItem" :key="item.slogan">
          <div :key="item.slogan" class="carousel-item">
            <div class="carousel-title">{{ item.slogan }}</div>
            <div class="carousel-sub-title">{{ item.subSlogan }}</div>
            <img class="carousel-image" :src="item.image" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import bannerImage from '@/assets/img/login-banner.png'
import { ElCarousel, ElCarouselItem } from 'element-plus'
const { t } = useI18n()
const carouselItem = computed(() => [
  {
    slogan: '接入可视化增强工具AUX',
    subSlogan: '实现灵活的区块式开发',
    image: bannerImage,
  },
  {
    slogan: '开箱即用的高质量模板',
    subSlogan: '丰富的的页面模板，覆盖大多数典型业务场景',
    image: bannerImage,
  },
  {
    slogan: '内置了常见问题的解决方案',
    subSlogan: '国际化，路由配置，状态管理应有尽有',
    image: bannerImage,
  },
])
</script>

  <style lang="scss" scoped>
    .banner {
      display: flex;
      align-items: center;
      justify-content: center;

      &-inner {
        flex: 1;
        height: 100%;
        width: 100%;
      }
    }

    .carousel {
      height: 100%;

      &-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
      }

      &-title {
        color: #f7f8fa;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
      }

      &-sub-title {
        margin-top: 8px;
        color: #86909c;
        font-size: 14px;
        line-height: 22px;
      }

      &-image {
        width: 320px;
        margin-top: 30px;
      }
    }
  </style>

