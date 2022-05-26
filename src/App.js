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
import Footer from './Components/Shared/Footer/Footer';
import Purchase from './Components/Purchase/Purchase';
import RequireAuth from './Components/LoginRegister/Login/RequireAuth/RequireAuth';
import DashBoard from './Components/DashBoard/DashBoard';
import MyOrders from './Components/DashBoard/MyOrders';
import MyReview from './Components/DashBoard/MyReview';
import MyProfile from './Components/DashBoard/MyProfile';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="tools" element={<Tools></Tools>} />
        <Route path="review" element={<Review></Review>} />
        <Route path="about" element={<About></About>} />
        <Route path='login' element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>} />

        <Route path='purchase/:purchaseId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>

        {/* dashBoard  */}
        <Route path='dashBoard' element={
          <RequireAuth>
            <DashBoard></DashBoard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>


    </div >
  );
}

export default App;
