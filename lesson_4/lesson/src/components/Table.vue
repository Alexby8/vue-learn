<template lang="html">
  <div>
    <div v-if="!elements" class="alert alert-warning">
      Loading...
    </div>

    <div v-else-if="!elements.length" class="alert alert-warning">
      Elements not found
    </div>

    <div v-else>
      <table-pagesize v-model.number="pageSize" />

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
          <tr v-for="item in elements" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.firstName + ' ' + item.lastName }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.balance }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone }}</td>
            <td>
              <router-link class="btn btn-primary m-r-10" :to="'/users/edit/' + item.id">
                Edit
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>

      <table-page v-model.number="currentPage" :page-size="pageSize" :total-rows="totalRows" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Table',
  components: {
    TablePagesize: () => import('@/components/TablePagesize.vue'),
    TablePage: () => import('@/components/TablePage.vue')
  },
  props:{
    url: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      elements: null,
      pageSize: 10,
      currentPage: 1,
      totalRows: 1
    }
  },
  watch: {
    pageSize(){
      this.currentPage = 1
      this.loadElements()
    },
    currentPage: 'loadElements'
  },
  mounted() {
    this.loadElements()
  },
  methods: {
    loadElements() {
      axios
        .get(this.url, {
          params: {
            _page: this.currentPage,
            _limit: this.pageSize
          }
        })
        .then(response => {
          this.elements = response.data
          this.totalRows = parseInt(response["headers"]["x-total-count"])
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
