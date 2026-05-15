
import React from 'react';
import { FaTimes, FaCloudUploadAlt } from 'react-icons/fa';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File) => void;
  vaultName: string;
}

const UploadModal: React.FC<UploadModalProps> = ({ isOpen, onClose, onUpload, vaultName }) => {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-gray-800 border border-gray-700 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-6 border-b border-gray-700 relative flex items-center justify-center">
          <h3 className="text-xl font-bold text-white text-center">Upload to {vaultName}</h3>
          <button onClick={onClose} className="absolute right-6 text-gray-400 hover:text-white transition-colors">
            <FaTimes size={20} />
          </button>
        </div>
        
        <div className="p-8">
          <div className="mb-8">
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-600 rounded-2xl cursor-pointer hover:border-purple-500 hover:bg-gray-700/50 transition-all group">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <FaCloudUploadAlt className="text-4xl text-gray-500 group-hover:text-purple-400 mb-3 transition-colors" />
                <p className="text-sm text-gray-400 mb-1">
                  <span className="font-semibold text-gray-200">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">PDF, JPG, PNG (max. 10MB)</p>
              </div>
              <input type="file" className="hidden" onChange={handleFileChange} />
            </label>
            {selectedFile && (
              <p className="mt-4 text-sm text-purple-400 text-center font-medium">
                Selected: {selectedFile.name}
              </p>
            )}
          </div>

          <div className="flex flex-col space-y-3">
            <button
              onClick={handleUpload}
              disabled={!selectedFile}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-purple-900/20 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
              Upload Document
            </button>
            <button
              onClick={onClose}
              className="w-full py-4 bg-gray-700 text-gray-300 font-bold rounded-xl hover:bg-gray-600 hover:text-white transition-all">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
