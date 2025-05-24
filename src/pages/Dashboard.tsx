
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LogOut, User, Mail, Shield, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Dashboard = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out Successfully",
      description: "You have been securely logged out of your account.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {user?.username}!
              </h1>
              <p className="text-gray-600">
                You have successfully logged into your secure dashboard.
              </p>
            </div>
            <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>

          {/* Success Message */}
          <Card className="mb-8 border-green-200 bg-green-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="font-semibold text-green-800">Authentication Successful</h3>
                  <p className="text-green-700">
                    Your login credentials have been verified and your session is now active.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  User Profile
                </CardTitle>
                <CardDescription>
                  Your account information and details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Username:</span>
                  <Badge variant="secondary">{user?.username}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Email:</span>
                  <span className="text-sm font-mono">{user?.email}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">User ID:</span>
                  <span className="text-sm font-mono">{user?.id}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Status
                </CardTitle>
                <CardDescription>
                  Current session and security information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Session Status:</span>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Login Method:</span>
                  <span className="text-sm">Email & Password</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Security Level:</span>
                  <Badge className="bg-blue-100 text-blue-800">Authenticated</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* System Features */}
          <Card>
            <CardHeader>
              <CardTitle>System Features Demonstrated</CardTitle>
              <CardDescription>
                This authentication system showcases modern security practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Frontend Security</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Real-time form validation</li>
                    <li>• Password strength requirements</li>
                    <li>• Responsive design patterns</li>
                    <li>• Session state management</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Data Protection</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Secure credential storage</li>
                    <li>• Input sanitization</li>
                    <li>• Protected route access</li>
                    <li>• Session persistence</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
