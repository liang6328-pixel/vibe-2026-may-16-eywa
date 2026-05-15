import React, { useEffect } from 'react';

const DisqusComments: React.FC = () => {
  useEffect(() => {
    const DISQUS = (window as any).DISQUS;
    if (DISQUS) {
      DISQUS.reset({
        reload: true,
      });
    } else {
      const script = document.createElement('script');
      script.src = 'https://leon-chen.disqus.com/embed.js';
      script.setAttribute('data-timestamp', (+new Date()).toString());
      script.async = true;
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <div className="w-full mt-20 border-t border-slate-800/50 pt-12 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div id="disqus_thread" className="min-h-[300px]"></div>
        <noscript>
          Please enable JavaScript to view the{' '}
          <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
        </noscript>
      </div>
    </div>
  );
};

export default DisqusComments;
