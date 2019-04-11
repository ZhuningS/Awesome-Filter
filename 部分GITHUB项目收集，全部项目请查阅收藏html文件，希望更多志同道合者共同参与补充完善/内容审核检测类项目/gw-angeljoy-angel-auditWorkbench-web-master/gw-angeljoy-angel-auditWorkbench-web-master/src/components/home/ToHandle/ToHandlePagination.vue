<template>
  <paginationMatchServer :total="toHandleList.total" @change="change" />
</template>

<script>
import paginationMatchServer from 'src/components/global/pagination-match-server';

export default {
  computed: {
    toHandleList() { return this.$parent.toHandleList; }
  },
  methods: {
    change(offset, limit) {
      this.$parent.setToHandleListRequest('offset', offset);
      this.$parent.setToHandleListRequest('limit', limit);
      this.$parent.toGetToHandleList();
    }
  },
  components: {
    paginationMatchServer
  }
};
</script>
