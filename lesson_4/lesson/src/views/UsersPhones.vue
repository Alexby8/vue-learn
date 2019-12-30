<template>
  <div>
    <h2 class="m-b-20">Users Phones</h2>

    <TableView :url="url">
      <template v-slot:header>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone</th>
          <th></th>
        </tr>
      </template>
      <template v-slot:row="props">
        <td>{{ props.id }}</td>
        <td>{{ props.firstName + ' ' + props.lastName }}</td>
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
  name: 'UsersPhones',
  components: {
    TableView: () => import('@/components/Table.vue')
  },
  data: () => ({
    url: 'http://localhost:3004/users'
  })
}
</script>
