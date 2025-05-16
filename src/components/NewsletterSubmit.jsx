'use client'; 

import { useState } from 'react';
import { motion } from "framer-motion";


const fadeIn = {
  hidden: { 
    opacity: 0,
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          service: 'Newsletter Subscription',
          message: 'New newsletter subscription request' 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: 'Subscription successful! Thank you.', type: 'success' });
        setEmail('');
      } else {
        throw new Error(data.error || 'Subscription failed');
      }
    } catch (error) {
      setMessage({ text: error.message || 'Failed to subscribe. Please try again.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn} 
      transition={{ delay: 0.3 }}
    >
      <h3 className="text-lg font-semibold mb-5 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-accent">
        Newsletter
      </h3>
      <p className="text-white/70 mb-4">
        Subscribe for insights on web development and career growth.
      </p>
      
      {message.text && (
        <p className={`mb-4 ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {message.text}
        </p>
      )}
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:border-accent"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-accent text-primary font-medium px-4 py-2 rounded-md hover:bg-accent/90 transition-all disabled:opacity-50"
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </motion.div>
  );
};

export default NewsletterForm;