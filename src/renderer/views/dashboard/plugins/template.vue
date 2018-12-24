
<template>
  <div>
    <chqDndBoard @drop="dropHandle">
      <chqDndItem
        @click.native="info"
        title="新插件"
        icon="fa-plug"
      ></chqDndItem>
    </chqDndBoard>
  </div>
</template>

<script>
import chqDndBoard from "@/views/dashboard/chqDndBoard";
import chqDndItem from "@/views/dashboard/chqDndItem";
export default {
  name: "chqPlug",
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

