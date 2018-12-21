<template>
  <div>
    <el-card
      class="chqDndBoard"
      ref="board"
    >

    </el-card>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "chqDndBoard",
  mounted: function() {
    const board = this.$refs.board.$el;
    const chqDndBoard = $(board);
    const self = this;
    chqDndBoard.off("dragover").on("dragover", function(e) {
      e.preventDefault();
    });
    chqDndBoard.off("drop").on("drop", function(e) {
      e.preventDefault();
      const dataTransfer = e.originalEvent.dataTransfer;
      self.parseDropObj(dataTransfer);
    });
  },
  data: function() {
    return {};
  },
  methods: {
    parseDropObj: function(dataTransfer) {
      const self = this;
      const parseResult = [
        ...self.parseDropFile(dataTransfer),
        ...self.parseDropText(dataTransfer),
        ...self.parseDropOther(dataTransfer)
      ];
      console.table(parseResult);
      return parseResult;
    },
    parseDropFile: function(dataTransfer) {
      const self = this;
      let files = dataTransfer.files;
      let ary = [];
      if (files != 0 && files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          let file = files[i];
          let name = file.name;
          let path = file.path;
          let id = self.uuid();
          ary.push({
            id,
            name,
            path
          });
        }
      }
      return ary;
    },
    parseDropText: function(dataTransfer) {
      let items = dataTransfer.items;
      let ary = [];
      if (items != 0 && items.length > 0) {
        for (let i = 0; i < items.length; i++) {
          let item = items[i];
          let kind = item.kind;
          let type = item.type;
          if (item.kind == "string") {
            var str = dataTransfer.getData(type);
            if (type == "json") {
              let data = JSON.parse(dataTransfer.getData(type));
              ary.push(data);
            }
          }
        }
      }
      return ary;
    },
    parseDropOther: function(dataTransfer) {
      let items = dataTransfer.items;
      let ary = [];
      if (items != 0 && items.length > 0) {
        for (let i = 0; i < items.length; i++) {
          let item = items[i];
          let kind = item.kind;
          let type = item.type;
          if (kind != "string" && kind != "file") {
          }
        }
      }
      return ary;
    }
  }
};
</script>


<style scoped>
.chqDndBoard {
  min-height: 160px;
}
</style>
