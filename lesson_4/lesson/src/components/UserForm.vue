<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <form>
          <div class="form-group">
            <input id="user_active" v-model="localUser.isActive" type="checkbox" />
            <label for="user_active">Active</label>
          </div>
          <div class="form-group">
            <label for="user_firstName">First Name</label>
            <input id="user_firstName" v-model="localUser.firstName" class="form-control" />
          </div>
          <div class="form-group">
            <label for="user_lastName">Last Name</label>
            <input id="user_lastName" v-model="localUser.lastName" class="form-control" />
          </div>
          <div class="form-group">
            <label for="user_age">Age</label>
            <input id="user_age" v-model="localUser.age" class="form-control" />
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
            <label for="user_company">Company</label>
            <input id="user_company" v-model="localUser.company" class="form-control" />
          </div>
          <div class="form-group">
            <label for="user_address">Address</label>
            <input id="user_address" v-model="localUser.address" class="form-control" />
          </div>
          <div class="form-group">
            <label for="user_balance">Balance</label>
            <input id="user_balance" v-model="localUser.balance" class="form-control" />
          </div>
          <div class="form-group">
            <label for="user_about">About</label>
            <textarea id="user_about" v-model="localUser.about" class="form-control"></textarea>
          </div>
        </form>
      </div>
    </div>

    <!--<pre>{{ user }}</pre>
    <pre>{{ localUser }}</pre>-->
  </div>
</template>

<script>
export default {
  name: 'UserForm',
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
