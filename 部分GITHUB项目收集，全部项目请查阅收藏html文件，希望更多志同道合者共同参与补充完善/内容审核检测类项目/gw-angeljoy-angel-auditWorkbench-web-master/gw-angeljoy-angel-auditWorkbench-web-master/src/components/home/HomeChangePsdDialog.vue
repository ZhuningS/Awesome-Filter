<template>
  <contentDialog title="修改密码"
                 :visible="openingChangePsdDialog"
                 :waitingAjax="waitingAjax"
                 @close="close()"
                 @submit="confirmChangePsd()">
    <el-form ref="form" :model="form" :rules="formRules"
             label-width="120px">
      <el-form-item label="旧密码" prop="oldPassword">
        <el-input type="password" v-model="form.oldPassword" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input  type="password" v-model="form.newPassword" placeholder="请输入密码" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" prop="confirmNewPassword">
        <el-input type="password" v-model="form.confirmNewPassword" placeholder="两次输入密码保持一致" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
  </contentDialog>

</template>

<script>
import contentDialog from 'src/components/global/content-dialog.vue';
import { cookie } from 'src/config/cookie';
import COOKIE from 'src/cookie/index';
import { notifyAjaxWithoutAction } from 'src/config/usualAjax';
import { getUri } from 'src/config/gwConfig';

export default {
  name: '',
  data() {
    const confirmPsdRule = (rule, val, callback) => { // ---确认密码规则
      if (val === '') {
        callback(new Error('请再次输入密码'));
      } else if (val !== this.form.newPassword) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      form: {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      },
      formRules: {
        oldPassword: [{ required: true, message: '请输入旧密码' }],
        newPassword: [
          { required: true, message: '请输入密码' },
          { min: 6, message: '密码应大于等于6位' }
        ],
        confirmNewPassword: [{ validator: confirmPsdRule }]
      },
      waitingAjax: false, // 等待ajax flag
    };
  },

  computed: {
    openingChangePsdDialog() { return this.$parent.openingChangePsdDialog; },
  },
  methods: {
    close() {
      this.$refs.form.resetFields();
      this.$parent.toggleOpeningChangePsdDialog(false);
    },
    confirmChangePsd() {
      this.$refs.form.validate((valid) => {
        if (valid) this.submitChangePsd();
      });
    },
    submitChangePsd() {
      const vm = this;
      const param = {
        id: cookie(COOKIE.userId),
        ...vm.form
      };
      notifyAjaxWithoutAction({
        vm, param, url: getUri('reset_psd'), method: 'put', handle: '修改密码',
        before() { vm.waitingAjax = true; },
        success(res) { vm.close(); },
        error(err) { vm.$refs.form.resetFields(); },
        after() { vm.waitingAjax = false; }
      });
    }
  },
  components: {
    contentDialog,
  }
};
</script>



