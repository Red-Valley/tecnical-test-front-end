import TaskList from '../../components/TaskList'

const App = () => {
  return (
    <div className="flex h-screen justify-center items-center m-0">
      <section className="w-full mx-4 md:w-96">
        <TaskList
          title="ToDo List"
        />
      </section>
    </div>
  )
}

export default App
