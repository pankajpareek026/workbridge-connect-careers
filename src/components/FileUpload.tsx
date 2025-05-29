
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, File, X, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FileUploadProps {
  accept?: string;
  maxSize?: number; // in MB
  onFileSelect: (file: File | null) => void;
  currentFile?: File | null;
  placeholder?: string;
}

const FileUpload = ({ 
  accept = ".pdf,.doc,.docx", 
  maxSize = 5, 
  onFileSelect, 
  currentFile,
  placeholder = "Click to upload or drag and drop your resume"
}: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (file: File) => {
    if (file.size > maxSize * 1024 * 1024) {
      toast({
        title: "File too large",
        description: `File size must be less than ${maxSize}MB`,
        variant: "destructive"
      });
      return;
    }

    setUploadStatus('uploading');
    // Simulate upload delay
    setTimeout(() => {
      setUploadStatus('success');
      onFileSelect(file);
      toast({
        title: "File uploaded successfully",
        description: `${file.name} has been uploaded`
      });
    }, 1000);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const removeFile = () => {
    setUploadStatus('idle');
    onFileSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Card className={`border-2 border-dashed transition-colors ${
      isDragging ? 'border-workbridge-primary bg-blue-50' : 
      currentFile ? 'border-green-300 bg-green-50' : 'border-gray-300'
    }`}>
      <CardContent 
        className="p-6 text-center cursor-pointer"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={() => setIsDragging(true)}
        onDragLeave={() => setIsDragging(false)}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileInput}
          className="hidden"
        />
        
        {currentFile ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <File className="h-8 w-8 text-green-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">{currentFile.name}</p>
                <p className="text-sm text-gray-500">
                  {(currentFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-600" />
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile();
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <Upload className={`h-8 w-8 mx-auto mb-2 ${
              uploadStatus === 'uploading' ? 'animate-bounce text-workbridge-primary' : 'text-gray-400'
            }`} />
            <p className="text-sm text-gray-600 mb-1">{placeholder}</p>
            <p className="text-xs text-gray-500">
              {accept.split(',').join(', ')} files only, max {maxSize}MB
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FileUpload;
