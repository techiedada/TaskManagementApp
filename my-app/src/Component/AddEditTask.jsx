import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TaskContext } from '../Context/TaskContext';

const AddEditTask = () => {
  const { addTask, editTask, tasks, user } = useContext(TaskContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [deadline, setDeadline] = useState('');
  const [reminder, setReminder] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id && tasks.length > 0) {
      const taskToEdit = tasks.find((task) => String(task.id) === String(id));
      if (taskToEdit) {
        setTitle(taskToEdit.title || '');
        setDescription(taskToEdit.description || '');
        setCategory(taskToEdit.category || '');
        setDeadline(taskToEdit.deadline || '');
        setReminder(taskToEdit.reminder || '');
      }
    }
  }, [id, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: id || crypto.randomUUID(),
      title,
      description,
      category,
      deadline,
      reminder,
      createdBy: user?.email,
    };

    if (id) {
      editTask(id, newTask);
    } else {
      addTask(newTask);
    }

    navigate('/dashboard');
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4 md:px-6 py-6 bg-white border border-gray-200 rounded shadow-md w-[90%]">

      <h2 className="text-2xl font-bold text-center mb-6">Create New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Category</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Learning">Learning</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Due Date</label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Reminder</label>
            <input
              type="datetime-local"
              value={reminder}
              onChange={(e) => setReminder(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {id ? 'Update Task' : 'Create Task'}
        </button>
      </form>
    </div>
  );
};

export default AddEditTask;