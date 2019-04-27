<template>
  <threeInputFilterSlot
    label1="状态：" :show2="false" :show3="false"
    @submit="submit()" @clear="clear()">
    <!--<el-input v-model="applyTime" slot="input1" />-->
    <el-select v-model="handleStatus" slot="input1">
      <el-option label="待处理" value="WAIT" />
      <el-option label="数据错误，等待重新审核" value="DATA_ERROR_WAIT" />

    </el-select>
    <p slot="input2"> </p>
  </threeInputFilterSlot>
</template>

<script>
import threeInputFilterSlot from 'src/components/global/three-input-filter-slot';

export default {
  data() {
    return {
      applyTime: '',
      handleStatus: ''
    }
  },
  methods: {
    submit() {
      this.$parent.setToHandleListRequest('applyTime', this.applyTime);
      this.$parent.setToHandleListRequest('handleStatus', this.handleStatus);
      this.$parent.toGetToHandleList();
    },
    clear() {
      this.applyTime = '';
      this.handleStatus = '';
      this.$parent.setToHandleListRequest('applyTime', this.applyTime);
      this.$parent.setToHandleListRequest('handleStatus', this.handleStatus);
    }
  },
  components: {
    threeInputFilterSlot
  }
};
</script>
