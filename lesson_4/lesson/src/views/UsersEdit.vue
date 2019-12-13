<template lang="html">
  <div>
    <h2>Редактирование пользователя</h2>

    <user-edit :user="user" />
  </div>
</template>

<script>
import UserEdit from '@/components/UserEdit.vue'
import axios from 'axios'

export default {
  name: 'UserEdit',
  components: {
    'user-edit': UserEdit
  },
  data: function() {
    return {
      user: {}
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios.get('http://localhost:3004/users/' + this.$route.params.id).then(response => {
        this.user = response.data
      })
    }
  }
}
</script>
