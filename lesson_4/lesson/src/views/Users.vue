<template lang="html">
  <div>
    <h2 class="m-b-20">Users list</h2>

    <router-link class="btn btn-primary m-b-20" to="/users/add">Add user</router-link>

    <table-view :url="url" />
  </div>
</template>

<script>

export default {
  name: 'UsersList',
  components: {
    TableView: () => import('@/components/Table.vue')
  },
  data: () => ({
      url: 'http://localhost:3004/users'
  })
}
</script>
