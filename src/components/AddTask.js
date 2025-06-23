function AddTask({ newTask, setNewTask, addTask}){
    return(
        <div>
            <input
            type="text"
            value={newTask}
            onChange={(e) =>
                setNewTask(e.target.value)
                }
                placeholder="Add new task"
            />
            <button onClick={addTask}>Add</button>
        </div>
    );
}

export default AddTask