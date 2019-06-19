<template>
  <paginationMatchServer :total="inHandleList.total" @change="change" />
</template>

<script>
import paginationMatchServer from 'src/components/global/pagination-match-server';

export default {
  computed: {
    inHandleList() { return this.$parent.inHandleList; }
  },
  methods: {
    change(offset, limit) {
      this.$parent.setInHandleListRequest('offset', offset);
      this.$parent.setInHandleListRequest('limit', limit);
      this.$parent.toGetInHandleList();
    }
  },
  components: {
    paginationMatchServer
  }
};
</script>
