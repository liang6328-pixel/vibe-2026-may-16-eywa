import React, { useState, useEffect } from 'react';
import { DiscussionEmbed } from 'disqus-react';
import { useLocation } from 'react-router-dom';

const DisqusComments: React.FC = () => {
  const location = useLocation();
  const [disqusConfig, setDisqusConfig] = useState({
    url: '',
    identifier: location.pathname,
    title: '',
    language: 'zh_TW'
  });

  useEffect(() => {
    setDisqusConfig({
      url: window.location.href,
      identifier: location.pathname,
      title: document.title || 'Eywa.ai',
      language: 'zh_TW' // Traditional Chinese (Taiwan)
    });
  }, [location.pathname]);

  const shortname = 'leon-chen';

  return (
    <div className="w-full mt-20 border-t border-slate-800/50 pt-12 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {disqusConfig.url && disqusConfig.title && (
          <DiscussionEmbed
            shortname={shortname}
            config={disqusConfig}
          />
        )}
      </div>
    </div>
  );
};

export default DisqusComments;
