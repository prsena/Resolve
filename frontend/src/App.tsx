import { Routes, Route, Navigate } from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';

import SignInPage from './pages/SignInPage';
import OverviewPage from './pages/OverviewPage';
import TicketsPage from './pages/TicketsPage';
import MyTasksPage from './pages/MyTasksPage';
import TeamPage from './pages/TeamPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Routes>
      {/* Authentication */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<SignInPage />} />
      </Route>

      {/* Dashboard routes.
          Authentication guards and role-based route restrictions
          will be introduced during the authentication phase.
          These routes are currently accessible for frontend development. */}
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<OverviewPage />} />
        <Route path="tickets" element={<TicketsPage />} />
        <Route path="tasks" element={<MyTasksPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;