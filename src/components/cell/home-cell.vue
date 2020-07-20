<template>
  <div class="home-cell">
    <ul class="list">
      <li  v-for="(item,index) in data" :key="index" @click='aaa(item.id)'>
        <div class="left">
          <img :src="item.picUrl" alt />
        </div>
        <ul class="right">
          <li v-for="(item1,index1) in item.songList" :key="index1">
            <span>{{index1+1}}</span>
            <span>{{item1.singername}}-{{item1.songname}}</span>
          </li>
        </ul>
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
    data: {
      type: Array,
      required: true
    }
  },

  methods: {
    aaa(id){
      this.$router.push(`/detail/${id}`)
    }
  },
  // methods: {
  //   toDetail() {
  //     // if (this.data) {
  //     //   this.$router.push(`/detail/${this.data.id}`);
  //     // }
  //     console.log('aaa')
  //   }
  // }
};
</script>

<style scoped>
.list > li {
  display: flex;
  margin: 0 20px;
  padding-top: 20px;
  height: 100px;
}
.list .left {
  flex: 0 0 100px;
  width: 100px;
  height: 100px;
}
.left img {
  width: 100px;
  height: 100px;
}

.list .right {
  justify-content: center;
  padding: 0 20px;
  height: 100px;
  overflow: hidden;
  background: #333;
  color: hsla(0, 0%, 100%, 0.3);
  font-size: 12px;
  flex-direction: column;
  flex: 1;
}
.list .right li {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 26px;
}
</style>