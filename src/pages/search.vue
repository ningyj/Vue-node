<template>
  <div class="search">
    <div class="search-box-wrapper">
      <div class="search-box">
        <input type="text" placeholder="搜索歌曲、歌手" class="box" v-model="str" />
      </div>
    </div>

    <div class="shortcut-wrapper" v-show="!str">
      <div class="shortcut" style>
        <div
          style="transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); transition-duration: 0ms; transform: translate(0px, 0px) scale(1) translateZ(0px);"
        >
          <div class="hot-key" style="pointer-events: auto;">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li v-for="(item,index) of search" :key="index">{{item.k}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="search-result" v-show='str'>
      <div class="suggest">
        <ul
          class="suggest-list"
          style="transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); transition-duration: 0ms; transform: translate(0px, 0px) scale(1) translateZ(0px);"
        >
          <li v-for="(item,index) of result" :key="index">
            <div class="name">
              <p class="text">{{item.songname}}-{{item.singer[0].name}}-Y</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { SEARCH,RESULT } from "../store/types";
import { mapState } from "vuex";
export default {
  props: {},
  data() {
    return {
      str: "",
    };
  },
  components: {},
  mounted() {
    this.$store.dispatch("search/" + SEARCH);
  },
  computed: {
    ...mapState("search", ["search"]),
    ...mapState("search", ["result"])
  },
  updated() {},
  methods: {},
  watch: {
    str() {
      if (this.str) {
        this.$store.dispatch("search/" + RESULT,{w: this.str})
      }
    }
  }
};
</script>

<style>
.search-box-wrapper {
  margin: 20px;
}
.search-box {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 6px;
  height: 40px;
  background: #333;
  border-radius: 6px;
}
.box {
  flex: 1;
  margin: 0 5px;
  line-height: 18px;
  background: #333;
  color: #fff;
  font-size: 14px;
  outline: 0;
}
.shortcut-wrapper {
  position: fixed;
  top: 178px;
  bottom: 0;
  width: 100%;
}
.shortcut {
  height: 100%;
  overflow: hidden;
}
.hot-key {
  margin: 0 20px 20px 20px;
}
.title {
  margin-bottom: 20px;
  font-size: 14px;
  color: hsla(0, 0%, 100%, 0.5);
}
.hot-key li {
  display: inline-block;
  padding: 5px 10px;
  margin: 0 20px 10px 0;
  border-radius: 6px;
  background: #333;
  font-size: 14px;
  color: hsla(0, 0%, 100%, 0.3);
}

.search-result {
  position: fixed;
  width: 100%;
  top: 178px;
  bottom: 0;
}
.suggest {
  height: 100%;
  overflow: hidden;
}
.suggest-list {
  padding: 0 30px;
}
.suggest-list li {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
}

.name {
  flex: 1;
  font-size: 14px;
  color: hsla(0, 0%, 100%, 0.3);
  overflow: hidden;
}
.text {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
