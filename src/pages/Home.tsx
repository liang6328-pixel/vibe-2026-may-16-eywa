
import React, { useState } from 'react';
import {
  FaPlus,
  FaBriefcase,
  FaDollarSign,
  FaHeart,
  FaBook,
  FaCompass,
} from 'react-icons/fa';
import UploadModal from '../components/UploadModal';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const VAULT_STRUCTURE = {
  legal: {
    name: 'Legal',
    icon: <FaBriefcase className="text-4xl text-purple-400" />,
    description: 'Wills, trusts, power of attorney, etc.',
  },
  financial: {
    name: 'Financial',
    icon: <FaDollarSign className="text-4xl text-green-400" />,
    description: 'Bank accounts, investments, insurance policies, etc.',
  },
  medical: {
    name: 'Medical',
    icon: <FaHeart className="text-4xl text-red-400" />,
    description: 'Medical records, health insurance, etc.',
  },
  history: {
    name: 'History',
    icon: <FaBook className="text-4xl text-blue-400" />,
    description: 'Family photos, journals, important documents, etc.',
  },
  end_of_life: {
    name: 'End of Life',
    icon: <FaCompass className="text-4xl text-yellow-400" />,
    description: 'Funeral plans, last wishes, etc.',
  },
};

const Home: React.FC = () => {
  const [messages, setMessages] = useState<{
    text: string;
    sender: 'user' | 'ai';
  }[]>([]);
  const [input, setInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVault, setSelectedVault] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { text: input, sender: 'user' as const }];
    setMessages(newMessages);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      setMessages([
        ...newMessages,
        { text: 'Hello! I am Eywa. How can I help you today?', sender: 'ai' as const },
      ]);
    }, 1000);
  };

  const openModal = (vaultName: string) => {
    setSelectedVault(vaultName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVault('');
  };

  const handleUpload = async (file: File) => {
    if (!selectedVault) return;

    const storageRef = ref(storage, `vaults/${selectedVault}/${file.name}`);

    try {
      console.log('Uploading file...');
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log('File available at', downloadURL);
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Upload failed', error);
      alert('Upload failed. Please try again.');
    } finally {
      closeModal();
    }
  };

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <header className="text-center mb-16">
        <h1 className="text-6xl font-extrabold text-white tracking-tight mb-4">
          Your Secure Digital Legacy
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Eywa uses advanced AI to help you organize, secure, and share your most important life documents.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {Object.keys(VAULT_STRUCTURE).map((key) => {
          const vault = VAULT_STRUCTURE[key as keyof typeof VAULT_STRUCTURE];
          return (
            <div
              key={key}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-xl p-8 hover:bg-gray-800 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-gray-900 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {vault.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{vault.name}</h3>
                <p className="text-gray-400 leading-relaxed">{vault.description}</p>
              </div>
              
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => openModal(vault.name)}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-900 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                >
                  <FaPlus className="text-sm" />
                  <span>Add Document</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <section className="mt-24 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Chat with Eywa</h2>
          <p className="text-gray-400">Ask questions about your vault or get help organizing your documents.</p>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl shadow-2xl overflow-hidden">
          <div className="h-[400px] overflow-y-auto p-8 space-y-6">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-gray-500 italic">
                <p>Start a conversation with Eywa...</p>
              </div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className="flex justify-center">
                <div
                  className={`px-6 py-4 rounded-2xl max-w-[80%] text-center ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-900/20' 
                      : 'bg-gray-700 text-gray-100 shadow-md'
                  }`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-6 bg-gray-900/50 border-t border-gray-700 flex justify-center">
            <div className="w-full max-w-3xl flex items-center space-x-4 bg-gray-800 rounded-2xl p-2 border border-gray-700 focus-within:border-purple-500/50 transition-colors">
              <input
                type="text"
                className="flex-1 bg-transparent border-none focus:ring-0 text-white px-4 py-2"
                placeholder="Ask Eywa a question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                onClick={handleSend}>
                Send
              </button>
            </div>
          </div>
        </div>
      </section>

      <UploadModal isOpen={isModalOpen} onClose={closeModal} onUpload={handleUpload} vaultName={selectedVault} />
    </div>
  );
};

export default Home;
