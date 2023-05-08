import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({
  todos, handleChange, editTodo, delTodo,
}) => {
  const listStyle = {
    listStyle: 'none',
    paddingLeft: '0',
  };

  return (
    <ul style={listStyle}>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          handleChange={handleChange}
          editTodo={editTodo}
          delTodo={delTodo}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  editTodo: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TodoList;
