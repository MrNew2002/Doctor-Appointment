import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/signup";
import Contact from "../pages/Contact";
import Doctor from "../pages/Doctors/Doctor";
import DoctorDetail from "../pages/Doctors/DoctorDetail";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/doctor-account/Dashboard";
import ProtectedRouter from "./ProtectedRouter";
import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctor />} />
      <Route path="/doctors/:id" element={<DoctorDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRouter allowedRoles={"patient"}>
            <MyAccount />
          </ProtectedRouter>
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <ProtectedRouter allowedRoles={"doctor"}>
            <Dashboard />
          </ProtectedRouter>
        }
      />
    </Routes>
  );
};

export default Routers;
