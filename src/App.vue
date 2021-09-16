<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- <Footer v-show="$route.path !== '/login' && $route.path !== '/register'"></Footer> -->
    <!-- 使用 route 里的 meta 可以更好的达到效果  -->
    <Footer v-show="!$route.meta.isHead "></Footer>        
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
export default {
  name:'App',
  components:{Header,Footer}
}
</script>

<style>

</style>