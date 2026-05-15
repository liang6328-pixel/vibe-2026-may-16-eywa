import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="w-full py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Choose Your Plan
            </h2>
            <p className="text-stone-500 text-lg">
            Whether you're just getting started or need more advanced features, we have a plan that's right for you.
            </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
          {/* Free Tier */}
          <div className="bg-white rounded-lg p-8 w-full md:w-1/3 text-center border border-stone-300 transform hover:scale-105 transition-transform duration-300 flex flex-col">
            <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-stone-800 mb-4">Free Tier</h3>
                <p className="text-5xl font-bold text-orange-400 mb-6">$0</p>
                <ul className="text-stone-500 space-y-3 mb-8 text-left">
                <li>✅ Up to 100 documents</li>
                <li>✅ Basic AI chat</li>
                <li>✅ Community support</li>
                </ul>
            </div>
            <button className="px-8 py-3 rounded-full bg-stone-200 text-stone-800 font-semibold hover:bg-orange-500 hover:text-white transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro Tier */}
          <div className="bg-white rounded-lg p-8 w-full md:w-1/3 text-center border-2 border-orange-500 shadow-lg shadow-orange-500/20 transform hover:scale-105 transition-transform duration-300 flex flex-col">
            <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-stone-800 mb-4">Pro Tier</h3>
                <div className='mb-6'>
                    <p className="text-5xl font-bold text-orange-400 inline-block">5 SGD</p>
                    <p className="text-stone-500 inline-block">/year</p>
                </div>
                <ul className="text-stone-500 space-y-3 mb-8 text-left">
                <li>✅ Unlimited documents</li>
                <li>✅ Advanced AI chat</li>
                <li>✅ Priority support</li>
                <li>✅ Family sharing</li>
                </ul>
            </div>
            <button className="px-8 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
