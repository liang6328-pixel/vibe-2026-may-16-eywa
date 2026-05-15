import React from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

const PricingTier = ({ 
  name, 
  price, 
  description, 
  features, 
  highlight = false,
  buttonText = "Get Started"
}: { 
  name: string; 
  price: string; 
  description: string; 
  features: { text: string; included: boolean }[]; 
  highlight?: boolean;
  buttonText?: string;
}) => (
  <div className={`relative p-8 rounded-2xl transition-all duration-300 ${
    highlight 
      ? 'bg-slate-900 border-2 border-orange-500/50 shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)] scale-105 z-10' 
      : 'bg-slate-900/50 border border-slate-800 hover:border-slate-700'
  }`}>
    {highlight && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange-500 text-white text-sm font-bold rounded-full">
        Most Popular
      </div>
    )}
    <div className="mb-8">
      <h3 className="text-xl font-bold text-slate-100 mb-2">{name}</h3>
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-slate-400">/month</span>
      </div>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3 text-sm">
          {feature.included ? (
            <FiCheck className="text-orange-500 flex-shrink-0" />
          ) : (
            <FiX className="text-slate-600 flex-shrink-0" />
          )}
          <span className={feature.included ? 'text-slate-200' : 'text-slate-500'}>
            {feature.text}
          </span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
      highlight 
        ? 'bg-orange-500 hover:bg-orange-400 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]' 
        : 'bg-slate-800 hover:bg-slate-700 text-slate-100'
    }`}>
      {buttonText}
    </button>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Choose Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">Security Tier</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Secure your family's future with our flexible plans designed for every stage of life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <PricingTier
          name="Free"
          price="$0"
          description="Essential vault features for personal use."
          features={[
            { text: "Up to 500MB Storage", included: true },
            { text: "Basic Vault Categories", included: true },
            { text: "Community Support", included: true },
            { text: "Mobile Access", included: true },
            { text: "Advanced AI Assistant", included: false },
            { text: "Family Sharing", included: false },
          ]}
        />
        <PricingTier
          name="Professional"
          price="$12"
          highlight={true}
          description="Complete digital heritage management."
          features={[
            { text: "Unlimited Storage", included: true },
            { text: "Custom Vault Categories", included: true },
            { text: "Priority Eywa AI Support", included: true },
            { text: "Secure Family Sharing", included: true },
            { text: "Legacy Planning Tools", included: true },
            { text: "24/7 Concierge Support", included: true },
          ]}
          buttonText="Upgrade to Pro"
        />
        <PricingTier
          name="Family"
          price="$24"
          description="Full protection for your entire household."
          features={[
            { text: "Unlimited for 5 Users", included: true },
            { text: "Dedicated Success Manager", included: true },
            { text: "Biometric Authentication+", included: true },
            { text: "Estate Legal Templates", included: true },
            { text: "Multi-Region Redundancy", included: true },
            { text: "White-Glove Onboarding", included: true },
          ]}
          buttonText="Get Started"
        />
      </div>

      <div className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Need something else?</h3>
        <p className="text-slate-400 mb-6">We offer custom enterprise-grade solutions for legal firms and wealth managers.</p>
        <button className="text-orange-400 font-semibold hover:text-orange-300 transition-colors">
          Contact our sales team &rarr;
        </button>
      </div>
    </div>
  );
};

export default Pricing;
