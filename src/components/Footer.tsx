import React from 'react';
import { FileText, Shield, AlertOctagon, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors"
          >
            <Shield className="w-4 h-4" />
            Privacy Policy
          </a>
          <a
            href="/dmca"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors"
          >
            <AlertOctagon className="w-4 h-4" />
            DMCA Disclaimer
          </a>
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Contact
          </a>
          <a
            href="/toc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors"
          >
            <FileText className="w-4 h-4" />
            TOC
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;