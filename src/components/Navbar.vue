<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light navMain">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Twitter</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/contact">Sign up</router-link>
          <router-link class="nav-link" to="/login">Login</router-link>
          <button class="btn btn-primary" @click="logOut"> Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logOut() {
      localStorage.clear()
      this.$router.push({ name: "Landing" });
    }
  },

}
</script>

<style>
.navMain {
  padding-left: 5rem;
  padding-right: 5rem;
}
</style>