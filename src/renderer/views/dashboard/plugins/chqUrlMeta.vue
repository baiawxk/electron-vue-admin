
<template>
  <div>
    <chqDndBoard @drop="dropHandle">
      <chqDndItem @click.native="info" title="Url Meta Fetch" icon="fa-search"></chqDndItem>
    </chqDndBoard>
  </div>
</template>

<script>
import chqDndBoard from "@/views/dashboard/chqDndBoard";
import chqDndItem from "@/views/dashboard/chqDndItem";
import util from "@/utils/pluginUtils";
export default {
  name: "chqUrlMeta",
  components: {
    chqDndBoard,
    chqDndItem
  },
  methods: {
    info: function() {
      this.$message("Coming Soon!");
    },
    dropHandle: function(data) {
      const self = this;
      if (data != null) {
        for (let i in data) {
          const item = data[i];
          const type = item["type"];
          if ("uri" == type) {
            const uri = item["uri"];
            console.log("getMetaObj", uri);
            util.getUrlMeta(uri).then(function(meta) {
              console.log("getMetaObj", meta);
              const str = JSON.stringify(meta);
              self.$message(str);
            });
          }
        }
      }
    }
  }
};
</script>

<style scoped>
</style>

