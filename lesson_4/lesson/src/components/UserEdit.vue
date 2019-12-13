<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <form>
          <div class="form-group">
            <label for="user_firstName">First Name</label>
            <input id="user_firstName" class="form-control" :value="user.firstName" />
          </div>
          <div class="form-group">
            <label for="user_lastName">Last Name</label>
            <input id="user_lastName" class="form-control" :value="user.lastName" />
          </div>
          <div class="form-group">
            <label for="user_email">E-mail</label>
            <input id="user_email" class="form-control" :value="user.email" />
          </div>
          <div class="form-group">
            <label for="user_phone">Phone</label>
            <input id="user_phone" class="form-control" :value="user.phone" />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-success">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserEdit',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
