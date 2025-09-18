import { useState } from "react";
import CSVUpload from "@/components/CSVUpload";
import QueryInterface from "@/components/QueryInterface";

const RAGSystem = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [currentStep, setCurrentStep] = useState<'upload' | 'query'>('upload');

  const handleUploadComplete = (file: File) => {
    setUploadedFile(file);
    setCurrentStep('query');
  };

  const handleNewUpload = () => {
    setUploadedFile(null);
    setCurrentStep('upload');
  };

  return (
    <div className="min-h-screen">
      {currentStep === 'upload' ? (
        <CSVUpload onUploadComplete={handleUploadComplete} />
      ) : (
        <QueryInterface 
          uploadedFile={uploadedFile} 
          onNewUpload={handleNewUpload}
        />
      )}
    </div>
  );
};

export default RAGSystem;