<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <h3>Welcome {{ user.name }}!</h3>
    <p>You are logged in with the email: {{ user.email }}</p>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Edit Your Name:</label>
        <input type="text" id="name" v-model="user.name" />
      </div>
      <br />
      <div>
        <label for="age">Edit Your Age:</label>
        <input type="text" id="age" v-model="user.age" />
      </div>
      <br />
      <div>
        <label for="age">Edit Your City:</label>
        <input type="text" id="city" v-model="user.city" />
      </div>
      <br />
      <div>
        <label for="job">Edit Your Job:</label>
        <input type="text" id="job" v-model="user.job" />
      </div>
      <br />
      <div>
        <label for="email">Edit Your Email:</label>
        <input type="text" id="email" v-model="user.email" />
      </div>
      <br />
      <div>
        <label for="password">Edit Your Password:</label>
        <input type="text" id="pass" v-model="user.password" />
      </div>
      <br />
      <input type="submit" value="Submit" class="button" />
    </form>
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
  created() {
    this.getUserData();
  },

  methods: {
    ...mapActions(["fetchUser", "updateUser"]),
    getUserData() {
      let userEmail = localStorage.getItem("userEmail");
      this.fetchUser(userEmail);
    },
    submitForm() {
      this.updateUser();
    }
  }
};
</script>
<style>
form {
  width: 70%;
  margin: 0 auto;
  text-align: left;
}

input {
  width: 75%;
}

.button {
  width: 10%;
}
</style>
