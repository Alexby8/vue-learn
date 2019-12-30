<template>
  <div>
    <nav>
      <ul class="pagination">
        <li :class="{ disabled: currentPage === 1 }" class="page-item">
          <button @click="prevPage" type="button" class="page-link">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        <li
          v-for="item in maxPages"
          :key="item"
          :class="{ active: currentPage === item }"
          class="page-item"
        >
          <button @click="updatePage(item)" type="button" class="page-link">
            {{ item }}
          </button>
        </li>

        <li :class="{ disabled: currentPage === maxPages }" class="page-item">
          <button @click="nextPage" type="button" class="page-link">
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

      const newPage = this.currentPage - 1
      this.updatePage(newPage)
    },
    nextPage() {
      if (this.currentPage === this.maxPages) {
        return
      }

      const newPage = this.currentPage + 1
      this.updatePage(newPage)
    }
  }
}
</script>
