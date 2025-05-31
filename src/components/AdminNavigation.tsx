
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, 
  Menu, 
  Settings, 
  Users, 
  Building, 
  FileText, 
  TrendingUp, 
  Activity, 
  Star, 
  Bell,
  Shield,
  LogOut
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const AdminNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Dashboard', path: '/admin-dashboard', icon: Settings },
    { label: 'Users', path: '/admin-users', icon: Users },
    { label: 'Companies', path: '/admin-companies', icon: Building },
    { label: 'Jobs', path: '/admin-jobs', icon: Briefcase },
    { label: 'Reports', path: '/admin-reports', icon: TrendingUp },
    { label: 'Activity', path: '/admin-activity', icon: Activity },
    { label: 'Reviews', path: '/admin-reviews', icon: Star },
  ];

  const NavContent = () => (
    <div className="flex flex-col space-y-4 p-4">
      <div className="text-lg font-semibold text-workbridge-primary mb-4 flex items-center space-x-2">
        <Shield className="h-5 w-5" />
        <span>Admin Panel</span>
      </div>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <Button
            key={item.path}
            variant={isActive ? "default" : "ghost"}
            className={`justify-start w-full ${isActive ? 'bg-workbridge-primary text-white' : ''}`}
            onClick={() => {
              navigate(item.path);
              setIsOpen(false);
            }}
          >
            <Icon className="h-4 w-4 mr-2" />
            {item.label}
            {item.label === 'Reviews' && (
              <Badge variant="destructive" className="ml-auto text-xs">12</Badge>
            )}
          </Button>
        );
      })}
      
      <div className="border-t pt-4 mt-8">
        <Button
          variant="ghost"
          className="justify-start w-full text-gray-600"
          onClick={() => navigate('/admin-settings')}
        >
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Button>
        <Button
          variant="outline"
          className="justify-start w-full mt-2"
          onClick={() => {
            navigate('/');
            setIsOpen(false);
          }}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-workbridge-primary" />
            <h1 className="text-2xl font-bold text-workbridge-primary">Jai Jor Nath Admin</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={isActive ? 'bg-workbridge-primary text-white' : ''}
                  onClick={() => navigate(item.path)}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              );
            })}
            
            <Button variant="ghost" size="sm" onClick={() => navigate('/admin-settings')}>
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs">3</Badge>
            </Button>
            
            <Button variant="outline" size="sm" onClick={() => navigate('/')}>
              <LogOut className="h-4 w-4 mr-2" />
              Exit Admin
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  <Menu className="h-6 w-6" />
                  <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs">3</Badge>
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

export default AdminNavigation;
