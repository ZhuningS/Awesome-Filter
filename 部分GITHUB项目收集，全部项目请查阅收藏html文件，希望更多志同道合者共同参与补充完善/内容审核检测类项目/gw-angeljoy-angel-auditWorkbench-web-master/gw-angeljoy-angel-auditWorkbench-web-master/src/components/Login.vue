<template>
  <div class="login-bg">
    <div class="el-form-wrap">
      <div class="login-logo-wrap">
        <img src="../assets/login_logo.png" alt="">
      </div>
      <h3>战报审核工作台</h3>
      <el-form :model="loginForm" :rules="loginRules"
               ref="loginForm" label-position="left" label-width="0"
               @submit.native.prevent="confirmSubmit" class="login-form">
        <el-form-item prop="account">
          <img class="input-icon" src="../assets/user_icon.png" alt="">
          <el-input type="text" v-model="loginForm.account"
                    placeholder="账号" class="input">
          </el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <img class="input-icon2" src="../assets/pw_icon.png" alt="">
          <el-input type="password" v-model="loginForm.checkPass"
                    placeholder="密码" class="input">
          </el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
          <el-button type="primary"
                     style="width:100%;"
                     :loading="loging"
                     native-type="submit">登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getUri } from 'src/config/gwConfig';
import { notifyAjaxWithoutAction } from 'src/config/usualAjax';
import { storage } from 'src/config/storageConfig';
import STORAGE from 'src/localStorage/index';

export default {
  data () {
    return {
      loging: false,
      loginForm: {
        account: '',
        checkPass: ''
      },
      loginRules: {
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        checkPass: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    };
  },
  methods: {
    confirmSubmit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.submit();
        } else {
          this.$message.warning('请填写正确的账号和密码');
        }
      });
    },
    submit() {
      const vm = this;
      const param = {
        name: vm.loginForm.account,
        password: vm.loginForm.checkPass
      };
      /*  恢复 sessionStorage Flag  */
      storage.set('is_force_logout', 'NO', null, 'sessionStorage');
      notifyAjaxWithoutAction({
        vm, param, url: getUri('login'), method: 'post',
        handle: '登录', noSuccessNotify: true,
        before() { vm.loging = true; },
        success(res) {
          const data = res.data;
          storage.set(STORAGE.CLUB_NAME, data.clubName);
          storage.set(STORAGE.USER_REAL_NAME, data.realName);
          vm.$router.replace({ path: '/' });
        },
        after() { vm.loging = false; }
      });
    }
  }
};
</script>

<style lang="scss">
//公用类 end
.login-bg{
  position: relative;
  overflow: hidden;
  height: 100%;
  background-color: #090A0C;
  text-align: center;
  &:after {
    content: '';
    display: inline-block;
    width: 0;
    height: 100%;
    visibility: hidden;
    vertical-align: middle;
  }
}
.el-form-wrap {
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  top: -50px;
  left: -30px;
  padding: 0 30px 0 270px;
  overflow: hidden;
  width: 600px;
  height: 300px;
  text-align: center;
  border-radius: 8px;
  //box-shadow: rgba(0, 0, 0, 0.298039) 0 0 6px 0;
  border: 0 none black;
  -webkit-tap-highlight-color: transparent;
  h3 {
    color: #dcc46b;
    font-size: 36px;
    font-weight: bold;
    line-height: 115px;
  }
  .login-logo-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 270px;
    height: 300px;
    text-align: center;
    > img {
      display: inline-block;
      width: 200px;
      vertical-align: middle;
    }
    &:after {
      content: '';
      width: 0;
      height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
  }
  .input-icon{
    position: absolute;
    top: 8px;
    left: 6px;
    z-index: 1;
    width: 20px;
  }
  .input-icon2{
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 1;
    width: 18px;
  }
  input:-webkit-autofill {
    background-color: #fff;
  }
  .input {
    > input {
      padding-left: 30px;
    }
  }
  .login-btn {
    display: block;
    width: 100%;
    color: #fff;
    background-color: #816300;
    border: 1px solid #714400;
  }
  > p {
    text-align: left;
    > i {
      font-style: normal;
      color: #4eb1f4;
      cursor: pointer;
    }
  }
}
</style>
