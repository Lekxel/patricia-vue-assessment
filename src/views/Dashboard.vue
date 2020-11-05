<template>
  <div id="container">
    <section>
      <button id="logout" @click="handleLogout()">Logout</button>
      <img src="/photo.png" alt="photo" />
      <h2>{{ user.fullname }}</h2>
      <h5 id="subtitle">@{{ user.username }}</h5>
      <div class="line"></div>

      <h3>Personal Info</h3>
      <h5 class="title">Abouts</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius
        in mollitia qui recusandae impedit, dolorum accusantium at cupiditate,
        possimus eaque provident quos aperiam sequi a nesciunt et laborum. Quas
        recusandae delectus nulla saepe quia tempora. Sit ipsum, voluptatum ad
        illo soluta expedita, incidunt ea natus sint beatae nihil sed!
      </p>

      <p id="mail">
        Contact: <span>{{ user.email }}</span>
      </p>
    </section>
    <footer>
      <p>Copyright &copy; {{ new Date().getFullYear() }} <b>MyWebsite</b></p>
    </footer>
  </div>
</template>

<script>
import { getUser, logout } from "../helper/manageUser";
export default {
  name: "Dashboard",
  data() {
    return {
      user: {}
    };
  },
  mounted() {
    const user = getUser();
    this.user = user;
  },
  methods: {
    handleLogout() {
      logout();
      this.$router.push("/");
    }
  }
};
</script>
