import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from './feature/todo/todoslice';

function App() {
  const [text, setText] = useState('');
  
  // Edit mode track karne ke liye
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Naya Todo add karna
  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  // Edit button dabane par
  const handleEditClick = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  // Save button dabane par Redux me update bhejte hain
  const handleSave = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, newText: editText }));
      setEditId(null);
      setEditText('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Redux Todo App (with Edit & Save)</h2>

      {/* Add Todo Input */}
      <input
        type="text"
        placeholder="Enter todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd} style={{ marginLeft: '10px' }}>
        Add Todo
      </button>

      {/* Todo List */}
      <ul style={{ marginTop: '20px', listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            {editId === todo.id ? (
              // EDIT MODE: Input box + Save button
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  onClick={() => handleSave(todo.id)}
                  style={{ marginLeft: '8px' }}
                >
                  Save
                </button>
                <button
                  onClick={() => setEditId(null)}
                  style={{ marginLeft: '5px' }}
                >
                  Cancel
                </button>
              </>
            ) : (
              // NORMAL MODE: Text + Edit button + Delete button
              <>
                <span style={{ marginRight: '15px' }}>{todo.text}</span>
                <button onClick={() => handleEditClick(todo)}>Edit</button>
                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  style={{ marginLeft: '5px' }}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;