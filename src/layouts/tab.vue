<template>
  <div class="tab">
    <router-link to="/home" tag="div" active-class="sel">
      <span>推荐</span>
    </router-link>
    <router-link to="/rank" tag="div" active-class="sel">
      <span>热歌榜</span>
    </router-link>
    <router-link to="/search" tag="div" active-class="sel">
      <span>搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tab {
  /* width: 375px; */
  height: 44px;
  display: flex;
}
.tab div {
  text-align: center;
  line-height: 44px;
  width: 33%;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}
.tab div span {
  height: 38px;
  display: inline-block;
  border-bottom: 2px solid #222;
}
.tab .sel {
  color: #ffcd32;
}
.tab .sel span {
  border-bottom: 2px solid #ffcd32;
}
</style>