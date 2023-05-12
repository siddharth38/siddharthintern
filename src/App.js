import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import Login from './Pages/Login/Login';
import Register from './Pages/Signin/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from './Pages/Mainpage/Mainpage';

import Mealplan from './Pages/Mealplan/Mealplan';
import Chatgpt from './Components/Chatgpt/Chatgpt';

function App() {
  return (
    <div className="App" >
     
      <Router>
     
      <Routes>
       

     
          < Route  exact path="/"
            element= {
              <Mainpage/>
            }
          />
        
      
		  <Route path="login" element={<Login />} />
		  <Route path="register" element={<Register/>} />
      <Route path="routine" element={<Chatgpt/>} />
      <Route path="meal" element={<Mealplan/>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
