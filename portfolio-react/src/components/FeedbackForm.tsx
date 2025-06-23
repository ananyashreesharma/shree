import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FORM_ENDPOINT = 'https://formspree.io/f/xbjelgpr'; // <-- This is now connected

const SendIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim() === '' || status === 'Sending...') return;
    setStatus('Sending...');
    const data = { feedback };

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('Got it, thank you!');
        setFeedback('');
        setTimeout(() => setStatus(''), 2000);
      } else {
        setStatus('Something went wrong.');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      setStatus('Something went wrong.');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-4">
          <label htmlFor="feedback" className="minimal-heading flex-shrink-0 mb-0">
            Leave a note?
          </label>
          <div className="w-full">
            <div className="relative">
              <input
                id="feedback"
                type="text"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full bg-transparent border-b border-current/20 focus:border-current/80 focus:outline-none transition-colors duration-300 py-1 pr-10"
                placeholder="Type anything..."
                disabled={status === 'Sending...'}
              />
              <AnimatePresence>
                {feedback.length > 0 && !status.includes('Sending') && (
                  <motion.button
                    type="submit"
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-current/60 hover:text-current transition-colors"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    title="Send"
                  >
                    <SendIcon />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
            {status && (
              <p className="text-sm opacity-80 mt-2">
                {status}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm; 