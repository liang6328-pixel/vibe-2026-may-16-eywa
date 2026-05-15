
import React from 'react';
import { useParams } from 'react-router-dom';

const Vault: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-8 capitalize">{category} Vault</h1>
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-12">
        <p className="text-gray-400">Content for {category} will appear here.</p>
      </div>
    </div>
  );
};

export default Vault;
