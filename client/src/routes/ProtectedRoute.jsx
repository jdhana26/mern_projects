import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserContext from '../context/UserContext';

const ProtectedRoute = ({ requiredRole }) => {
    const { auth } = useContext(UserContext);
    
    // Check if the user is authenticated via context
    if (!auth) {
        return <Navigate to="/login" replace />;
    }

    // If a specific role is required (like 'admin'), check the stored user data
    if (requiredRole) {
        try {
            const user = JSON.parse(localStorage.getItem("currentUser"));
            if (user?.role !== requiredRole) {
                // If not authorized for this role, redirect to home
                return <Navigate to="/" replace />;
            }
        } catch (e) {
            console.error("Error parsing user role for protection:", e);
            return <Navigate to="/login" replace />;
        }
    }

    // If authenticated and authorized, render the child routes
    return <Outlet />;
};

export default ProtectedRoute;
