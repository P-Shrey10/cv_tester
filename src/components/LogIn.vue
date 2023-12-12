<template>
  <div class="login-container">
    <div class="login-content">
      <div class="login-toggle">
        <h2 class="login-heading">{{ isLogin ? "LogIn" : "SignUp" }}</h2>

        <button @click="toggleAuth" class="toggle-auth-btn">
          {{ isLogin ? "SignUp" : "LogIn" }}
        </button>
      </div>

      <!-- LOGIN -->
      <form v-if="isLogin" class="form" @submit.prevent="login">
        <label for="loginUsername" class="login-label">Username:</label>
        <input
          type="text"
          id="loginUsername"
          v-model="loginUsername"
          placeholder="Username:"
          class="login-input"
          required
        />

        <label for="loginPassword" class="login-label">Password:</label>
        <input
          type="password"
          id="loginPassword"
          v-model="loginPassword"
          placeholder="Password"
          class="login-input"
          required
        />

        <p @click="forgotPassword" class="forgot-password">Forget Password</p>

        <router-link to="/home">
          <button type="submit" class="login-btn">LogIn</button>
        </router-link>
      </form>

      <!-- SIGNUP -->
      <form v-else class="form" @submit.prevent="signup">
        <label for="signupUsername" class="login-label">Username:</label>
        <input
          type="text"
          id="signupUsername"
          v-model="signupUsername"
          placeholder="Username:"
          class="login-input"
          required
        />

        <label for="signupPassword" class="login-label">Password:</label>
        <input
          type="password"
          id="signupPassword"
          v-model="signupPassword"
          placeholder="Password"
          class="login-input"
          required
        />

        <router-link to="/">
          <button type="submit" class="login-btn">SignUp</button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import api from "../api/Api.js";

export default {
  data() {
    return {
      loginUsername: "",
      loginPassword: "",
      signupUsername: "",
      signupPassword: "",
      isLogin: true,
    };
  },

  methods: {
    login() {
      api
        .sendDataLogin({
          username: this.loginUsername,
          password: this.loginPassword,
        })
        .then((response) => {
          if (response.data.success) {
            this.$router.push("/home");
            console.log("Sucess in LOGIN");
          } else {
            // Handle login failure
            console.log("Failure in LOGIN");
          }
        })
        .catch((error) => {
          console.error("Error during login:", error);
        });
    },

    signup() {
      api
        .sendDataSignup({
          username: this.signupUsername,
          password: this.signupPassword,
        })
        .then((response) => {
          if (response.data.success) {
            this.$router.push("/");
            console.log("Sucess in SIGNUP");
          } else {
            // Handle signup failure
            console.log("Failure in SIGNUP");
          }
        })
        .catch((error) => {
          console.error("Error during signup:", error);
        });
    },

    forgotPassword() {
      console.log("Forgot Password clicked");
    },

    toggleAuth() {
      this.isLogin = !this.isLogin;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
input,
button {
  margin: 10px 0;
  padding: 15px;
  border-radius: 10px;
  box-sizing: border-box;
}
button {
  cursor: pointer;
}
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.login-content {
  display: flex;
  flex-direction: column;
  width: 400px;
  max-width: 100%;
  height: 600px;
  padding: 30px;
  border-radius: 20px;
  background-color: #3498db;
}
.login-toggle {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}
.login-heading {
  margin: 15px 0;
  color: #ffffff;
  margin-bottom: 20px;
}
.toggle-auth-btn {
  color: #ffffff;
  border: none;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  box-sizing: border-box;
  background-color: #3498db;
}
.form {
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.login-label {
  color: #ffffff;
  margin-bottom: 10px;
}
.login-input {
  background-color: #ecf0f1;
  color: #333333;
  border: 1px solid #bdc3c7;
  width: 100%;
  margin: 15px 0;
  box-sizing: border-box;
}
.forgot-password {
  color: #5e1784;
  cursor: pointer;
}
.login-btn {
  color: #ffffff;
  border: none;
  padding: 10px 70px;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  background-color: #db7134;
}
</style>
