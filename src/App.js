import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Tools from "./Components/Home/Home/Tools/Tools";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Login from "./Components/LoginRegister/Login/Login";
import Register from "./Components/LoginRegister/Register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./Components/Shared/NotFound/NotFound";
import Footer from "./Components/Shared/Footer/Footer";
import Purchase from "./Components/Purchase/Purchase";
import RequireAuth from "./Components/LoginRegister/Login/RequireAuth/RequireAuth";
import DashBoard from "./Components/DashBoard/DashBoard";
import MyOrders from "./Components/DashBoard/MyOrders";
import AddReview from "./Components/DashBoard/AddReview";
import MyProfile from "./Components/DashBoard/MyProfile";
import ManageUsers from "./Components/DashBoard/ManageUsers";
import RequireAdmin from "./Components/LoginRegister/Login/RequireAuth/RequireAdmin";
import ManageAllOrders from "./Components/DashBoard/ManageAllOrders";
import AddAProduct from "./Components/DashBoard/AddAProduct";
import ManageProducts from "./Components/DashBoard/ManageProducts";
import Payment from "./Components/DashBoard/Payment";
import Blogs from "./Components/Blogs/Blogs";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="tools" element={<Tools></Tools>} />
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>} />

        <Route
          path="purchase/:purchaseId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>

        {/* dashBoard  */}
        <Route
          path="dashBoard"
          element={
            <RequireAuth>
              <DashBoard></DashBoard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>

          <Route
            path="manageUsers"
            element={
              <RequireAdmin>
                <ManageUsers></ManageUsers>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageAllOrder"
            element={
              <RequireAdmin>
                <ManageAllOrders></ManageAllOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddAProduct></AddAProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProduct"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
        </Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
