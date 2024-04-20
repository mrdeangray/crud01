import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Todos from './components/Todos';
import TodoProvider from './context/TodoProvider';
import CreateTodo from './components/CreateTodo';
import EditTodo from './components/EditTodo';

function App() {
  return (
    <div className="App">
      <TodoProvider>
      <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route exact path="/" element={<Todos />} />
          <Route exact path="/create" element={<CreateTodo />} />
          <Route exact path="/edit/:todo" element={<EditTodo />} />
        </Routes>
        </TodoProvider>
    </div>
  );
}

export default App;
