import React, { useEffect } from 'react';

const DisqusComments: React.FC = () => {
  useEffect(() => {
    // Check if the script is already loaded to avoid duplicates
    if (document.getElementById('disqus-embed-script')) {
      // If already loaded, we might need to reset it for the new page view
      // but usually for SPAs, Disqus has a specific 'reset' method.
      // For now, we follow the provided snippet's logic.
      return;
    }

    const script = document.createElement('script');
    script.id = 'disqus-embed-script';
    script.src = 'https://leon-chen.disqus.com/embed.js';
    script.setAttribute('data-timestamp', (+new Date()).toString());
    script.async = true;
    (document.head || document.body).appendChild(script);
  }, []);

  return (
    <div className="w-full mt-20 border-t border-gray-800 pt-12">
      <div className="max-w-4xl mx-auto px-4">
        <div id="disqus_thread"></div>
        <noscript>
          Please enable JavaScript to view the{' '}
          <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
        </noscript>
      </div>
    </div>
  );
};

export default DisqusComments;
