<template>
  <div>
    <input ref="datepicker" :value="value" type="text" class="form-control" />
    <button @click="showCalendar" type="button" class="btn btn-primary m-t-10">
      Show calendar
    </button>
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

export default {
  name: 'Datepicker',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({
    fp: null
  }),
  watch: {
    value: 'updateDatepicker'
  },
  mounted() {
    this.initDatepicker()
  },
  beforeDestroy() {
    if (this.fp) {
      this.fp.destroy()
    }
  },
  methods: {
    update(newDate) {
      this.$emit('input', newDate)
    },
    initDatepicker() {
      this.fp = flatpickr(this.$refs.datepicker, {
        dateFormat: 'd.m.Y',
        onChange: (_, dateStr) => this.update(dateStr)
      })
    },
    updateDatepicker() {
      if (this.fp) {
        this.fp.setDate(this.value)
      }
    },
    showCalendar() {
      this.$refs.datepicker.focus()
    }
  }
}
</script>
