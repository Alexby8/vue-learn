<template lang="html">
  <div>
    <h2>Edit user</h2>

    <div v-if="!user" class="alert alert-warning">
      Загрузка...
    </div>
    <user-form v-else v-model="user" />

    <button type="button" class="btn btn-primary m-r-10" @click="save">Save</button>
    <button type="button" class="btn btn-warning" @click="remove">Delete</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UsersEdit',
  components: {
    UserForm: () => import('@/components/UserForm.vue')
  },
  data: function() {
    return {
      user: null
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios
        .get('http://localhost:3004/users/' + this.id)
        .then(response => {
          this.user = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    save() {
      axios
        .patch('http://localhost:3004/users/' + this.id, this.user)
        .then(() => {
          this.$router.push('/users')
        })
        .catch(error => {
          console.log(error)
        })
    },
    remove() {
      if (confirm('Remove this user?')) {
        axios
          .delete('http://localhost:3004/users/' + this.id)
          .then(() => {
            this.$router.push('/users')
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
}
</script>
