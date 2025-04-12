import React from 'react';

const KeepContentSafe = () => {
  return (
    <section className="w-[80vw] mx-auto py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">
            Keep your content safe
          </h2>
          
          <p className="text-lg text-white leading-relaxed">
            Enterprise-grade security to keep your data and your customer's data 
            private and secure. We offer SSO, SCIM as well as custom data 
            retention policies and privacy settings.
          </p>

          <div className="pt-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white 
              font-semibold py-3 px-8 rounded-full transition duration-300">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeepContentSafe;