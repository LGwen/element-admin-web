<template>
  <el-card class="box-card">
    <div class="form-base-container">
      <el-steps :active="active" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
      <div style="margin-top:40px;">
        <step1 v-if="active==0" @nextStep="next" />
        <step2 v-if="active==1" @nextStep="next" />
        <step3 v-if="active==2" @nextStep="next" />
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  components: {
    step1: () => import("./Form-steps/step1"),
    step2: () => import("./Form-steps/step2"),
    step3: () => import("./Form-steps/step3")
  },
  data() {
    return {
      active: 0
    };
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
};
</script>
