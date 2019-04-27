<template>
  <threeInputFilterSlot label1="状态："
    @submit="submit()" @clear="clear()">
    <el-input v-model="aaa" slot="input1" />
  </threeInputFilterSlot>

</template>

<script>
import threeInputFilterSlot from 'src/components/global/three-input-filter-slot';

export default {
  data() {
    return {
      aaa: '',
      bbb: '',
      ccc: ''
    }
  },
  methods: {
    change(val) {
      this.aaa = val;
    },
    submit() {
      this.$parent.setHaveHandleListRequest('aaa', this.aaa);
      this.$parent.toGetHaveHandleList();
    },
    clear() {
      this.aaa = '';
      this.$parent.setHaveHandleListRequest('aaa', this.aaa);
    }
  },
  components: {
    threeInputFilterSlot
  }
};
</script>
