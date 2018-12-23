<template>
  <div @drop.prevent="dropHandle" ref="board">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "chqDndBoard",
  mounted: function() {
    const self = this;
    const refs = self.$refs;
    const board = refs.board;
    self.resetEvent(board);
  },
  data: function() {
    return {};
  },
  methods: {
    resetEvent: function(document) {
      ["dragover", "drop"].forEach(name => {
        document.addEventListener(
          name,
          function(event) {
            event.preventDefault();
          },
          false
        );
      });
    },
    dropHandle: function(e) {
      const self = this;
      const dataTransfer = e.dataTransfer;
      const parseResult = self.parseDropObj(dataTransfer);
      self.$emit("drop", parseResult);
    },
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
      const files = dataTransfer.files;
      let ary = [];
      if (files != 0 && files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const name = file.name;
          const path = file.path;
          const id = self.uuid();
          ary.push({
            id,
            name,
            path,
            type: "file"
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