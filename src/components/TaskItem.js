 function TaskItem({ task, editId, editText, setEditText, startEdit, saveEdit, cancelEdit, deleteTask }) {
  const isEditing = editId === task.id;

  return (
    <li className="task-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && saveEdit(task.id)}
            placeholder="Edit your task"
          />
          <button onClick={() => saveEdit(task.id)} disabled={!editText.trim()}>
            Save
          </button>
          <button onClick={cancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => startEdit(task)}>Edit</button>
          <button onClick={() => window.confirm("Are you sure?") && deleteTask(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
