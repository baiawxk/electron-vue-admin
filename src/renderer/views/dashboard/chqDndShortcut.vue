<template>
  <div v-if="data">
    <div v-if="data.type=='file'">
      <el-card
        shadow="hover"
        :body-style="{height:'100px'}"
        @click.native="opn(data.path)"
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
                <i class="fa fa-stack-2x"></i>
                <i
                  class="fa fa-stack-1x fa-inverse1"
                  :class="data.name | getFileType | getIcon"
                ></i>
              </span>
            </div>
          </el-col>
          <el-col
            :xs="
                  16"
            :sm="16"
            :md="16"
            :lg="18"
            :xl="20"
          >
            <div>{{data.name }}</div>
          </el-col>
        </el-row>
      </el-card>

      <br>
    </div>
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
  filters: {
    removeFileType: fileName => {
      const end = fileName.lastIndexOf(".") || fileName.length;
      return end == -1 ? fileName : fileName.substring(0, end);
    },
    getFileType: fileName => {
      const start = fileName.lastIndexOf(".") + 1 || fileName.length;
      return fileName.substring(start, fileName.length) || "folder";
    },
    getIcon: fileType => {
      switch (fileType) {
        case "lnk":
          return "fa-file";
        case "bat":
          return "fa-terminal";
        case "cmd":
          return "fa-terminal";
        case "folder":
          return "fa-folder-o";
        default:
          return "fa-smile-o";
      }
    },
    getColor: fileType => {
      switch (fileType) {
        case "lnk":
          return "#606266";
        case "bat":
          return "#303133";
        case "cmd":
          return "#303133";
        case "folder":
          return "#E6A23C";
        default:
          return "#606266";
      }
    }
  },
  methods: {}
};
</script>