<template lang="html">
  <div>
    <div v-if="!elements" class="alert alert-warning">
      Loading...
    </div>

    <div v-else-if="!elements.length" class="alert alert-warning">
      Elements not found
    </div>

    <div v-else>
      <TablePagesize v-model.number="pageSize" />

      <table class="table">
        <thead>
          <slot name="header"></slot>
        </thead>
        <tbody>
          <tr v-for="item in elements" :key="item.id">
            <slot name="row" v-bind="item"></slot>
          </tr>
        </tbody>
      </table>

      <TablePage v-model.number="currentPage" :page-size="pageSize" :total-rows="totalRows" />
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
  props: {
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
    pageSize() {
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
          this.totalRows = parseInt(response['headers']['x-total-count'])
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
