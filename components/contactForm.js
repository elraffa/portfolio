import { React, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaEnvelope } from 'react-icons/fa';

export default function ContactForm() {
  const [position, setPosition] = useState(0);
  const [answer, setAnswer] = useState('');
  const questions = [
    { question: 'Enter Your Name', type: 'text', answer },
    { question: 'Email', type: 'email', pattern: /\S+@\S+\.\S+/, answer },
    { question: 'Your Message', type: 'text', answer },
  ];

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleClickForward = () => {
    questions[position].answer = answer;
    console.log(questions[position].answer);
    setPosition(position + 1);
    setAnswer('');
  };

  const handleClickBackward = () => {
    setPosition(position - 1);
    setAnswer('');
  };

  // Transition Times
  const shakeTime = 100;
  const switchTime = 200;

  return (
    <div id="form-container">
      <h2>Contact me!</h2>
      <div id="form-box">
        {position === 0 ? (
          <FaEnvelope id="prev-btn" />
        ) : (
          <FaArrowLeft id="prev-btn" onClick={handleClickBackward} />
        )}
        {position < 2 ? (
          <FaArrowRight id="next-btn" onClick={handleClickForward} />
        ) : (
          <FaArrowRight id="next-btn" />
        )}
        <div id="input-group">
          <input
            type={questions[position].type}
            id="input-field"
            value={answer}
            onChange={handleChange}
            required
            autofocus
          />
          <label id="input-label">{questions[position].question}</label>
          <div id="input-progress"></div>
        </div>
        <div id="progress-bar"></div>
      </div>
    </div>
  );
}
