<template>
  <div id="auth-container">
    <section>
      <div id="form-info">
        <h1>MyWebsite</h1>
        <p>Sign In with your Username and Password</p>
        <h5>OR</h5>
        <p>You can create a new account</p>
      </div>
      <div id="form-container">
        <h2>Welcome Back</h2>
        <div>
          <p id="error" v-if="errMsg">
            {{ errMsg }}
          </p>
        </div>

        <form id="form" method="post" v-on:submit.prevent="handleLogin()">
          <label for="username">Username</label>
          <input
            v-bind:class="{ 'err-input': errors.username }"
            type="text"
            name="username"
            v-model.trim="username"
            placeholder="Username"
            minlength="4"
          />
          <label for="password">password</label>
          <input
            v-bind:class="{ 'err-input': errors.password }"
            type="password"
            name="password"
            v-model="password"
            placeholder="Password"
            minlength="5"
          />
          <div>
            <label>
              <input type="checkbox" name="remember" /> Remember me?</label
            >
            <a href="/forgot">Forgot Password?</a>
          </div>
          <button type="submit" v-html="buttonContent()"></button>
        </form>
        <p>
          Don't have an account?
          <router-link to="/register">Sign Up now</router-link>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { logUser, setLogged } from "../helper/manageUser";
export default {
  name: "Login",

  data() {
    return {
      username: "",
      password: "",
      errors: { username: false, password: false },
      isSubmitting: false,
      errMsg: ""
    };
  },
  methods: {
    handleLogin() {
      if (this.username && this.password) {
        this.errors.username = this.errors.password = false;
        this.isSubmitting = true;

        setTimeout(() => {
          this.isSubmitting = false;
          const data = {
            username: this.username,
            password: this.password
          };
          const response = logUser(data);
          if (response === true) {
            setLogged();
            this.$router.push("/dashboard");
          } else {
            this.errMsg = response;
          }
        }, 1500);
      } else {
        if (!this.username) {
          this.errors.username = true;
        } else {
          this.errors.username = false;
        }
        if (!this.password) {
          this.errors.password = true;
        } else {
          this.errors.password = false;
        }
      }
    },
    buttonContent() {
      return this.isSubmitting
        ? ' <i class="fa fa-spinner fa-spin"></i>'
        : "Continue";
    }
  },
  created() {
    if (this.$route.params.error) {
      this.errMsg = this.$route.params.error;
    }
  }
};
</script>
