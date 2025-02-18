<template>
  <div class="login-container">
    <h2>Вход в праздничную зону</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label>Логин:</label>
        <input
          type="text"
          v-model="username"
          required
          class="form-input"
          placeholder="Введите логин"
        >
      </div>
      <div class="form-group">
        <label>Пароль:</label>
        <input
          type="password"
          v-model="password"
          required
          class="form-input"
          placeholder="Введите пароль"
        >
      </div>
      <div v-if="error" class="error-message">Неверные данные!</div>
      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: false
    }
  },
  methods: {
    handleLogin() {
      this.error = false;
      // Проверка логина и пароля
      if (this.username === 'Evgeniy' && this.password === '18021985') {
        console.log('Успешный вход, isAuthenticated установлен!')
        localStorage.setItem('isAuthenticated', 'true')
        this.$router.push('/birthday')
      } else {
        this.error = true
        this.password = '' // Очищаем поле пароля
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.form-group {
  margin: 20px 0;
  text-align: left;
}

.form-input {
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

.form-input:focus {
  outline: none;
  border-color: #ff4081;
  box-shadow: 0 0 0 2px rgba(255,64,129,0.2);
}

button {
  width: 100%;
  padding: 12px;
  margin-top: 15px;
}

.error-message {
  color: #ff4444;
  margin: 10px 0;
  font-weight: 500;
}
</style>