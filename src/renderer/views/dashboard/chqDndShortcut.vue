<template>
  <div v-if="data">
    <div v-if="data.type=='file'">
      <chqDndItem
        :title="data.name|removeFileType"
        :icon="data.name|getFileType|getIcon"
        @click.native="opn(data.path)"
        @click.native.right="dialogVisible = true"
      ></chqDndItem>
      <br>
      <el-dialog
        title="设定"
        :visible.sync="dialogVisible"
        width="80%"
        center
      >
        <el-form label-width="80px">
          <el-form-item label="名字">
            <el-input v-model="data.name"></el-input>
          </el-form-item>
          <el-form-item label="路径">
            <el-input v-model="data.path"></el-input>
          </el-form-item>
        </el-form>
        <span
          slot="footer"
          class="dialog-footer"
        >
          <el-button
            type="danger"
            @click="del(data)"
          >
            删除
          </el-button>
          <el-button
            type="primary"
            @click="dialogVisible=false"
          >关闭</el-button>
        </span>
      </el-dialog>
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
    return {
      dialogVisible: false
    };
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
  methods: {
    del: function(data) {
      let self = this;
      self.$confirm(`确定删除 ${data.name}`).then(function() {
        console.log(self.$dispatch);
        self.$store.dispatch("del", data.id);
        self.dialogVisible = false;
        // self.$forceUpdate();
        // console.log(self.$forceUpdate);
      });
    }
  }
};
</script>