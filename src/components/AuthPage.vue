<template>
  <div class="auth">
    <img src="../assets/logo.svg" alt="">
    <h1>Вход</h1>
    <label>Логин</label>
    <input v-model="login" type="text">
    <label>Пароль</label>
    <input v-model="password" type="password">
    <button @click="loginUser()">Войти</button>
  </div>
</template>

<script>
import { users } from '../fakeDB/users.js'
export default {
  name: 'AuthPage',
  data() {
    return {
      login: null,
      password: null
    }
  },
  methods: {
    loginUser(){
      if(users.find((user) => user.name === this.login && user.password === this.password)){
        localStorage.setItem('sibdevAccess', Math.random().toString(36).substr(2))
        localStorage.setItem('currentUser', this.login.toString())
        let array = []
        if(!localStorage.getItem(this.login.toString())){localStorage.setItem(this.login.toString(), JSON.stringify(array))}
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
img {
  width: 88px;
  height: 88px;
}

.auth {
  margin-top: 60px;
  padding: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-weight: 700;
  font-size: 18px;
  margin: 20px auto;
  line-height: 28px;
}

label,
input {
  align-self: flex-start;
}

label {
  font-size: 16px;
  line-height: 22px;
  color: rgba(23, 23, 25, 0.3);
}

input {
  border: 1px solid rgba(23, 23, 25, 0.2);
  background: white;
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 24px;
  color: #272727;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
}


button {
  margin-top: 10%;
  background: #1390E5;
  border-radius: 5px;
  font-size: 20px;
  line-height: 24px;
  color: white;
  padding: 15px 60px;
  border: 0;
}
</style>
