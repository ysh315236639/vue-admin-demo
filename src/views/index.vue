<template>
  <div class="home">
    <div class="left-nav">
      <vm-nav></vm-nav>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav/index'
export default {
  name: 'home',
  components: {
    'vm-nav': Nav
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;height: 100%;
  display: flex
}
.left-nav{
  width: 200px;height: 100%;
}
.main{
  width: 100%;height: 100%;
  flex: 1;background-color: #f1f2f7;
  padding: 15px;
}
</style>
