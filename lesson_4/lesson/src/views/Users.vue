<template lang="html">
  <div>
    <h2 class="m-b-20">Users list</h2>

    <router-link class="btn btn-primary m-b-20" to="/users/add">Add user</router-link>

    <div v-if="!users.length" class="alert alert-warning">
      Загрузка...
    </div>

    <div v-else>
      <table-pagesize v-model="pagesize" />
      <user-list :users="users" />
      <table-page v-model="paging" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UsersList',
  components: {
    UserList: () => import('@/components/UsersList.vue'),
    TablePagesize: () => import('@/components/TablePagesize.vue'),
    TablePage: () => import('@/components/TablePage.vue')
  },
  data: function() {
    return {
      users: [],
      pagesize: 10,
      paging: {
        page: 1,
        max: 1
      }
    }
  },
  watch: {
    pagesize: {
      handler: 'loadUsers'
    },
    paging: {
      deep: true,
      handler: 'loadUsers'
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      let page_filter = this.pagesize
        ? '?_page=' + this.paging.page + '&_limit=' + this.pagesize
        : ''

      axios
        .get('http://localhost:3004/users' + page_filter)
        .then(response => {
          this.users = response.data
        })
        .catch(error => {
          console.log(error)
        })

      axios
        .get('http://localhost:3004/users')
        .then(response => {
          this.paging.max = response.data.length
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
