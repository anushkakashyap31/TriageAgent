/**
 * Login Page
 */

import React from 'react';
import Login from '../components/auth/Login';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <Login />
    </div>
  );
};

export default LoginPage;