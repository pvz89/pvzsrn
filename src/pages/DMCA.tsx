import React from 'react';
import SupportPageHeader from '../components/SupportPageHeader';

const DMCA = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SupportPageHeader title="DMCA Disclaimer" />
      <div className="prose max-w-none">
        <p className="mb-4">Last updated: March 14, 2024</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Digital Millennium Copyright Act Notice</h2>
        <p className="mb-4">We respect the intellectual property rights of others and expect our users to do the same. In accordance with the Digital Millennium Copyright Act of 1998, the text of which may be found on the U.S. Copyright Office website at http://www.copyright.gov/legislation/dmca.pdf, we will respond expeditiously to claims of copyright infringement committed using our service that are reported.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">DMCA Notice</h2>
        <p className="mb-4">If you are a copyright owner, or are authorized to act on behalf of one or authorized to act under any exclusive right under copyright, please report alleged copyright infringements taking place on or through our services by completing the following DMCA Notice and delivering it to our Designated Copyright Agent.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Counter Notice</h2>
        <p className="mb-4">If you believe that your content that was removed is not infringing, or that you have the authorization from the copyright owner, you may send a counter notice. Please include the following information:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Your physical or electronic signature</li>
          <li>Identification of the content that has been removed</li>
          <li>A statement that you have a good faith belief that the content was removed by mistake</li>
          <li>Your name, address, telephone number, and email address</li>
        </ul>
      </div>
    </div>
  );
};

export default DMCA;