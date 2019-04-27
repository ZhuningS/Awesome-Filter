<template>
  <paginationMatchServer :total="haveHandleList.total" @change="change" />
</template>

<script>
import paginationMatchServer from 'src/components/global/pagination-match-server';

export default {
  computed: {
    haveHandleList() { return this.$parent.haveHandleList; }
  },
  methods: {
    change(offset, limit) {
      this.$parent.setHaveHandleListRequest('offset', offset);
      this.$parent.setHaveHandleListRequest('limit', limit);
      this.$parent.toGetHaveHandleList();
    }
  },
  components: {
    paginationMatchServer
  }
};
</script>
