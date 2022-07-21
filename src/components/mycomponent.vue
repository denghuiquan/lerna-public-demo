<template>
  <div>
    <h1>Component develop with element-ui</h1>
    <el-form class="form" ref="form" :model="user" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: {
          required: true,
          message: '请输入用户名'
        },
        password: [
          {
            required: true,
            message: '请输入用户名'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.form.validate(valid => {
        return valid ? alert('验证成功') && true : alert('验证失败') && false
      })
    }
  }
}
</script>
<style scoped>
.form {
  width: 30%;
}
</style>
