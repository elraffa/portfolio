import { React, useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaEnvelope, FaPagelines } from "react-icons/fa";

export default function ContactForm() {
  const inputElement = useRef(null);
  const inputBox = useRef(null);
  const thankYou = useRef(null);

  const [position, setPosition] = useState(0);
  const [input, setInput] = useState("");
  const [questions, setQuestions] = useState([
    { question: "Enter Your Name", type: "text" },
    { question: "Email", type: "text", pattern: /\S+@\S+\.\S+/ },
    { question: "Your Message", type: "text" },
  ]);

  let percentage = (position * 100) / questions.length + "%";

  // Transform to Create Shake Motion
  function transform(x, y) {
    inputBox.current.style.transform = `translate(${x}px, ${y}px)`;
  }

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [position]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClickForward = () => {
    questions[position].answer = input;
    console.log(questions[position]);
    console.log(questions);
    validate();
  };

  const handleSubmit = () => {
    //e.preventDefault();
    console.log('Sending');

    let data = {
      name: questions[0].answer,
      email: questions[1].answer,
      msg: questions[2].answer
    }
    
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'max-age=180000');
        setSubmitted(true)
        res.end(JSON.stringify(response))
        // Actually this is ok so maybe else in inputPass needs to change
      }
    }).catch(error => {
      res.json(error);
      res.status(405).end();
  })};

  // Validate input
  function validate() {
    if (!input.match(questions[position].pattern || /.+/)) {
      inputFail();
    } else {
      inputPass();
    }
  }

  // Input empty or wrong
  function inputFail() {
    console.log(inputBox);
    inputBox.current.className = "error";
    for (let i = 0; i < 6; i++) {
      setTimeout(transform, shakeTime * i, ((i % 2) * 2 - 1) * 20, 0);
      setTimeout(transform, shakeTime * 6, 0, 0);
      inputElement.current.focus();
    }
  }

  function inputPass() {
    inputBox.current.className = "";
    setTimeout(transform, shakeTime * 0, 0, 10);
    setTimeout(transform, shakeTime * 1, 0, 0);
    if (position < 2) {
      setPosition(position + 1);
    } else {
      inputBox.current.className = 'close';
      thankYou.current.className = 'open';
      handleSubmit();
    }
    setInput("");
  }

  const handleClickBackward = () => {
    setPosition(position - 1);
    setInput("");
  };

  // Transition Times
  const shakeTime = 100;
  const switchTime = 200;

  return (
    <div id="form-container">
      <h2>Contact me!</h2>
      <p>
        This contact Form is quite experimental. If you find any bugs please let
        me know! It's based on Brad Traversy's{" "}
        <a href="https://www.youtube.com/watch?v=AiTdhLc8JCo" target="_blank">
          Fancy Form UI from Scratch
        </a>{" "}
        which is built in HTML, CSS and plain JS. I have adapted it to work with
        React and the Next.js Framework.
      </p>
      <form>
        <div id="form-box" ref={inputBox}>
          {position === 0 ? (
            <FaEnvelope id="prev-btn" />
          ) : (
            <FaArrowLeft id="prev-btn" onClick={handleClickBackward} />
          )}

          <FaArrowRight id="next-btn" onClick={handleClickForward} />

          <div id="input-group">
            <input
              type={questions[position].type}
              id="input-field"
              value={input}
              onChange={handleChange}
              required
              ref={inputElement}
            />
            <label id="input-label">{questions[position].question}</label>
            <div id="input-progress" style={{ width: "100%" }}></div>
          </div>
          <div id="progress-bar" style={{ width: percentage }}></div>
          
        </div>
      </form>
      <div id="thank-you" ref={thankYou} >Thank you for your contact, {questions[0].answer}! I'll get in touch as soon as I can.</div>
    </div>
  );
}
