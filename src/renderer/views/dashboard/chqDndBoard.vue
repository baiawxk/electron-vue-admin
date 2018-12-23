<template>
  <div
    @drop.prevent="dropHandle"
    ref="board"
  >
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
      console.log(dataTransfer.items);
      console.log(dataTransfer.types);
      console.log(dataTransfer.files);
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
      const self = this;
      let items = dataTransfer.items;
      let ary = [];
      if (items != 0 && items.length > 0) {
        for (let i = 0; i < items.length; i++) {
          let item = items[i];
          let kind = item.kind;
          let type = item.type;
          if (item.kind == "string") {
            if (type == "json") {
              let data = JSON.parse(dataTransfer.getData(type));
              console.log(data);
            } else if (type == "text/plain") {
              let data = dataTransfer.getData(type);
              console.log(type, "###", data);
            } else if (type == "text/html") {
              let data = dataTransfer.getData(type);
              console.log(type, "###", data);
            } else if (type == "text/uri-list") {
              let data = dataTransfer.getData(type);
              ary.push({
                type: "uri",
                id: self.uuid(),
                uri: data,
                name: data
              });
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