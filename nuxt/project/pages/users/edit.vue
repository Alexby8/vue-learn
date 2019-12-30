<template lang="html">
  <div>
    <h2>Edit user</h2>

    <div v-if="!user" class="alert alert-warning">
      Loading...
    </div>
    <template v-else>
      <ValidationObserver ref="form">
        <UserForm v-model="user" />
      </ValidationObserver>

      <button @click="save" type="button" class="btn btn-primary m-r-10">Save</button>
      <button @click="remove" type="button" class="btn btn-warning">Delete</button>
    </template>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UsersEdit',
  components: {
    UserForm: () => import('@/components/UserForm.vue')
  },
  data() {
    return {
      user: null
    }
  },
  computed: {
    id() {
      return this.$route.query.id
    },
    userApiLink() {
      return 'http://localhost:3004/users/' + this.id
    }
  },
  asyncData(route) {
    return axios
      .get('http://localhost:3004/users/' + route.query.id)
      .then(response => {
        return { user: response.data }
      })
      .catch(error => {
        console.log(error)
      })
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios
        .get(this.userApiLink)
        .then(response => {
          this.user = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    redirectToList() {
      this.$router.push('/users')
    },
    async save() {
      const isValid = await this.$refs.form.validate()
      if (!isValid) {
        alert('Errors in form fields')
        return
      }

      axios
        .patch(this.userApiLink, this.user)
        .then(() => {
          this.redirectToList()
        })
        .catch(error => {
          console.log(error)
        })
    },
    remove() {
      if (!confirm('Remove this user?')) {
        return
      }

      axios
        .delete(this.userApiLink)
        .then(() => {
          this.redirectToList()
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
