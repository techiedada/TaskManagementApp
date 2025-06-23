// import './App.css';
import Signup from './Component/Signup';
import Login from './Component/Login';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import AddEditTask from './Component/AddEditTask';
import { TaskProvider } from "./Context/TaskContext";

function App() {
  return (
    <div className="App">
    {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    {/* <Signup/> */}
    {/* <Login/> */}

    <TaskProvider>

    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/dashboard/addtask" element={<AddEditTask/>} />
    <Route path="/edit/:id" element={<AddEditTask />} />
    </Routes>

    </TaskProvider>
    </div>



  );
}

export default App;
