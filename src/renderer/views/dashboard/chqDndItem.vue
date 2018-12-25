<template>
  <div class="chqDndItem">
    <el-card
      shadow="hover"
      class="animated zoomIn fast"
      :body-style="{height:'100px'}"
    >
      <el-row
        :gutter="20"
        style="height:100%"
        align="middle"
        justify="center"
        type="flex"
      >
        <el-col
          :xs="8"
          :sm="8"
          :md="8"
          :lg="6"
          :xl="4"
        >
          <div>
            <span class="fa-stack fa-lg">
              <!-- <i class="fa fa-stack-3x"></i> -->
              <i
                class="fa fa-stack-2x fa-inverse1"
                :class="icon"
              ></i>
            </span>
          </div>
        </el-col>
        <el-col
          :xs="16"
          :sm="16"
          :md="16"
          :lg="18"
          :xl="20"
        >
          <div>{{title }}</div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "chqDndItem",
  mounted: function() {},
  data: function() {
    return {};
  },
  props: {
    title: String,
    icon: String,
    desc: String
  },
  methods: {}
};
</script>
<style scoped>
.chqDndItem {
  cursor: pointer;
}
</style>
