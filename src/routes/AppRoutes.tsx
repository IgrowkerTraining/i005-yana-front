import type React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import TrailingSlashRedirect from '../components/TrailingSlashRedirect';
import { useTokenRefresh } from '../hooks/useTokenRefresh';
import Contacts from '../pages/Contacts';
import FAQ from '../pages/FAQ';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Notifications from '../pages/Notifications';
import Onboarding from '../pages/Onboarding';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import ResetPassword from '../pages/ResetPassword';
import ResetPasswordConfirm from '../pages/ResetPasswordConfirm';
import Resources from '../pages/Resources';
import AccountSettings from '../pages/profile/AccountSettings';
import ConfigurationSettings from '../pages/profile/ConfigurationSettings';
import InteractionsSettings from '../pages/profile/InteractionsSettings';
import MapLayout from './MapLayout';
const AppRoutes: React.FC = () => {
  useTokenRefresh();

  return (
    <>
      <TrailingSlashRedirect />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password/:uid/:token" element={<ResetPasswordConfirm />} />
        <Route
          element={
            <ProtectedRoute>
              <MapLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/account" element={<AccountSettings />} />
          <Route path="/profile/configuration" element={<ConfigurationSettings />} />
          <Route path="/profile/interactions" element={<InteractionsSettings />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
