<template>
  <div>
    <nav>
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button type="button" class="page-link" @click="prevPage">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        <li
          v-for="item in maxPages"
          :key="item"
          class="page-item"
          :class="{ active: currentPage === item }"
        >
          <button type="button" class="page-link" @click="updatePage(item)">{{ item }}</button>
        </li>

        <li class="page-item" :class="{ disabled: currentPage === maxPages }">
          <button type="button" class="page-link" @click="nextPage">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Paging',
  model: {
    prop: 'currentPage'
  },
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      required: true
    },
    totalRows: {
      type: Number,
      required: true
    }
  },
  computed: {
    maxPages() {
      return Math.ceil(this.totalRows / this.pageSize)
    }
  },
  methods: {
    updatePage(currentPage) {
      this.$emit('input', currentPage)
    },
    prevPage() {
      if (this.currentPage === 1) {
        return
      }

      let newPage = this.currentPage - 1
      this.updatePage(newPage)
    },
    nextPage() {
      if (this.currentPage === this.maxPages) {
        return
      }

      let newPage = this.currentPage + 1
      this.updatePage(newPage)
    }
  }
}
</script>
