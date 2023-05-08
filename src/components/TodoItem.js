import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const {
    item,
    editTodo,
    delTodo,
    handleChange,
  } = props;

  const [editing, setEditing] = useState(false);

  const itemStyles = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const actionBtnStyles = {
    backgroundColor: 'transparent',
    padding: '0.25rem 0.35rem',
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdate = (e) => {
    if (e.key === 'Enter') setEditing(false);
  };

  return (
    <li>
      <div style={itemStyles}>
        <label htmlFor={`todo-item-${item.id}`}>
          <input
            id={`todo-item-${item.id}`}
            type="checkbox"
            name="completed"
            checked={item.completed}
            onChange={() => handleChange(item.id)}
          />
          <span>{item.name}</span>
        </label>

        <span className="btn-actions">
          <button
            type="button"
            style={actionBtnStyles}
            onClick={handleEditing}
          >
            <i className="ri-edit-line" />
          </button>

          <button
            type="button"
            style={actionBtnStyles}
            onClick={() => delTodo(item.id)}
          >
            <i className="ri-delete-bin-7-line" />
          </button>
        </span>
      </div>

      {editing === true && (
        <>
          <input
            type="text"
            value={item.name}
            onKeyDown={handleUpdate}
            onChange={(e) => editTodo({
              ...item,
              name: e.target.value,
            })}
            className="edit-input"
          />
        </>
      )}
    </li>
  );
};

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  editTodo: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TodoItem;
