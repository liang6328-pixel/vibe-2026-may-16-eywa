import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DisqusComments: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // This function will be called by Disqus to configure the thread
    (window as any).disqus_config = function (this: any) {
      this.page.url = window.location.href;
      this.page.identifier = location.pathname;
    };

    const DISQUS = (window as any).DISQUS;
    if (DISQUS) {
      // If Disqus is already loaded, reset it for the new page
      DISQUS.reset({
        reload: true,
        config: function (this: any) {
          this.page.url = window.location.href;
          this.page.identifier = location.pathname;
        },
      });
    } else {
      // If not loaded, inject the script
      const d = document;
      const s = d.createElement('script');
      s.src = 'https://leon-chen.disqus.com/embed.js';
      s.setAttribute('data-timestamp', (+new Date()).toString());
      (d.head || d.body).appendChild(s);
    }
  }, [location.pathname]);

  return (
    <div className="w-full mt-20 border-t border-slate-800/50 pt-12 pb-20">
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
