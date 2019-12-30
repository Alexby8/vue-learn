<template>
  <div>
    <div class="row">
      <div class="col-md-2">
        <div class="form-group">
          <label for="table_pagesize">Show:</label>
          <select
            id="table_pagesize"
            :value="value"
            @input="updatePagesize($event.target.value)"
            class="form-control"
          >
            <option v-for="item in list" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageSize',
  props: {
    value: {
      type: Number,
      required: true
    },
    list: {
      type: Array,
      default: () => [10, 25, 100]
    }
  },
  methods: {
    updatePagesize(value) {
      this.$emit('input', value)
    }
  }
}
</script>
