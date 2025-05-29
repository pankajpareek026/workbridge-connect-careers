
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Briefcase, User, Mail, Phone, MapPin, Calendar, Upload, Plus, Trash2, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import FileUpload from '@/components/FileUpload';

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const [profile, setProfile] = useState({
    fullName: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    dateOfBirth: '1990-01-15',
    summary: 'Experienced software developer with 5+ years in full-stack development...',
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'AWS'],
    experience: [
      {
        jobTitle: 'Senior Software Developer',
        company: 'Tech Solutions Inc',
        duration: 'Jan 2020 - Present',
        description: 'Lead development of web applications using React and Node.js'
      }
    ],
    education: [
      {
        degree: 'Bachelor of Computer Science',
        institution: 'Stanford University',
        year: '2018',
        grade: '3.8 GPA'
      }
    ],
    preferences: {
      preferredLocations: 'San Francisco, Remote',
      jobCategories: 'Software Development, Tech',
      expectedSalary: '$120,000',
      jobType: 'full-time'
    }
  });

  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim() && !profile.skills.includes(newSkill.trim())) {
      setProfile({
        ...profile,
        skills: [...profile.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const handleSave = () => {
    toast({
      title: "Profile updated",
      description: "Your profile has been saved successfully"
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-workbridge-primary" />
              <h1 className="text-2xl font-bold text-workbridge-primary">WorkBridge</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate('/job-seeker-dashboard')}>
                Dashboard
              </Button>
              <Button variant="outline" onClick={() => navigate('/')}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Profile Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
            <p className="text-gray-600">Manage your personal information and preferences</p>
          </div>
          <div className="flex space-x-2">
            {isEditing ? (
              <>
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSave} className="bg-workbridge-primary hover:bg-workbridge-primary/90">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </>
            ) : (
              <Button onClick={() => setIsEditing(true)} variant="outline">
                Edit Profile
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info & Resume */}
          <div className="space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Full Name</Label>
                  {isEditing ? (
                    <Input
                      value={profile.fullName}
                      onChange={(e) => setProfile({...profile, fullName: e.target.value})}
                    />
                  ) : (
                    <p className="text-gray-900">{profile.fullName}</p>
                  )}
                </div>
                <div>
                  <Label>Email</Label>
                  <p className="text-gray-900 flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    {profile.email}
                  </p>
                </div>
                <div>
                  <Label>Phone</Label>
                  {isEditing ? (
                    <Input
                      value={profile.phone}
                      onChange={(e) => setProfile({...profile, phone: e.target.value})}
                    />
                  ) : (
                    <p className="text-gray-900 flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      {profile.phone}
                    </p>
                  )}
                </div>
                <div>
                  <Label>Location</Label>
                  {isEditing ? (
                    <Input
                      value={profile.location}
                      onChange={(e) => setProfile({...profile, location: e.target.value})}
                    />
                  ) : (
                    <p className="text-gray-900 flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {profile.location}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Resume Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="h-5 w-5 mr-2" />
                  Resume
                </CardTitle>
              </CardHeader>
              <CardContent>
                <FileUpload
                  onFileSelect={setResumeFile}
                  currentFile={resumeFile}
                  placeholder="Upload your resume (PDF, DOC, DOCX)"
                />
                {resumeFile && (
                  <div className="mt-4">
                    <Button variant="outline" size="sm">
                      View Resume
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Experience, Education, Skills */}
          <div className="lg:col-span-2 space-y-6">
            {/* Professional Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <Textarea
                    value={profile.summary}
                    onChange={(e) => setProfile({...profile, summary: e.target.value})}
                    rows={4}
                  />
                ) : (
                  <p className="text-gray-700">{profile.summary}</p>
                )}
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {profile.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="flex items-center space-x-1">
                      <span>{skill}</span>
                      {isEditing && (
                        <button onClick={() => removeSkill(skill)}>
                          <Trash2 className="h-3 w-3" />
                        </button>
                      )}
                    </Badge>
                  ))}
                </div>
                {isEditing && (
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add new skill"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                    />
                    <Button onClick={addSkill} size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profile.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-workbridge-primary pl-4">
                    <h3 className="font-semibold text-gray-900">{exp.jobTitle}</h3>
                    <p className="text-workbridge-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.duration}
                    </p>
                    <p className="text-gray-700 mt-2">{exp.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profile.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-green-500 pl-4">
                    <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-green-600 font-medium">{edu.institution}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>Graduated: {edu.year}</span>
                      <span>Grade: {edu.grade}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Job Preferences */}
            <Card>
              <CardHeader>
                <CardTitle>Job Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Preferred Locations</Label>
                    {isEditing ? (
                      <Input
                        value={profile.preferences.preferredLocations}
                        onChange={(e) => setProfile({
                          ...profile,
                          preferences: {...profile.preferences, preferredLocations: e.target.value}
                        })}
                      />
                    ) : (
                      <p className="text-gray-900">{profile.preferences.preferredLocations}</p>
                    )}
                  </div>
                  <div>
                    <Label>Expected Salary</Label>
                    {isEditing ? (
                      <Input
                        value={profile.preferences.expectedSalary}
                        onChange={(e) => setProfile({
                          ...profile,
                          preferences: {...profile.preferences, expectedSalary: e.target.value}
                        })}
                      />
                    ) : (
                      <p className="text-gray-900">{profile.preferences.expectedSalary}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
