import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask, deleteTask } from "../redux/taskSlice";

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editDescription, setEditDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleSaveEdit = () => {
    if (editDescription.trim()) {
      dispatch(editTask({ id: task.id, description: editDescription }));
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
        className="w-5 h-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-500"
      />

      {isEditing ? (
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="flex-1 px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSaveEdit}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-lg text-sm"
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <span
            className={`flex-1 ${
              task.isDone ? "line-through text-gray-500" : "text-gray-800"
            }`}
          >
            {task.description}
          </span>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg text-sm"
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default Task;
