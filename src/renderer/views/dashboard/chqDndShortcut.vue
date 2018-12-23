<template>
  <div v-if="data">
    <div v-if="data.type=='file'">
      <chqDndItem
        :title="data.name"
        :icon="data.name|getFileType|getIcon"
        @click.native="opn(data.path)"
      ></chqDndItem>
      <br>
    </div>
  </div>
</template>

<script>
import chqDndItem from "@/views/dashboard/chqDndItem";
export default {
  name: "chqDndShortcut",
  components: {
    chqDndItem
  },
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