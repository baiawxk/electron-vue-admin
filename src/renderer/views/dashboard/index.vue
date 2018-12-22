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
        <!-- <p>当前有菜单：{{menus.length}}</p>
        <div>
          <el-row :gutter="12">
            <el-col :span="6" v-for="item in testMenus" :key="item.id">
              <el-card shadow="hover" :body-style="{height:'100px'}" @click.native="opn(item.url)">
                <header>{{item.title}}</header>
              </el-card>
              <br>
            </el-col>
          </el-row>
        </div>-->
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
    // let menus = this.$store.state.bookmark.items;
    // let testMenus = _.chain(menus)
    //   .filter(function(menu) {
    //     return menu.title !== "";
    //   })
    //   .takeRight(500)
    //   .value();

    return { shortcuts: [] };
  },
  computed: {
    ...mapGetters(["menus"])
  },
  methods: {
    dropHandle: function(items) {
      this.shortcuts.push(...items);
    }
  }
};
</script>
