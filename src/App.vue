<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'home'}">Home</router-link>|
      <router-link v-if="!auth" :to="{ name: 'signup' }">Sign Up</router-link>|
      <router-link v-if="!auth" :to="{ name: 'signin' }">Sign In</router-link>|
      <router-link v-if="auth" :to="{ name: 'dashboard' }">Dashboard</router-link>
      <a v-if="auth" class="logout" @click="logout">Logout</a>
    </div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>
<style>
h1 {
  color: purple;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ff533c;
}
</style>
