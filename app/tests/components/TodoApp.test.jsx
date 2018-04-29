var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);

    //Expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'aasdfasdf',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});
    //Check todos first item has completed item of false
    expect(todoApp.state.todos[0].completed).toBe(false);
    //call handleToggle with 11
    todoApp.handleToggle(11);

    //Verify that value changed
    expect(todoApp.state.todos[0].completed).toBe(true);

    // Expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  // Test that when toggle from to true to false, completedAt gets removed
  it('should toggle toDo from completed to incompleted', () => {
    var todoData = {
      id: 11,
      text: 'aasdfasdf',
      completed: true,
      createdAt: 0,
      completedAt: 123
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});
    //Check todos first item has completed item of false
    expect(todoApp.state.todos[0].completed).toBe(true);
    //call handleToggle with 11
    todoApp.handleToggle(11);

    //Verify that value changed
    expect(todoApp.state.todos[0].completed).toBe(false);

    // Expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
