<template>
  <div class="list-cell">
    <ul >
      <li v-for="(item,index) of celldata" :key="index" @click='player(item.data.songmid)'>
        <div class="left">
          <span>{{index+1}}</span>
        </div>
        <div class="right">
          <h2>{{item.data.songname}}</h2>
          <p>{{item.data.singer[0].name}}·{{item.data.songname}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    celldata: {
      type: Array
      // required:true
    }
  },
  mounted() {},
  methods: {
    player(songmid){
      this.$router.push(`/player/${songmid}`)
    }
  }
};
</script>

<style scoped>
ul {
  padding: 20px 30px;
}
li {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 64px;
  font-size: 14px;
}
.left {
  flex: 0 0 25px;
  width: 25px;
  margin-right: 30px;
  text-align: center;
}
.left span {
  color: #ffcd32;
  font-size: 18px;
}
.right {
  flex: 1;
  line-height: 20px;
  overflow: hidden;
}
.right h2 {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #fff;
  font-size: 100%;
}
.right p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 4px;
  color: hsla(0, 0%, 100%, 0.3);
}
</style>