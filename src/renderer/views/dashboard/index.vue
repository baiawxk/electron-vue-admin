<template>
  <div class="dashboard-container">
    <el-container>
      <el-main>
        <div>
          <el-card>
            <p>插件</p>
            <el-row :gutter="12">
              <el-col
                :xs="12"
                :sm="8"
                :md="6"
                :lg="6"
                :xl="4"
              >
                <chqMiRouter></chqMiRouter>
              </el-col>
              <el-col
                :xs="12"
                :sm="8"
                :md="6"
                :lg="6"
                :xl="4"
              >
                <chqFenCi></chqFenCi>
              </el-col>
            </el-row>
          </el-card>
          <br>
        </div>
        <chqDndBoard @drop="dropHandle">
          <el-card style="min-height:120px;">
            <el-row :gutter="12">
              <el-col
                :xs="12"
                :sm="8"
                :md="6"
                :lg="6"
                :xl="4"
                v-for="item in shortcuts"
                :key="item.id"
              >
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
import chqMiRouter from "@/views/dashboard/plugins/chqMiRouter";
import chqFenCi from "@/views/dashboard/plugins/chqFenci";

export default {
  name: "dashboard",
  components: {
    chqDndBoard,
    chqDndShortcut,
    chqMiRouter,
    chqFenCi
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
