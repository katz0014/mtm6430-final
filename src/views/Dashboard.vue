<template>
  <div class="dashboard">
    <div class="dashboard-container">
      <h1>Dashboard</h1>
      <h3>Welcome {{ userData.name }}!</h3>
      <p>You are logged in with the email: {{ userData.email }}</p>
      <form @submit.prevent="submitForm">
        <label for="name">Edit Your Name:</label>
        <input type="text" id="name" v-model="user.name" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      userData: "getUser"
    }),
    user() {
      return !this.userData ? false : this.userData;
    }
  },
  create() {
    this.getuserdata();
  },

  methods: {
    ...mapActions(["fetchUser", "updateUser"]),
    getUserData() {
      let userEmail = localStorage.getItem("userEmail");
      this.fetchUser(userEmail);
    },
    formSubmit() {
      this.updateUser();
    }
  }
};
</script>
<style lang="scss">
.dashboard {
  text-align: left;
  margin: auto;
  padding-top: 80px;
}
.dashboard-container {
  border-radius: 10px;
  text-align: center;
  border: 1px solid purple;
  width: 50%;
  margin: 0 auto;
}

.dashboard-container .button {
  padding: 10px;
  margin-top: 30px;
}

.dashboard-container p {
  margin-bottom: 15px;
}
</style>
