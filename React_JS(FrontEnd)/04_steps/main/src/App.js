import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps></Steps>
      <Steps></Steps>
    </div>
  );
}

function Steps() {
  // useState function --> returns an Array
  // Passed Default value as argument
  // array contains : 1) default value 2) function (we can use to update state var).
  const [step, setStep] = useState(1);
  //   const [test, setTest] = useState({ name: "jonas" });
  const [isOpen, setIsOpen] = useState(true);
  function handleNext() {
    // if (step < 3) {
    //   //We Should not update state based on Current state
    //   setStep(step + 1);
    //   setStep(step + 1);
    // }
    // Rather we Do : (use Call back)

    if (step < 3) {
      setStep((s) => s + 1);
      //   setStep((s) => s + 1);
    }

    //  # bad practice :
    // test.name = "fred"; // Mutating directly
    // setTest({ name: "fred" }); // using function
  }
  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    } // here we are updating use state function -> react is about immutability.
    // step = step - 1; --> here we are mutating step
  }
  return (
    <div>
      <button
        className="close"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}:{messages[step - 1]}
            {/* {test.name} */}
          </p>
          <div className="buttons">
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
