
let usersList = {
  template: '#users-list',
  props: {
    users: {
      type: Array,
      default: function(){
        return [];
      }
    }
  }
}

let app = new Vue({
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
      let that = this;

      axios.get('db.json')
        .then(function (response) {
          that.users = response.data;
          console.log('Data loaded');
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });

      /*this.users = [
        { id: 1, firstName: 'Ivan', lastName: 'Ivanov', patronymic: 'Ivanovich' },
        { id: 2, firstName: 'Petr', lastName: 'Petrov', patronymic: 'Petrovich' },
        { id: 3, firstName: 'Dmitry', lastName: 'Dmitriev', patronymic: 'Dmitrievich' },
        { id: 4, firstName: 'Oleg', lastName: 'Olegov', patronymic: 'Olegovich' },
        { id: 5, firstName: 'Roman', lastName: 'Romanov', patronymic: 'Romanovich' }
      ];*/
    }
  }
});
