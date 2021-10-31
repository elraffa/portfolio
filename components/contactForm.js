import { React, useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight, FaEnvelope } from 'react-icons/fa';

export default function ContactForm() {
  const inputElement = useRef(null);
  const [position, setPosition] = useState(0);
  const [answer, setAnswer] = useState('');
  const questions = [
    { question: 'Enter Your Name', type: 'text', answer },
    { question: 'Email', type: 'email', pattern: /\S+@\S+\.\S+/, answer },
    { question: 'Your Message', type: 'text', answer },
  ];

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [position]);

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleClickForward = () => {
    questions[position].answer = answer;
    console.log(questions[position]);
    setPosition(position + 1);
    setAnswer('');
  };

  const handleClickBackward = () => {
    setPosition(position - 1);
    setAnswer('');
  };

  const percentage = (position * 100) / questions.length + '%';

  // Transition Times
  const shakeTime = 100;
  const switchTime = 200;

  return (
    <div id="form-container">
      <h2>Contact me!</h2>
      <p>
        This contact Form is quite experimental. If you find any bugs please let
        me know! It's built upon Brad Traversy's{' '}
        <a href="https://www.youtube.com/watch?v=AiTdhLc8JCo" target="_blank">
          Fancy Form UI from Scratch
        </a>{' '}
        which is built in HTML, CSS and plain JS. I have adapted it to work with
        React and the Next.js Framework.
      </p>
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
            ref={inputElement}
          />
          <label id="input-label">{questions[position].question}</label>
          <div id="input-progress"></div>
        </div>
        <div id="progress-bar" style={{ width: percentage }}></div>
      </div>
    </div>
  );
}
