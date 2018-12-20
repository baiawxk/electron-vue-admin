<template>
  <div class="dashboard-container">
    <el-container>
      <el-main>
        <p>当前有菜单：{{menus.length}}</p>
        <div>
          <el-row :gutter="12">
            <el-col
              :span="6"
              v-for="item in testMenus"
              :key="item.id"
            >
              <el-card
                shadow="hover"
                :body-style="{height:'100px'}"
                @click.native="opn(item.url)"
              >
                <header>{{item.title}}</header>
              </el-card>
              <br>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import _ from "lodash";

export default {
  name: "dashboard",
  data: function() {
    let menus = this.$store.state.bookmark.items;
    let testMenus = _.takeRight(menus, 10);
    console.log(testMenus);

    return { testMenus };
  },
  computed: {
    ...mapGetters(["menus"])
  },
  methods: {
    open: function(url) {
      console.log(url);
      window.open(url);
    }
  }
};
</script>
