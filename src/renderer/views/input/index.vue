<template>
  <div class="app-container">
    <el-input
      v-model="inputs"
      @keyup.native.enter="enter"
    >
    </el-input>
    <el-form>
      <el-form-item label="current">
        {{current}}
      </el-form-item>
      <el-form-item label="result">
        {{result}}
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import todo from "@/utils/todo.js";
import lo from "lodash";
export default {
  data() {
    return {
      todos: [],
      inputs: "",
      current: "",
      result: ""
    };
  },
  methods: {
    enter: function() {
      const self = this;
      const inputs = self.inputs;
      if (!lo.isEmpty(inputs)) {
        self.current = inputs;
        self.result = todo.get(inputs);
        console.log(self.result);
      }
      self.inputs = "";
    }
  }
};
</script>

<style scoped>
</style>

