import '../assets/styles/App.scss'
import Layout from './Layout';
import CreateTask from './CreateTask';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskDetails from './TaskDetails';
import Error from './Error';


function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<CreateTask />} />
                <Route path="/task/:id" element={<TaskDetails />} />
                <Route path="/error" element={<Error />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
