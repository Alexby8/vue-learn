<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <form>
          <div class="form-group">
            <Checkbox v-model="localUser.isActive" title="Active" />
          </div>
          <div class="form-group">
            <label for="user_registered">Registered</label>
            <Datepicker v-model="localUser.registered" />
          </div>
          <div class="form-group">
            <label for="user_picture">Photo</label><br />
            <img :src="localUser.picture" class="img-thumbnail m-b-10" />
            <AvatarUpload v-model="localUser.picture" />
          </div>

          <ValidationProvider
            v-slot="{ errors, invalid }"
            name="First Name"
            rules="required"
            tag="div"
            class="form-group"
          >
            <label for="user_firstName">First Name</label>
            <input
              id="user_firstName"
              v-model="localUser.firstName"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': invalid }"
            />
            <div v-if="errors.length" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </ValidationProvider>

          <div class="form-group">
            <label for="user_lastName">Last Name</label>
            <input
              id="user_lastName"
              v-model="localUser.lastName"
              type="text"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="user_age">Age</label>
            <input id="user_age" v-model="localUser.age" type="text" class="form-control" />
          </div>

          <ValidationProvider
            v-slot="{ errors, invalid }"
            name="E-mail"
            rules="required|email"
            tag="div"
            class="form-group"
          >
            <label for="user_email">E-mail</label>
            <input
              id="user_email"
              v-model="localUser.email"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': invalid }"
            />
            <div v-if="errors.length" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </ValidationProvider>

          <div class="form-group">
            <label for="user_phone">Phone</label>
            <input id="user_phone" v-model="localUser.phone" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="user_company">Company</label>
            <input id="user_company" v-model="localUser.company" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="user_address">Address</label>
            <input id="user_address" v-model="localUser.address" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="user_balance">Balance</label>
            <input id="user_balance" v-model="localUser.balance" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="user_about">About</label>
            <textarea id="user_about" v-model="localUser.about" class="form-control"></textarea>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  components: {
    Datepicker: () => import('@/components/Datepicker.vue'),
    AvatarUpload: () => import('@/components/Avatar.vue'),
    Checkbox: () => import('@/components/Checkbox.vue')
  },
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
