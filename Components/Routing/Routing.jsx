import { Routes, Route } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import TermsCondition from "../Pages/TermsCondition";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Recommendation from "../Pages/Recommendation";
import ProtectedRoute from "../utils/ProtectedRoute";


function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />  
                    <Route path="terms" element={<TermsCondition />} /> 
                    <Route path="recommendation" element={
          <ProtectedRoute>
            <Recommendation />
          </ProtectedRoute>
        } />
                </Route>
                <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
        </>
    );
}

export default Routing;
