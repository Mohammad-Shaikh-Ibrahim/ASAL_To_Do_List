import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  function addTask(task) {
    const newTask = { text: task, completed: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  function toggleTaskCompletion(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  return (
    <TasksContext.Provider value={{ tasks, addTask, toggleTaskCompletion, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
}

TasksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
