<template>
  <div>
    <label class="checkbox-label">
      <input :checked="checked" @change="update($event.target.checked)" type="checkbox" />
      <div class="checkbox-indicator" />
      <div class="checkbox-text">{{ title }}</div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    update(value) {
      this.$emit('change', value)
    }
  }
}
</script>

<style lang="css" scoped>
.checkbox-label {
  font-size: 0px;
  cursor: pointer;
}
.checkbox-label input {
  display: none;
}
.checkbox-indicator {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 2px;
  margin-right: 10px;
  background: #fff;
}
.checkbox-text {
  display: inline-block;
  vertical-align: middle;
  font-size: 16px;
}
.checkbox-label input:checked ~ .checkbox-indicator {
  background: #007bff;
  border: 1px solid #007bff;
}
</style>
