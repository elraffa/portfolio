import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export default function ContactForm() {
  const questions = [
    { question: 'Enter Your Name' },
    { question: 'Email', pattern: /\S+@\S+\.\S+/ },
    { question: 'Your Message' },
  ];

  // Transition Times
  const shakeTime = 100;
  const switchTime = 200;

  // Init position at first question

  return (
    <div id="form-container">
      <div id="form-box">
        <FaArrowLeft id="prev-btn" />
        <FaArrowRight id="next-btn" />
        <div id="input-group">
          <input id="input-field" required />
          <label id="input-label"></label>
          <div id="input-progress"></div>
        </div>
        <div id="progress-bar"></div>
      </div>
    </div>
  );
}
