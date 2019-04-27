<template>
<inputFilter label1="天使生活账号"
             :value1="angelName"
             @change1="changeAngelName"
             label2="名字"
             :value2="name"
             @change2="changeName"
             :waitingAjax="waitingAjax"
             @submit="filterSearch()" @clear="clear()" />
</template>

<script>
import inputFilter from 'src/components/global/input-filter';

export default {
  data() {
    return {
      angelName: '', //
      name: '',
      waitingAjax: false
    };
  },
  methods: {
    changeAngelName(val) {
      this.angelName = val;
    },
    changeName(val) {
        this.name = val;
    },
    filterSearch() {
      this.$emit('filterSearch', {
        angelName: this.angelName,
        name: this.name
      });
    },
    clear() {
      this.angelName = '';
      this.name = '';
    }
  },
  components: {
    inputFilter
  }

};
</script>
