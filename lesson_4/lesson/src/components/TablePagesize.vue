<template>
  <div>
    <div class="row">
      <div class="col-md-2">
        <div class="form-group">
          <label for="table_pagesize">Show:</label>
          <select id="table_pagesize" v-model="localPagesize" class="form-control">
            <option :value="10">10</option>
            <option :value="25">25</option>
            <option :value="0">All</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagesize',
  model: {
    prop: 'pagesize'
  },
  props: {
    pagesize: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    localPagesize: 10
  }),
  watch: {
    localPagesize: {
      handler: 'updatePagesize'
    }
  },
  created() {
    this.localPagesize = this.pagesize
  },
  methods: {
    updatePagesize() {
      this.$emit('input', this.localPagesize)
    }
  }
}
</script>
