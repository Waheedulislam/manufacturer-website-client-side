import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Tools from './Components/Home/Home/Tools/Tools';
import Navbar from './Components/Shared/Navbar/Navbar';
import Login from './Components/LoginRegister/Login/Login'
import Register from './Components/LoginRegister/Register/Register'
import Review from './Components/Review/Review';
import About from './Components/About/About';
import NotFound from './Components/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="home" element={<Home></Home>} />
            <Route path="tools" element={<Tools></Tools>} />
            <Route path="review" element={<Review></Review>} />
            <Route path="about" element={<About></About>} />
            <Route path='login' element={<Login></Login>}></Route>
            <Route path="register" element={<Register></Register>} />
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
        </div>
      </Navbar>


    </div>
  );
}

export default App;
