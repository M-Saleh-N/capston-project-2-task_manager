function TaskInput({ taskDescription, setTaskDescription, handleAddTask }) {
    const isInputEmpty = !taskDescription.trim();

    return (
        <div>
            <label htmlFor="taskInput">Add New Task</label>
            <input
                id="taskInput"
                type="text"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="What task are you adding?"
            />
            <button onClick={handleAddTask} disabled={isInputEmpty}>
                Add Task
            </button>
        </div>
    );
}

export default TaskInput;


