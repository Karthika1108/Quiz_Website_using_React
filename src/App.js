
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Admin from './Admin'
import User from './User'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/Admin' element={<Admin/>} ></Route>
        <Route path='/User' element={<User/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
