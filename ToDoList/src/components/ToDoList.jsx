import { useContext } from 'react';
import { TasksContext } from './TasksContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import toDoListImage from '../assets/imgToDo.png'

export default function ToDoList() {
  const { tasks, toggleTaskCompletion, deleteTask } = useContext(TasksContext);
  const buttonClass = 'bg-cyan-500 text-white py-2 rounded-md text-lg w-80 hover:border-2 hover:border-cyan-500 hover:bg-white hover:text-cyan-500 ';
  
  return (
    <section className="mx-6 font-serif my-5">
      <h2 className="text-center text-3xl my-10">To-Do List</h2>
      <div className="rounded-md border-slate-500 border-2 mx-16 p-4">
        <div className="flex justify-around mb-6">
          <button className={buttonClass}>All</button>
          <button className={buttonClass}>Done</button>
          <button className={buttonClass}>To-Do</button>
        </div>
        <div>
          {tasks.length === 0 ? (
            <div className="text-center my-8">
               <img src={toDoListImage} alt="No tasks" className="mx-auto my-4 opacity-70" /> 
              <p className="text-gray-700 font-mono">No tasks available. Add a new task to get started!</p>
            </div>
          ) : (
            <ul>
              {tasks.map((task, index) => (
                <li key={index} className="flex items-center justify-between rounded-md border-slate-300 border-2 py-4 px-4 my-3">
                  <div className="flex items-center flex-1">
                    <span
                      className={`flex-1 ${task.completed ? 'line-through text-red-500' : ''}`}
                    >
                      {task.text}
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(index)}
                    className="mr-4 text-green-500"
                  />
                  <div className="flex items-center">
                    <button className="mr-3 text-yellow-500">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      onClick={() => deleteTask(index)}
                      className="mr-3 text-red-500"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
