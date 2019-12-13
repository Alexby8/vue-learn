<template lang="html">
  <div>
    <h2>Список пользователей</h2>

    <div v-if="!users.length" class="alert alert-warning">
      Загрузка...
    </div>
    <user-list v-else :users="users" />
  </div>
</template>

<script>
import UsersList from '@/components/UsersList.vue'
import axios from 'axios'

export default {
  name: 'UsersList',
  components: {
    'user-list': UsersList
  },
  data: function() {
    return {
      users: []
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      axios.get('http://localhost:3004/users').then(response => {
        this.users = response.data
      })
    }
  }
}
</script>
