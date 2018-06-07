<template>
  <div class="wrapper">
    <!-- 根据route配置对应的 meta keep-alive来进行是否缓存 -->
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive" @androidback="function() {$router.back()}">
            <!-- 这里是会被缓存的视图组件-->
          </router-view>
        </keep-alive>

        <router-view v-if="!$route.meta.keepAlive" @androidback="function() {$router.back()}">
          <!-- 这里是不被缓存的视图组件 -->
        </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
</style>
