import AddTask from './components/AddTask'
import ListTask from './components/ListTask'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Todo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </div>
  )
}

export default App