<template lang="html">
  <div>
    <h2>Редактирование пользователя</h2>

    <div v-if="!user" class="alert alert-warning">
      Загрузка...
    </div>
    <user-edit v-else v-model="user" />
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
      axios.get('http://localhost:3004/users/' + this.id).then(response => {
        this.user = response.data
      })
    }
  }
}
</script>
