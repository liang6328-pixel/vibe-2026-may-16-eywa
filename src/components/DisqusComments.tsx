import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import { useLocation } from 'react-router-dom';

const DisqusComments: React.FC = () => {
  const location = useLocation();
  const disqusShortname = 'leon-chen';
  const disqusConfig = {
    url: window.location.href,
    identifier: location.pathname,
    title: document.title || 'Eywa.ai',
    language: 'en'
  };

  return (
    <div className="w-full mt-20 border-t border-slate-800/50 pt-12 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    </div>
  );
};

export default DisqusComments;
