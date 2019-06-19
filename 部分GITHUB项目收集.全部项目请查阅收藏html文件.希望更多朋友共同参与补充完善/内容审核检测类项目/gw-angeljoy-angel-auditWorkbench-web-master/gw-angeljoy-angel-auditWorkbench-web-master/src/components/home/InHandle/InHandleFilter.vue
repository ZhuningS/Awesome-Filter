<template>
  <threeInputFilterSlot
    label1="状态：" :show2="true" :show3="true"
    @submit="submit()" @clear="clear()">

    <el-select v-model="handleStatus" slot="input1">
      <el-option label="待处理" value="WAIT" />
    </el-select>
  </threeInputFilterSlot>
</template>

<script>
import threeInputFilterSlot from 'src/components/global/three-input-filter-slot';

export default {
  data() {
    return {
      handleStatus: '', // 状态
    }
  },
  methods: {
    change(val) {
      this.handleStatus = val;
    },
    submit() {
      this.$parent.setInHandleListRequest('handleStatus', this.handleStatus);
      this.$parent.toGetInHandleList();
    },
    clear() {
      this.handleStatus = '';
      this.$parent.setInHandleListRequest('handleStatus', this.handleStatus);
    }
  },
  components: {
    threeInputFilterSlot
  }
};
</script>
