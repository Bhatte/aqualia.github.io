import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const Contact = () => {
  return (
    <div className="mx-auto px-6 lg:px-8 mt-10 sm:mt-20 md:mt-30">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-2xl font-semibold text-neutral-50">
          Let's Connect
        </h1>
        
        <div className="mt-8 text-lg text-neutral-100">
          <p className="mb-6">
            Ready to transform your approach to cybersecurity and AI implementation? 
            We're here to help you navigate the path from vulnerability to strength, 
            and from data complexity to actionable intelligence.
          </p>
          
          <div className="mt-8 bg-neutral-800 rounded-lg p-6 border border-neutral-700 hover:border-neutral-600 transition-colors duration-300">
            <h2 className="text-xl font-medium text-neutral-50 mb-4">
              Start a Conversation
            </h2>
            
            <p className="mb-4">
              Contact us directly and we'll respond within 24 hours:
            </p>
            
            <div className="flex items-center mt-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <Link
                to="mailto:hello@aqualia.ie"
                className="text-neutral-400 hover:text-neutral-200 transition-colors duration-300"
              >
                hello@aqualia.ie
              </Link>
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium text-neutral-50 mb-2">What to expect:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>A prompt response from our team</li>
                <li>A brief, no-obligation discovery call to understand your needs</li>
                <li>Practical recommendations tailored to your specific situation</li>
                <li>Clear, transparent discussion of potential approaches and investment levels</li>
              </ul>
            </div>
            
            <div className="mt-8">
              <Button 
                to="mailto:hello@aqualia.ie" 
                type="primary"
              >
                Send us a message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
