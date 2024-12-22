import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="prose max-w-none">
        <p className="mb-4">If you have any questions, concerns, or feedback about our services, please don't hesitate to contact us using the information below:</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Information</h2>
        <ul className="list-none space-y-4">
          <li>
            <strong>Email:</strong>
            <p>support@example.com</p>
          </li>
          <li>
            <strong>Business Hours:</strong>
            <p>Monday - Friday: 9:00 AM - 5:00 PM (EST)</p>
          </li>
          <li>
            <strong>Response Time:</strong>
            <p>We strive to respond to all inquiries within 24-48 business hours.</p>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">For DMCA Notices</h2>
        <p className="mb-4">Please refer to our DMCA Disclaimer page for information about submitting copyright infringement notices.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">For Privacy Concerns</h2>
        <p className="mb-4">For questions about our privacy practices, please review our Privacy Policy or contact our privacy team directly at privacy@example.com</p>
      </div>
    </div>
  );
};

export default Contact;