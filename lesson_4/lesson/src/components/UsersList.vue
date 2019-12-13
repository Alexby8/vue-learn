<template>
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Age</th>
        <th>Balance</th>
        <th>E-mail</th>
        <th>Phone</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) in users" :key="user.id">
        <td>{{ index + 1 }}</td>
        <td>{{ user.firstName + ' ' + user.lastName }}</td>
        <td>{{ user.age }}</td>
        <td>{{ user.balance }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>
          <router-link class="btn btn-primary" :to="'/users/edit/' + user.id">Edit</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'UsersList',
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>
