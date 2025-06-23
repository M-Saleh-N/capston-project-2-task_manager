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
        </div>

    );
}