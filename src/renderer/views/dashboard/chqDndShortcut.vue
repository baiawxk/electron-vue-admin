<template>
  <div v-if="data">
    <el-card shadow="hover" :body-style="{height:'100px'}" @click.native="opn(data.path)">
      <header>{{data.name}}</header>
    </el-card>
    <br>
  </div>
</template>

<script>
export default {
  name: "chqDndShortcut",
  mounted: function() {},
  data: function() {
    return {};
  },
  props: {
    data: Object
  },
  methods: {}
};
</script>