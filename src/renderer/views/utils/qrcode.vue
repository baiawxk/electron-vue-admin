<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input
          type="textarea"
          v-model="qrcodeStr"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="genQrCode"
        >Gen</el-button>
      </el-form-item>
    </el-form>
    <canvas ref="canvas"></canvas>

  </div>
</template>

<script>
import QRCode from "qrcode";
export default {
  name: "GenQrCodePage",
  data() {
    return {
      qrcodeStr: ""
    };
  },
  methods: {
    genQrCode() {
      let qrcodeStr = this.$data.qrcodeStr;
      let canvas = this.$refs.canvas;
      if (qrcodeStr === "") return;
      QRCode.toCanvas(canvas, qrcodeStr, function(error) {
        if (error) console.error(error);
        console.log("success!");
      });
    }
  }
};
</script>
