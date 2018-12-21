<template>
  <div class="dashboard-container">
    <el-container>
      <el-main>
        <chqDndBoard></chqDndBoard> 
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
import chqDndBoard from './chqDndBoard';
import $ from 'jquery';
export default {
  name: "dashboard",
  components:{
    chqDndBoard
  },
  data: function() {
    let menus = this.$store.state.bookmark.items;
    let testMenus = _.chain(menus)
      .filter(function(menu) {
        return menu.title !== "";
      })
      .takeRight(500)
      .value();

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
