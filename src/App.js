import { useState } from "react";
import AddTask from "./components/AddTask";   // ✅ use AddTask now
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskDescription, setTaskDescription] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddTask = () => {
    if (!taskDescription.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: taskDescription }]);
    setTaskDescription("");
  };

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const startEdit = (task) => {
    setEditId(task.id);
    setEditText(task.text);
  };

  const saveEdit = (id) => {
    if (!editText.trim()) return;
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editText } : task
      )
    );
    cancelEdit();
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="App" style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>📝 Task Manager</h2>
      <AddTask
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
        handleAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        editId={editId}
        editText={editText}
        setEditText={setEditText}
        startEdit={startEdit}
        saveEdit={saveEdit}
        cancelEdit={cancelEdit}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
