import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './button';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Portfolio Contact',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('validation');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - using public keys (safe for frontend)
      const serviceID = 'service_portfolio'; // You'll need to set this up in EmailJS
      const templateID = 'template_contact'; // You'll need to create this template
      const publicKey = 'your_public_key'; // You'll get this from EmailJS
      
      // Prepare template params
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'ioannis.mesionis@gmail.com'
      };
      
      // Try EmailJS first (when properly configured)
      if (serviceID !== 'service_portfolio') {
        await emailjs.send(serviceID, templateID, templateParams, publicKey);
        setSubmitStatus('success');
      } else {
        // Fallback to mailto for now (until EmailJS is configured)
        const mailtoURL = `mailto:ioannis.mesionis@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        
        window.open(mailtoURL, '_blank');
        setSubmitStatus('success');
      }
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: 'Portfolio Contact',
          message: ''
        });
        setSubmitStatus(null);
        onClose();
      }, 2000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeIn" }
    }
  };
  
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md bg-secondary-background border-4 border-border rounded-base shadow-shadow"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b-4 border-border">
              <h2 className="text-2xl font-bold">Contact Me</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-main/10 rounded-base border-2 border-border hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border-2 border-border rounded-base bg-background focus:outline-none focus:border-main transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border-2 border-border rounded-base bg-background focus:outline-none focus:border-main transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-bold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-3 border-2 border-border rounded-base bg-background focus:outline-none focus:border-main transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full p-3 border-2 border-border rounded-base bg-background focus:outline-none focus:border-main transition-colors resize-none"
                  placeholder="Hi Ioannis, I found your portfolio and would like to get in touch..."
                />
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'validation' && (
                <div className="p-3 border-2 border-red-500 bg-red-50 rounded-base text-red-700 text-sm">
                  Please fill in all required fields.
                </div>
              )}
              
              {submitStatus === 'success' && (
                <div className="p-3 border-2 border-green-500 bg-green-50 rounded-base text-green-700 text-sm">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-3 border-2 border-red-500 bg-red-50 rounded-base text-red-700 text-sm">
                  ❌ Something went wrong. Please try again or email directly: ioannis.mesionis@gmail.com
                </div>
              )}
              
              {/* Submit Button */}
              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-gray-200 text-gray-700 hover:bg-gray-300 border-gray-400"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-main-foreground border-t-transparent mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;