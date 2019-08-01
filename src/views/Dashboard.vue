<template>
  <div class="dashboard">
    <div class="dashboard-container">
      <h3>Welcome {{ userData.name }}!</h3>
      <p>You signed up with the email: {{ userData.email }}</p>
      <p v-for="input in userInput" :key="userInput.id">{{ userInput }}</p>
      <el-button class="button" type="primary" @click="clearData"
        >CLEAR YOUR MIND</el-button
      >
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

const info = ["name", "email", "password"];

export default {
  data() {
    return {
      userData: {
        name: "",
        email: ""
      },
      userInput: []
    };
  },
  computed: mapGetters(["getFormName", "getFormEmail"]),
  created() {
    this.userData.name = this.getFormName;
    this.userData.email = this.getFormEmail;
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
