import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Briefcase, Menu, User, Users, FileText, Bookmark, Plus, Building, Settings } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavigationProps {
  userType?: 'job-seeker' | 'employer' | 'admin';
  userName?: string;
}

const Navigation = ({ userType = 'job-seeker', userName }: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const getNavItems = () => {
    switch (userType) {
      case 'job-seeker':
        return [
          { label: 'Dashboard', path: '/job-seeker-dashboard', icon: User },
          { label: 'Browse Jobs', path: '/jobs', icon: Briefcase },
          { label: 'Applications', path: '/applications', icon: FileText },
          { label: 'Saved Jobs', path: '/saved-jobs', icon: Bookmark },
          { label: 'Profile', path: '/profile', icon: User },
        ];
      case 'employer':
        return [
          { label: 'Dashboard', path: '/employer-dashboard', icon: Building },
          { label: 'Post Job', path: '/post-job', icon: Plus },
          { label: 'My Jobs', path: '/my-jobs', icon: Briefcase },
          { label: 'Applications', path: '/employer-applications', icon: FileText },
          { label: 'Company Profile', path: '/company-profile', icon: Building },
        ];
      case 'admin':
        return [
          { label: 'Dashboard', path: '/admin-dashboard', icon: Settings },
          { label: 'Users', path: '/admin-users', icon: Users },
          { label: 'Companies', path: '/admin-companies', icon: Building },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  const NavContent = () => (
    <div className="flex flex-col space-y-4 p-4">
      <div className="text-lg font-semibold text-blue-600 mb-4">
        Welcome, {userName || 'User'}!
      </div>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <Button
            key={item.path}
            variant={isActive ? "default" : "ghost"}
            className={`justify-start w-full ${isActive ? 'bg-blue-600 text-white' : ''}`}
            onClick={() => {
              navigate(item.path);
              setIsOpen(false);
            }}
          >
            <Icon className="h-4 w-4 mr-2" />
            {item.label}
          </Button>
        );
      })}
      <Button
        variant="outline"
        className="justify-start w-full mt-8"
        onClick={() => {
          navigate('/');
          setIsOpen(false);
        }}
      >
        Sign Out
      </Button>
    </div>
  );

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-blue-600">Jai Jor Nath</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.slice(0, 3).map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "default" : "ghost"}
                  className={isActive ? 'bg-blue-600 text-white' : ''}
                  onClick={() => navigate(item.path)}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              );
            })}
            <Button variant="outline" onClick={() => navigate('/')}>
              Sign Out
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <NavContent />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
