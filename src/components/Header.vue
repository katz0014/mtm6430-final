<template>
  <div class="mainHeader">
    <h2>State Manager</h2>
    <div id="nav">
      <router-link :to="{ name: 'Signup' }">Home</router-link>
      <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
    </div>
  </div>
</template>

<style>
.mainHeader {
  width: 100%;
  background-color: #3ca4ff;
  color: #6a3cff;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#nav a {
  text-decoration: none;
  color: #3cff97;
  padding: 35px;
}

#nav a:hover {
  color: #cb3cff;
}
</style>
