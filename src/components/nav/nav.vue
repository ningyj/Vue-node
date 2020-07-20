<template>
  <div class="nav">
    <span class="span1" @click='$router.go(-1)'>回退</span>
    <span class="span2">{{title}}</span>
  </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
        }
    }
};
</script>

<style scoped>

.span1 {
  position: absolute;
  top: 10px;
  left: 6px;
  z-index: 50;
  font-size:18px;
  color:#ffcd32
}
.span2 {
  position: absolute;
  top: 0;
  left: 10%;
  z-index: 40;
  width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  color: #fff;
}
</style>