import React, { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [count, setCount] = useState(0);
  function handlePrevious() {
    if (step > 1) setStep((currentStep) => currentStep - 1);
  }
  function handleNext() {
    if (step < 3) setStep((currentStep) => currentStep + 1);
  }
  function handleClose() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <>
      <button onClick={handleClose} className="close">
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : " "}>1</div>
            <div className={step >= 2 ? "active" : " "}>2</div>
            <div className={step >= 3 ? "active" : " "}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#7950f2", color: "#ffff" }}
            >
              Pevious
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#ffff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Steps;
