import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../navbar/assets/nav-logo.jpg'; 

const LoadingScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 3000); 
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ scale: 1, opacity: 1 }}
      animate={{ scale: 1.5, opacity: 0 }}
      transition={{ delay: 1, duration: 2.3 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#cc0d2e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <img src={logo} alt="Loading" style={{ width: 'auto', height: '100px' }} />
    </motion.div>
  );
};

export default LoadingScreen;
