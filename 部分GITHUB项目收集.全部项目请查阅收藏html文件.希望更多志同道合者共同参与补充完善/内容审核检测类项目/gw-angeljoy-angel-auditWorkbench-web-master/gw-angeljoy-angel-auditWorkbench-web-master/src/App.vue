<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'src/style/app.scss';
import { cookie } from 'src/config/cookie';
import COOKIE from 'src/cookie/index';
import { storage } from 'src/config/storageConfig';

export default {
  name: 'app',

  created() {
    if (cookie(COOKIE.userId) === null) {
      storage.clear();
      this.$router.replace({ path: '/login' });
    }
  }
}
</script>
