<template lang="html">
  <div>
    <h2>Add user</h2>

    <UserForm v-model="user" />

    <button type="button" class="btn btn-primary" @click="save">Save</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UsersAdd',
  components: {
    UserForm: () => import('@/components/UserForm.vue')
  },
  data: function() {
    return {
      user: {
        isActive: true,
        balance: '0',
        picture: '',
        age: 0,
        accessLevel: '',
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        address: '',
        about: '',
        registered: ''
      }
    }
  },
  methods: {
    save() {
      axios
        .post('http://localhost:3004/users', this.user)
        .then(response => {
          this.$router.push('/users/edit/' + response.data.id)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
