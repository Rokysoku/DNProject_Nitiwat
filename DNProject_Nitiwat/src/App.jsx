import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const AboutMe = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Me</h1>
      <img
        src="your-photo-url.jpg"
        alt="Your Name"
        style={styles.profileImage}
      />
      <p style={styles.description}>
        Hello! My name is [Your Name]. I'm a [Your Profession/Passion] with a passion for [Your Interests]. 
        I love working on projects related to [Your Skills/Work], and I enjoy [Hobbies]. I'm always excited 
        to learn new things and challenge myself.
      </p>
      <div style={styles.contact}>
        <h3>Contact Me</h3>
        <p>Email: your-email@example.com</p>
        <p>Phone: +123456789</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2em',
    lineHeight: '1.6em',
    margin: '0 20px 20px',
  },
  contact: {
    marginTop: '20px',
  },
};

export default App
