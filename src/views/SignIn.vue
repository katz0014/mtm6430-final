<template>
  <div class="signIn">
    <h1>Sign In</h1>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <div>
        <label for="pass">Password</label>
        <input type="password" v-model="pass" id="pass" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      pass: ""
    };
  },
  methods: {
    ...mapActions(["signIn"]),
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.pass
      };
      this.signIn(formData);
    }
  }
};
</script>
<style>
form {
  padding: 25px;
  background: lightgrey;
  border: 2px solid purple;
  padding-bottom: 50px;
}

input,
button {
  margin: 5px auto;
  padding: 5px 10px;
}

.signIn {
  width: 50%;
  text-align: left;
  margin: auto;
}

label {
  padding-right: 5px;
}
</style> 