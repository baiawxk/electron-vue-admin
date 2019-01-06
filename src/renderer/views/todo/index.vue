<template>

  <el-container>
    <el-main>
      <el-card>
        <el-input
          v-model="inputs"
          @keyup.native.enter="enter"
        >
        </el-input>
      </el-card>
      <br>
      <el-card>
        {{todos.length}}
        <div>
          <el-alert
            v-for="item in todos"
            :key="item.id"
            :title="item.title"
            :closable="false"
            :description="item.createTime | fromNow"
            show-icon
          >
          </el-alert>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>


<script>
import todo from "@/utils/todo.js";
import lo from "lodash";
import { mapGetters, mapState } from "vuex";

export default {
  name: "todo-overview",
  data: function() {
    return {
      inputs: ""
    };
  },
  computed: {
    ...mapState({
      todos: state => state.todo.items
    })
  },
  methods: {
    enter: function() {
      const self = this;
      const inputs = self.inputs;
      if (!lo.isEmpty(inputs)) {
        self.current = inputs;
        const item = todo.get(inputs);
        this.$store.commit("addTodo", item);
      }
      self.inputs = "";
    }
  }
};
</script>


<style lang="scss" scoped>
</style>
