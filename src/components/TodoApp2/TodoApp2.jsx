import React, { useReducer } from 'react';
import "../TodoApp2/TodoApp2.scss";

// Khởi tạo trạng thái ban đầu
const initState = {
  todoInput: '',
  todos: []
};

// Các hành động
const SET_INPUT_VALUE = 'set_input_value';
const ADD_TODO = 'add';
const UPDATE_TODO = 'update';
const DELETE_TODO = 'delete';

// Hàm action creators
const setTodoInputValue = payload => ({
  type: SET_INPUT_VALUE,
  payload
});

const addTodo = () => ({
  type: ADD_TODO
});

const updateTodo = (index) => ({
  type: UPDATE_TODO,
  index
});

const deleteTodo = (index) => ({
  type: DELETE_TODO,
  index
});

// Reducer
const reducer = (state, action) => {
  switch(action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        todoInput: action.payload
      };
    case ADD_TODO:
      if (!state.todoInput.trim()) {
        return state; // Không thêm nếu todoInput trống
      }
      return {
        todos: [...state.todos, state.todoInput],
        todoInput: ''
      };
    case UPDATE_TODO:
      return {
        ...state,
        todoInput: state.todos[action.index]
      };
    case DELETE_TODO:
      const filteredTodos = state.todos.filter((_, index) => index !== action.index);
      return {
        ...state,
        todos: filteredTodos
      };
    default:
      throw new Error("Invalid action");
  }
};

// Component TodoApp2
function TodoApp2() {
  const [todo, dispatch] = useReducer(reducer, initState);

  const handleUpdate = (index) => {
    dispatch(updateTodo(index));
  };

  return (
    <div className='app'>
      <h1>Todo</h1>
      <input
        type="text"
        placeholder='Enter your todo'
        value={todo.todoInput}
        onChange={e => dispatch(setTodoInputValue(e.target.value))}
      />
      <button onClick={() => dispatch(addTodo())}>Add todo</button>

      <ul>
        {todo.todos.map((item, index) => (
          <li key={index}>
            <p style={{display:'inline'}}>
              {item}
            </p>
            <button onClick={() => dispatch(deleteTodo(index))}>&times;</button>
            <button onClick={() => handleUpdate(index)}>Sửa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp2;
