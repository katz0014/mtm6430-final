<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <h3>Welcome {{ user.name }}, you wonderful person!</h3>
    <p>You are logged in with the email: {{ user.email }}</p>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Edit Your Name:</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <br />
      <div>
        <label for="age">Edit Your Age:</label>
        <input type="text" id="age" v-model="age" />
      </div>
      <br />
      <div>
        <label for="age">Edit Your City:</label>
        <input type="text" id="city" v-model="city" />
      </div>
      <br />
      <div>
        <label for="job">Edit Your Job:</label>
        <input type="text" id="job" v-model="job" />
      </div>
      <br />
      <div>
        <label for="email">Edit Your Email:</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <br />
      <div>
        <label for="password">Edit Your Password:</label>
        <input type="text" id="pass" v-model="password" />
      </div>
      <br />
      <input type="submit" value="Submit" class="button" />
    </form>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      name: "",
      age: "",
      city: "",
      job: "",
      email: "",
      password: ""
    };
  },
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
