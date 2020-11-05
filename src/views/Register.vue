<template>
  <div id="auth-container">
    <section>
      <div id="form-info">
        <h1>MyWebsite</h1>
        <p>
          Create a new Account in few seconds to stat using enjoying our
          services
        </p>
        <h5>OR</h5>
        <p>You sign in if you already have an account</p>
      </div>
      <div id="form-container">
        <h2>Create a New Account</h2>
        <div>
          <p id="error" v-if="errMsg">
            {{ errMsg }}
          </p>
        </div>

        <form
          id="form"
          method="post"
          v-on:submit.prevent="handleRegistration()"
        >
          <label for="fullname">Full Name</label>
          <input
            v-bind:class="{ 'err-input': errors.fullname }"
            type="text"
            name="fullname"
            v-model.trim="fullname"
            placeholder="Full Name"
            minlength="3"
          />

          <label for="email">Email</label>
          <input
            v-bind:class="{ 'err-input': errors.email }"
            type="email"
            name="email"
            v-model.trim="email"
            placeholder="Email"
          />

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

          <button type="submit" v-html="buttonContent()"></button>
        </form>
        <p>
          Already have an account?
          <router-link to="/">Sign In</router-link>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { saveUser } from "../helper/manageUser";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      email: "",
      fullname: "",
      errors: {
        username: false,
        password: false,
        fullname: false,
        email: false
      },
      isSubmitting: false,
      errMsg: ""
    };
  },
  methods: {
    handleRegistration() {
      if (
        this.username &&
        this.password &&
        this.fullname &&
        this.email &&
        this.validEmail(this.email)
      ) {
        this.errors.username = this.errors.password = this.errors.fullname = this.errors.email = false;
        this.isSubmitting = true;

        setTimeout(() => {
          this.isSubmitting = false;
          const data = {
            username: this.username,
            password: this.password,
            fullname: this.fullname,
            email: this.email
          };
          saveUser(data);

          this.$router.push("/");
        }, 1500);
      } else {
        if (!this.fullname) {
          this.errors.fullname = true;
        } else {
          this.errors.fullname = false;
        }

        if (!this.email || !this.validEmail(this.email)) {
          this.errors.email = true;
        } else {
          this.errors.email = false;
        }

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
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    buttonContent() {
      return this.isSubmitting
        ? ' <i class="fa fa-spinner fa-spin"></i>'
        : "Create Account";
    }
  }
};
</script>
