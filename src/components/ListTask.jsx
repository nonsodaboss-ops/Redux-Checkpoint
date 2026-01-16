import { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

function ListTask() {
  const [filter, setFilter] = useState('all')
  const tasks = useSelector((state) => state.tasks.tasks)

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone
    if (filter === 'notDone') return !task.isDone
    return true
  })

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg font-semibold ${
            filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('done')}
          className={`px-4 py-2 rounded-lg font-semibold ${
            filter === 'done' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Done
        </button>
        <button
          onClick={() => setFilter('notDone')}
          className={`px-4 py-2 rounded-lg font-semibold ${
            filter === 'notDone' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Not Done
        </button>
      </div>

      <div className="space-y-2">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No tasks found</p>
        ) : (
          filteredTasks.map((task) => <Task key={task.id} task={task} />)
        )}
      </div>
    </div>
  )
}

export default ListTask