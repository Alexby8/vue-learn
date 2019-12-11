
var usersList = {
  template: '#users-list',
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}

var app = new Vue({
  el: '#app',
  components:{
    'users-list': usersList
  },
  data: function(){
    return {
      users: []
    }
  },
  mounted: function(){
    this.loadUsers();
  },
  methods: {
    loadUsers: function(){
      var that = this;

      axios.get('db.json')
        .then(function (response) {
          that.users = response.data;
          console.log('Data loaded');
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }
});
