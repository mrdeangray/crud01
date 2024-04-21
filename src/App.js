import { Routes, Route } from 'react-router-dom';
import Todos from './components/ReadTodos';
import TodoProvider from './context/TodoProvider';
import CreateTodo from './components/CreateTodo';
import EditTodo from './components/UpdateTodo';
import DeleteTodo from './components/DeleteTodo';

function App() {
  return (
    <div className="App">
      <TodoProvider>

        <Routes>
          <Route exact path="/" element={<Todos />} />
          <Route exact path="/create" element={<CreateTodo />} />
          <Route exact path="/edit/:todo" element={<EditTodo />} />
          <Route exact path="/delete/:todo" element={<DeleteTodo />} />
        </Routes>
        </TodoProvider>
    </div>
  );
}

export default App;
