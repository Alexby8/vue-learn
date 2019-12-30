<template>
  <div>
    <h2>Edit user</h2>

    <div v-if="!user" class="alert alert-warning">
      Loading...
    </div>
    <template v-else>
      <ValidationObserver ref="form">
        <UserForm v-model="user" />
      </ValidationObserver>

      <button type="button" class="btn btn-primary m-r-10" @click="save">Save</button>
      <button type="button" class="btn btn-warning" @click="remove">Delete</button>
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
  data: function() {
    return {
      user: null
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    userApiLink() {
      return 'http://localhost:3004/users/' + this.id
    }
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
