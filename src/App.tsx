import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import JobSeekerDashboard from "./pages/JobSeekerDashboard";
import EmployerDashboard from "./pages/EmployerDashboard";
import JobSeekerOnboarding from "./pages/JobSeekerOnboarding";
import EmployerOnboarding from "./pages/EmployerOnboarding";
import JobBrowser from "./pages/JobBrowser";
import PostJob from "./pages/PostJob";
import JobDetail from "./pages/JobDetail";
import MyApplications from "./pages/MyApplications";
import SavedJobs from "./pages/SavedJobs";
import Profile from "./pages/Profile";
import MyJobs from "./pages/MyJobs";
import CompanyProfile from "./pages/CompanyProfile";
import EmployerApplications from "./pages/EmployerApplications";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminCompanies from "./pages/AdminCompanies";
import AdminJobs from "./pages/AdminJobs";
import AdminReports from "./pages/AdminReports";
import AdminActivity from "./pages/AdminActivity";
import AdminReviews from "./pages/AdminReviews";
import AdminSettings from "./pages/AdminSettings";
import NotFound from "./pages/NotFound";
import JobApplication from './pages/JobApplication';

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/job-seeker-dashboard" element={<JobSeekerDashboard />} />
              <Route path="/employer-dashboard" element={<EmployerDashboard />} />
              <Route path="/job-seeker-onboarding" element={<JobSeekerOnboarding />} />
              <Route path="/employer-onboarding" element={<EmployerOnboarding />} />
              <Route path="/jobs" element={<JobBrowser />} />
              <Route path="/job/:jobId" element={<JobDetail />} />
              <Route path="/post-job" element={<PostJob />} />
              <Route path="/applications" element={<MyApplications />} />
              <Route path="/saved-jobs" element={<SavedJobs />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/my-jobs" element={<MyJobs />} />
              <Route path="/company-profile" element={<CompanyProfile />} />
              <Route path="/employer-applications" element={<EmployerApplications />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/admin-users" element={<AdminUsers />} />
              <Route path="/admin-companies" element={<AdminCompanies />} />
              <Route path="/admin-jobs" element={<AdminJobs />} />
              <Route path="/admin-reports" element={<AdminReports />} />
              <Route path="/admin-activity" element={<AdminActivity />} />
              <Route path="/admin-reviews" element={<AdminReviews />} />
              <Route path="/admin-settings" element={<AdminSettings />} />
              <Route path="/job-application" element={<JobApplication />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  </ErrorBoundary>
);

export default App;
