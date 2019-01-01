<template>
  <div class="dashboard-container">
    <el-container>
      <el-main>
        <div>
          <el-card>
            <p>插件</p>
            <!-- TODO there is to optimize  -->
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
              <el-col
                :xs="12"
                :sm="8"
                :md="6"
                :lg="6"
                :xl="4"
              >
                <chq-url-meta></chq-url-meta>
              </el-col>
            </el-row>
          </el-card>
          <br>
        </div>
        <chqDndBoard @drop="dropHandle">
          <el-card style="min-height:120px;">
            <p>快捷方式</p>
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
import { mapGetters, mapState } from "vuex";
import _ from "lodash";
import chqDndBoard from "./chqDndBoard";
import chqDndShortcut from "./chqDndShortcut";
//TODO optimize
import chqMiRouter from "@/views/dashboard/plugins/chqMiRouter";
import chqFenCi from "@/views/dashboard/plugins/chqFenci";
import chqUrlMeta from "@/views/dashboard/plugins/chqUrlMeta";

export default {
  name: "dashboard",
  components: {
    chqDndBoard,
    chqDndShortcut,
    chqMiRouter,
    chqFenCi,
    chqUrlMeta
  },
  data: function() {
    const self = this;
    return {};
  },
  computed: {
    ...mapGetters(["menus"]),
    ...mapState({
      shortcuts: state => state.shortcut.items
    })
  },
  methods: {
    dropHandle: function(items) {
      this.$store.dispatch("add", items);
    }
  }
};
</script>
