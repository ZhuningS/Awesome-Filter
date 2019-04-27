<template>
  <el-form ref="form" :model="form" :rules="rules"
           label-width="120px">
    <el-form-item label="旧密码" prop="rule1">
      <el-input type="text" v-model="form.val1"/>
    </el-form-item>
  </el-form>
</template>

<script>

export default {
  data() {
    return {
      form: {
        val1: ''
      },
      rules: {
        rule1: [
          { required: true, message: '请输入aaa' }
        ]
      }
    };
  },
};
</script>
