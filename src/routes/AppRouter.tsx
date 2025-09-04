import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import AuthPage from "../pages/auth/AuthPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import ApplicationsPage from "../pages/applications/ApplicationsPage";
import ProfilePage from "../pages/profile/ProfilePage";
import ProjectsPage from "../pages/projects/ProjectsPage";
import RequireAuth from "./RequireAuth";
import AuthLayout from "../components/authleyout/AuthLayout";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
        path="/login"
        element={
          <AuthLayout>
            <AuthPage />
          </AuthLayout>
        }
      />

        <Route path="/" element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
          }>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="applications" element={<ApplicationsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Route>

        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
