<template>
  <contentDialog title="修改保险池"
                 class="queuing-settle-begin__dialog"
                 :visible="openingSafePoolDialog"
                 :waitingAjax="waitingAjax"
                 @close="close()"
                 @submit="confirmSubmit()">
    <el-form ref="form" label-width="100px" class="edit-safe-pool-dialog-form"
             :rules="rules" :model="form"
             @submit.native.prevent="">
      <el-form-item label="保险池" prop="number">
        <profitLossInput ref="profitLossInput" v-model="form.number" />

      </el-form-item>
    </el-form>
  </contentDialog>
</template>

<script>
import { mapGetters } from 'vuex';
import { removeHeadZero } from 'src/config/wordHandler';
import contentDialog from 'src/components/global/content-dialog';
import profitLossInput from 'src/components/global/profitLossInput';
import simplifyProfitLossInput from 'src/components/global/simplifyProfitLossInput';

export default {
  data() {
    return {
      form: {
        number: 0,
      },
      rules: {
        number: [{ required: true, pattern: /^\d+$/, message: '保险池不能为空，且需为整数' }]
      },
      waitingAjax: false,
    };
  },
  computed: {
    safeMoney() { return this.$parent.safeMoney; },
    openingSafePoolDialog() { return this.$parent.openingSafePoolDialog; }
  },
  watch: {
    openingSafePoolDialog(val) {
      const vm = this;
      if (val) {
        vm.changeNumber();
      }
    }
  },
  methods: {
    changeNumber() {
      const vm = this;
      /*  解决 dialog 组件 首次 渲染为 v-if  */
      if (!vm.$refs.profitLossInput) {
        window.setTimeout(() => {
          vm.changeNumber();
        }, 50);
        return;
      }
      const safeMoney = parseInt(vm.safeMoney, 0);
      if (safeMoney < 0) {
        vm.$refs.profitLossInput.status = 'loss';
        vm.form.number = -1 * safeMoney;
      } else {
        vm.$refs.profitLossInput.status = 'profit';
        vm.form.number = safeMoney;
      }

    },
    close() {
      this.$parent.toggleOpeningSafePoolDialog(false);
    },
    confirmSubmit() {
      const vm = this;
      vm.$refs.form.validate((valid) => {
        if (valid) vm.submit();
      });
    },
    submit() {
      const operator = this.$refs.profitLossInput.status === 'profit' ? '+' : '-';
      this.$parent.setSafeMoney( operator + this.form.number );
      this.close();
    }
  },
  created() {
  },
  components: {
    contentDialog,
    profitLossInput
  }
};
</script>

<style lang="scss">
  .queuing-settle-begin__dialog {
    .el-dialog--small {
      width: 600px !important;
    }
    .edit-safe-pool-dialog-form {
      padding: 20px 50px;
    }
  }


</style>
