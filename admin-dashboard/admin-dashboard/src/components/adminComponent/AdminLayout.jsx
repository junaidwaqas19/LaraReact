import React from 'react';
import { Outlet, Navigate } from 'react-router';
import Navbar from './body/Navbar';
import Sidebar from './body/Sidebar';
import { useSelector } from 'react-redux';
// import { selectUser } from '../../store/auth/auth-slice';

const AdminLayout = () => {
  const authSlice = useSelector((state) => state.authSlice);
  const { token, userType, user } = authSlice.auth;
  // Check if the user is authenticated with both token and type
  if (!token) {
    // Assuming you have a variable called usertype representing the user type
    
    const loginUrl = `/login/${userType}`;

    // Redirect to the appropriate login route based on user type
    return <Navigate to={loginUrl} />;
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header>
          <Navbar user={authSlice.auth}/>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            {/* Your main content goes here */}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
