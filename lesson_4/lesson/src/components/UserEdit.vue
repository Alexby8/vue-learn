<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <form>
          <div class="form-group">
            <label for="user_firstName">First Name</label>
            <input id="user_firstName" v-model="localUser.firstName" class="form-control" />
          </div>
          <div class="form-group">
            <label for="user_lastName">Last Name</label>
            <input id="user_lastName" v-model="localUser.lastName" class="form-control" />
          </div>
          <div class="form-group">
            <label for="user_email">E-mail</label>
            <input id="user_email" v-model="localUser.email" class="form-control" />
          </div>
          <div class="form-group">
            <label for="user_phone">Phone</label>
            <input id="user_phone" v-model="localUser.phone" class="form-control" />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-success">Save</button>
          </div>
        </form>
      </div>
    </div>

    <pre>{{ user }}</pre>
    <pre>{{ localUser }}</pre>
  </div>
</template>

<script>
export default {
  name: 'UserEdit',
  model: {
    prop: 'user'
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localUser: null
  }),
  watch: {
    localUser: {
      deep: true,
      handler: 'updateUser'
    }
  },
  created() {
    this.localUser = Object.assign({}, this.user)
  },
  methods: {
    updateUser() {
      this.$emit('input', Object.assign({}, this.localUser))
    }
  }
}
</script>
