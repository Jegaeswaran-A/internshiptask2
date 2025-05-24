
import React from 'react';
import { Auth } from './Auth';
import { Dashboard } from './Dashboard';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { AuthProvider } from '@/contexts/AuthContext';

const Index = () => {
  return (
    <AuthProvider>
      <ProtectedRoute fallback={<Auth />}>
        <Dashboard />
      </ProtectedRoute>
    </AuthProvider>
  );
};

export default Index;
