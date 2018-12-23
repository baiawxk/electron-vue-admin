<template>
  <div class="dashboard-container">
    <el-container>
      <el-main>
        <chqDndBoard @drop="dropHandle">
          <el-card style="min-height:120px;">
            <el-row :gutter="12">
              <el-col :span="6" v-for="item in shortcuts" :key="item.id">
                <chqDndShortcut :data="item"></chqDndShortcut>
              </el-col>
            </el-row>
          </el-card>
        </chqDndBoard>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import _ from "lodash";
import chqDndBoard from "./chqDndBoard";
import chqDndShortcut from "./chqDndShortcut";
export default {
  name: "dashboard",
  components: {
    chqDndBoard,
    chqDndShortcut
  },
  data: function() {
    const self = this;
    return { shortcuts: self.$store.state.shortcut.items };
  },
  computed: {
    ...mapGetters(["menus"])
  },
  methods: {
    dropHandle: function(items) {
      this.$store.dispatch("add", items);
    }
  }
};
</script>
