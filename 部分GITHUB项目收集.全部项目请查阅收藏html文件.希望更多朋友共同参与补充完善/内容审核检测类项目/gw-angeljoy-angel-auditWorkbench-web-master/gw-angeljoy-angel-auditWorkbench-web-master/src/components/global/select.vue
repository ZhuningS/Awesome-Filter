<template>
  <el-select
    :disabled="disabled"
    :value="value"
    :placeholder="placeholder"
    v-loading="loading"
    @input="input">
      <el-option
        v-for="item in selectLists"
        :label="item.detailName"
        :value="item.detailValue" :key="item.detailValue">
      </el-option>
  </el-select>
</template>

<script>
import { mapGetters } from 'vuex';
import { getUri } from '../../config/gwConfig';

export default {
  props: {
    disabled: {
      type: null,
      default: false
    },
    dictValue: String,
    dictName: String,
    placeholder: String,
    value: null
  },
  data() {
    return {
      selectLists: [],
      loading: false,
    };
  },
  created() {
    this.toGetSelectLists();
  },
  methods: {
    input(val) {
      this.$emit('input', val);
    },

    toGetSelectLists() {
      this.loading = true;
      const param = {
        dictValue: this.dictValue,
        limit: 100
      };
      this.$http.get(getUri('selectlist'), { params: param } )
        .then((res) => {
          this.loading = false;
          this.selectLists = res.body.rows;
        });
    },
  },
};
</script>
