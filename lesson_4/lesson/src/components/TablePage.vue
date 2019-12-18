<template>
  <div>
    <nav>
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><button type="button" class="page-link" @click="updatePagingValue(1)">1</button></li>
        <li class="page-item"><button type="button" class="page-link" @click="updatePagingValue(2)">2</button></li>
        <li class="page-item"><button type="button" class="page-link" @click="updatePagingValue(3)">3</button></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Paging',
  model: {
    prop: 'paging'
  },
  props: {
    paging: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localPaging: {
      page: 1,
      max: 1
    }
  }),
  watch: {
    localPaging: {
      handler: 'updatePaging'
    }
  },
  created() {
    this.localPaging = this.paging
  },
  methods: {
    updatePaging() {
      this.$emit('input', this.localPaging)
    },
    updatePagingValue(value){
      this.localPaging = Object.assign({}, {page: value, max: this.localPaging.max})
    }
  }
}
</script>
