
let userForm = {
  template: '#user-form',
  props: {
    user: {
      type: Object,
      default: function(){
        return {};
      }
    }
  }
}

let app = new Vue({
  el: '#app',
  components:{
    'user-form': userForm
  },
  data: function(){
    return {
      user: {}
    }
  },
  mounted: function(){
    this.loadUser();
  },
  methods: {
    loadUser: function(){
      console.log('Data loaded');

      this.user = {
        id: 1, firstName: 'Ivan', lastName: 'Ivanov', patronymic: 'Ivanovich'
      };
    }
  }
});
