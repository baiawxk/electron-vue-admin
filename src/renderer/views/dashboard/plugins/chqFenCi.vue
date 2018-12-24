<template>
  <div>
    <chqDndBoard @drop="dropHandle">
      <chqDndItem
        @click.native="info"
        title="中文分词"
        icon="fa-file-word-o"
      ></chqDndItem>
    </chqDndBoard>
  </div>
</template>

<script>
import chqDndBoard from "@/views/dashboard/chqDndBoard";
import chqDndItem from "@/views/dashboard/chqDndItem";
export default {
  name: "chqFenCi",
  components: {
    chqDndBoard,
    chqDndItem
  },
  methods: {
    info: function() {
      this.$message("Coming Soon!");
    },
    dropHandle: function(data) {}
  }
};
</script>

<style scoped>
</style>

