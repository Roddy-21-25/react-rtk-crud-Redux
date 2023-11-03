import { useSelector } from "react-redux";

// importaciones del slide de Redux
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const handleDeleete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <button onClick={() => handleDeleete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
