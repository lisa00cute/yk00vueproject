<template>
  <div>
    <div>
      <TypeNav></TypeNav>  
    </div> 


    <!-- <div>usename:{{keyWord}}</div>
    <div>usename:{{keyWord1}} -----{{usename}}</div> -->
  </div>
  
</template>

<script>
import TypeNav from '@/components/TypeNav'
export default {
    name:'Search',
    components:{TypeNav}
    // props:["usename","keyWord","keyWord1"],
    // computed:{
    //   keyWord(){
    //     return this.$route.params.keyWord
    //   },
    //   keyWord1(){
    //     return this.$route.query.keyWord1
    //   }
    // },
    
}
</script>

<style scoped>

</style>