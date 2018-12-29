<template>
  <div>
    <chqDndBoard @drop="download">
      <chqDndItem
        @click.native="info"
        title="小米路由器下载"
        icon="fa-cloud-download"
      ></chqDndItem>
    </chqDndBoard>
  </div>
</template>

<script>
import chqDndBoard from "@/views/dashboard/chqDndBoard";
import chqDndItem from "@/views/dashboard/chqDndItem";
import mirouter from "@/utils/mirouter";
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
      if (data != null) {
        for (let i in data) {
          const item = data[i];
          const type = item["type"];
          if ("uri" == type) {
            const uri = item["uri"];
            mirouter.dlUrl(uri);
          }
        }
      }
    }
  }
};
</script>

<style scoped>
</style>

