import TaskItem from "./TaskItem";

function TaskList({ tasks, editId, editText, setEditText, startEdit, saveEdit, cancelEdit, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          editId={editId}
          editText={editText}
          setEditText={setEditText}
          startEdit={startEdit}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
