import TaskList from '../../components/TaskList'

import baseTasks from './tasks.json'

const App = () => {
  return (
    <div className="flex h-screen justify-center items-center m-0">
      <section className="w-full mx-4 md:w-96">
        <TaskList title="RedValley test ToDo List" preloadTasks={baseTasks.tasks} />
      </section>
    </div>
  )
}

export default App
