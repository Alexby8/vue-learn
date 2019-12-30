<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <RouterLink class="navbar-brand" to="/">{{ projectTitle }}</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarsExampleDefault" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <RouterLink tag="li" class="nav-item" to="/">
            <a class="nav-link">
              Home
            </a>
          </RouterLink>
          <RouterLink tag="li" class="nav-item" to="/users">
            <a class="nav-link">
              Users
            </a>
          </RouterLink>
          <RouterLink tag="li" class="nav-item" to="/users-phones">
            <a class="nav-link">
              Users Phones
            </a>
          </RouterLink>
        </ul>
      </div>
    </nav>

    <main role="main" class="container">
      <RouterView />
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
