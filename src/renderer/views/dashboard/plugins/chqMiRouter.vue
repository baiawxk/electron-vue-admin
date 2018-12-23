<template>
  <div>
    <chqDndBoard>
      <chqDndItem
        @click.native="info"
        @drop="download(url)"
        title="小米路由器下载"
        icon="fa-cloud-download"
      ></chqDndItem>

    </chqDndBoard>
  </div>
</template>

<script>
import chqDndBoard from "@/views/dashboard/chqDndBoard";
import chqDndItem from "@/views/dashboard/chqDndItem";
export default {
  name: "chqMiRouter",
  components: {
    chqDndBoard,
    chqDndItem
  },
  methods: {
    info: function() {
      this.$message("请拖动下载元素至本插件进行下载");
    },
    download: data => {
      console.log(data);
    }
  }
};
</script>

<style scoped>
</style>

