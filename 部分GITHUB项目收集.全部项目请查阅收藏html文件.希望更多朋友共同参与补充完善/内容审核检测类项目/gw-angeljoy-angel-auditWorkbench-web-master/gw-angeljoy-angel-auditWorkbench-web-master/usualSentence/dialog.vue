<template>
<contentDialog title="title" :visible="openingConfirmDialog"
               @close="close()" @submit="submit()"
               :waitingAjax="waitingAjax">
</contentDialog>

</template>

<script>
import { getUri } from 'src/config/gwConfig';
import { notifyAjaxWithoutAction } from 'src/config/usualAjax';
import contentDialog from 'src/components/global/content-dialog';

export default {
  data() {
    return {
      waitingAjax: false
    };
  },
  computed: {
    /*  parent  */
    openingConfirmDialog() { return this.$parent.openingConfirmDialog; },
  },

  methods: {
    close() {
      this.$parent.toggleOpeningConfirmDialog(false);
    },
    submit() {
      const vm = this;
      const param = {
      };
      notifyAjaxWithoutAction({
        vm, param, url: getUri('queuing_register'), method: 'post',
        handle: '上码登记', noSuccessNotify: true,
        before() { vm.waitingAjax = true; },
        success(res) {
        },
        after() { vm.waitingAjax = false; }
      });
    }
  },
  components: {
    contentDialog
  }
};
</script>
