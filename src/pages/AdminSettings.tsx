import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import {
  Settings,
  Globe,
  Shield,
  Database,
  Mail,
  Bell,
  Save,
  RefreshCw,
  AlertTriangle
} from 'lucide-react';
import AdminNavigation from '@/components/AdminNavigation';
import { useToast } from '@/hooks/use-toast';

const AdminSettings = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    siteName: 'Jay shree joranath job',
    siteDescription: 'Connect talent with opportunities',
    maintenanceMode: false,
    userRegistration: true,
    emailVerification: true,
    autoApproveJobs: false,
    autoApproveCompanies: false,
    maxJobsPerCompany: 50,
    jobExpirationDays: 30,
    smtpServer: 'smtp.jaijonath.com',
    smtpPort: 587,
    smtpUsername: 'notifications@jaijonath.com',
    notifyNewUsers: true,
    notifyNewJobs: true,
    notifyNewApplications: true,
    backupEnabled: true,
    backupFrequency: 'daily',
  });

  const handleSave = (section: string) => {
    toast({
      title: "Settings Saved",
      description: `${section} settings have been updated successfully.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavigation />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Settings</h1>
          <p className="text-gray-600">Configure platform settings and preferences</p>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>General Settings</span>
                </CardTitle>
                <CardDescription>Basic platform configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="siteName">Site Name</Label>
                    <Input
                      id="siteName"
                      value={settings.siteName}
                      onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maxJobs">Max Jobs per Company</Label>
                    <Input
                      id="maxJobs"
                      type="number"
                      value={settings.maxJobsPerCompany}
                      onChange={(e) => setSettings({ ...settings, maxJobsPerCompany: parseInt(e.target.value) })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="siteDescription">Site Description</Label>
                  <Textarea
                    id="siteDescription"
                    value={settings.siteDescription}
                    onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Maintenance Mode</Label>
                      <p className="text-sm text-gray-500">Temporarily disable public access</p>
                    </div>
                    <Switch
                      checked={settings.maintenanceMode}
                      onCheckedChange={(checked) => setSettings({ ...settings, maintenanceMode: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>User Registration</Label>
                      <p className="text-sm text-gray-500">Allow new users to register</p>
                    </div>
                    <Switch
                      checked={settings.userRegistration}
                      onCheckedChange={(checked) => setSettings({ ...settings, userRegistration: checked })}
                    />
                  </div>
                </div>

                <Button onClick={() => handleSave('General')} className="w-full md:w-auto">
                  <Save className="h-4 w-4 mr-2" />
                  Save General Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Security Settings</span>
                </CardTitle>
                <CardDescription>Security and verification settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email Verification Required</Label>
                      <p className="text-sm text-gray-500">Require email verification for new users</p>
                    </div>
                    <Switch
                      checked={settings.emailVerification}
                      onCheckedChange={(checked) => setSettings({ ...settings, emailVerification: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Auto-approve Job Posts</Label>
                      <p className="text-sm text-gray-500">Automatically approve new job postings</p>
                    </div>
                    <Switch
                      checked={settings.autoApproveJobs}
                      onCheckedChange={(checked) => setSettings({ ...settings, autoApproveJobs: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Auto-approve Companies</Label>
                      <p className="text-sm text-gray-500">Automatically verify new company registrations</p>
                    </div>
                    <Switch
                      checked={settings.autoApproveCompanies}
                      onCheckedChange={(checked) => setSettings({ ...settings, autoApproveCompanies: checked })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jobExpiration">Job Expiration (Days)</Label>
                  <Input
                    id="jobExpiration"
                    type="number"
                    value={settings.jobExpirationDays}
                    onChange={(e) => setSettings({ ...settings, jobExpirationDays: parseInt(e.target.value) })}
                  />
                  <p className="text-sm text-gray-500">Jobs will automatically expire after this many days</p>
                </div>

                <Button onClick={() => handleSave('Security')} className="w-full md:w-auto">
                  <Save className="h-4 w-4 mr-2" />
                  Save Security Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="email">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>Email Configuration</span>
                </CardTitle>
                <CardDescription>SMTP and email delivery settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="smtpServer">SMTP Server</Label>
                    <Input
                      id="smtpServer"
                      value={settings.smtpServer}
                      onChange={(e) => setSettings({ ...settings, smtpServer: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtpPort">SMTP Port</Label>
                    <Input
                      id="smtpPort"
                      type="number"
                      value={settings.smtpPort}
                      onChange={(e) => setSettings({ ...settings, smtpPort: parseInt(e.target.value) })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="smtpUsername">SMTP Username</Label>
                  <Input
                    id="smtpUsername"
                    value={settings.smtpUsername}
                    onChange={(e) => setSettings({ ...settings, smtpUsername: e.target.value })}
                  />
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <p className="text-sm text-yellow-800">
                      Email settings require server restart to take effect
                    </p>
                  </div>
                </div>

                <Button onClick={() => handleSave('Email')} className="w-full md:w-auto">
                  <Save className="h-4 w-4 mr-2" />
                  Save Email Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Notification Settings</span>
                </CardTitle>
                <CardDescription>Configure admin notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>New User Notifications</Label>
                      <p className="text-sm text-gray-500">Get notified when new users register</p>
                    </div>
                    <Switch
                      checked={settings.notifyNewUsers}
                      onCheckedChange={(checked) => setSettings({ ...settings, notifyNewUsers: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>New Job Notifications</Label>
                      <p className="text-sm text-gray-500">Get notified when new jobs are posted</p>
                    </div>
                    <Switch
                      checked={settings.notifyNewJobs}
                      onCheckedChange={(checked) => setSettings({ ...settings, notifyNewJobs: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Application Notifications</Label>
                      <p className="text-sm text-gray-500">Get notified about new job applications</p>
                    </div>
                    <Switch
                      checked={settings.notifyNewApplications}
                      onCheckedChange={(checked) => setSettings({ ...settings, notifyNewApplications: checked })}
                    />
                  </div>
                </div>

                <Button onClick={() => handleSave('Notifications')} className="w-full md:w-auto">
                  <Save className="h-4 w-4 mr-2" />
                  Save Notification Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5" />
                  <span>System Settings</span>
                </CardTitle>
                <CardDescription>Database and system configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Automatic Backups</Label>
                      <p className="text-sm text-gray-500">Enable scheduled database backups</p>
                    </div>
                    <Switch
                      checked={settings.backupEnabled}
                      onCheckedChange={(checked) => setSettings({ ...settings, backupEnabled: checked })}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">System Actions</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Clear Cache
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Database className="h-4 w-4 mr-2" />
                      Backup Database
                    </Button>
                  </div>
                </div>

                <Button onClick={() => handleSave('System')} className="w-full md:w-auto">
                  <Save className="h-4 w-4 mr-2" />
                  Save System Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminSettings;
