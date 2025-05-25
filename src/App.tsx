
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobSeekerDashboard from "./pages/JobSeekerDashboard";
import EmployerDashboard from "./pages/EmployerDashboard";
import JobSeekerOnboarding from "./pages/JobSeekerOnboarding";
import EmployerOnboarding from "./pages/EmployerOnboarding";
import JobBrowser from "./pages/JobBrowser";
import PostJob from "./pages/PostJob";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/job-seeker-dashboard" element={<JobSeekerDashboard />} />
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/job-seeker-onboarding" element={<JobSeekerOnboarding />} />
          <Route path="/employer-onboarding" element={<EmployerOnboarding />} />
          <Route path="/jobs" element={<JobBrowser />} />
          <Route path="/post-job" element={<PostJob />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
