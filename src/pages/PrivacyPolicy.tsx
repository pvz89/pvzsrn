import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p className="mb-4">Last updated: March 14, 2024</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
        <p className="mb-4">We collect information that you provide directly to us when using our services. This may include:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Device information</li>
          <li>Log data</li>
          <li>Usage information</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide and maintain our services</li>
          <li>Improve user experience</li>
          <li>Analyze usage patterns</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Information Sharing</h2>
        <p className="mb-4">We do not share your personal information with third parties except as described in this privacy policy.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Security</h2>
        <p className="mb-4">We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Changes to This Policy</h2>
        <p className="mb-4">We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;