<template>
  <div class="signUp">
    <h1>Sign Up</h1>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="name">Name</label>
        <input type="text" v-model="name" required />
      </div>
      <div>
        <label for="age">Age</label>
        <input type="age" v-model="age" required />
      </div>
      <div>
        <label for="city">City</label>
        <input type="city" v-model="city" required />
      </div>
      <div>
        <label for="job">Job</label>
        <input type="job" v-model="job" required />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="pass">Password</label>
        <input type="password" v-model="pass" required />
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
      name: "",
      age: "",
      city: "",
      job: "",
      email: "",
      pass: ""
    };
  },
  methods: {
    ...mapActions(["signUp"]),
    onSubmit() {
      const formData = {
        name: this.name,
        age: this.age,
        city: this.city,
        job: this.job,
        email: this.email,
        password: this.pass
      };
      this.signUp(formData);
    }
  }
};
</script>
<style lang="scss">
.signUp {
  width: 50%;
  text-align: left;
  margin: auto;
}

.button {
  position: absolute;
  margin: 0 auto;
}

form {
  border: 2px solid purple;
  border-radius: 10px;
  padding: 20px;
  padding-bottom: 50px;
  box-shadow: 3px 4px 10px;
}

label {
  display: block;
}

input {
  width: 70%;
}

button {
  margin: 5px 0;
  padding: 5px 10px;
}
</style>
