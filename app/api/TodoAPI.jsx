var $ = require('jquery');
module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) { //check if array
      localStorage.setItem('todos', JSON.stringify(todos)); //have to convert array to string
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos); //has to convert string to array
    } catch (e) {}

    return $.isArray(todos)
      ? todos
      : [];

    // if ($.isArray(todos)) { same as above
    //   return todos;
    // } else {
    //   return [];
    // }
  }
};
