import './App.css';
import LogIn from "./Components/Authentication/AuthComponents/LogIn"
import SignUp from "./Components/Authentication/AuthComponents/SignUp"
import ForgotPassword from "./Components/Authentication/AuthComponents/ForgotPassword"
import Home from './Home/Home';
import PendingTask from './Home/PendingTask';
import CompletedTask from './Home/CompletedTask';
import OverDueTasks from './Home/OverDueTasks';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/home' element={<Home />} />
          <Route path='/pendingtasks' element={<PendingTask />} />
          <Route path='/completedtask' element={<CompletedTask />} />
          <Route path='/overdue' element={<OverDueTasks/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
