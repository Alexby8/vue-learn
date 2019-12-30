<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <nuxt-link class="navbar-brand" to="/">
        {{ projectTitle }}
      </nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div id="navbarsExampleDefault" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <nuxt-link tag="li" class="nav-item" to="/">
            <a class="nav-link">
              Home
            </a>
          </nuxt-link>
          <nuxt-link tag="li" class="nav-item" to="/users">
            <a class="nav-link">
              Users
            </a>
          </nuxt-link>
          <nuxt-link tag="li" class="nav-item" to="/users-phones">
            <a class="nav-link">
              Users Phones
            </a>
          </nuxt-link>
        </ul>
      </div>
    </nav>

    <main role="main" class="container">
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    projectTitle() {
      return this.$store.state.projectTitle
    }
  }
}
</script>

<style>
#app {
  margin-top: 80px;
  padding-bottom: 50px;
}
.m-b-20 {
  margin-bottom: 20px;
}
.m-b-10 {
  margin-bottom: 10px;
}
.m-r-10 {
  margin-right: 10px;
}
.m-t-10 {
  margin-top: 10px;
}
.hidden {
  display: none;
}
</style>
