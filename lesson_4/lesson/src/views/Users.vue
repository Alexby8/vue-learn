<template lang="html">
  <div>
    <h2 class="m-b-20">Users list</h2>

    <RouterLink class="btn btn-primary m-b-20" to="/users/add">Add user</RouterLink>

    <TableView :url="url">
      <template v-slot:header>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Balance</th>
          <th>E-mail</th>
          <th>Phone</th>
          <th></th>
        </tr>
      </template>
      <template v-slot:row="props">
        <td>{{ props.id }}</td>
        <td>{{ props.firstName + ' ' + props.lastName }}</td>
        <td>{{ props.age }}</td>
        <td>{{ props.balance }}</td>
        <td>{{ props.email }}</td>
        <td>{{ props.phone }}</td>
        <td>
          <RouterLink class="btn btn-primary m-r-10" :to="'/users/edit/' + props.id">
            Edit
          </RouterLink>
        </td>
      </template>
    </TableView>
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
