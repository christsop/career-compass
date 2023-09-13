import React, { useState, useEffect } from 'react';
import Typewriter from '../components/Typewriter';
import Options from "../components/Options";

export interface Question {
  question: string;
}
const Test = () => {
  const [results, setResults] = useState(new Array(5).fill(0));
  const [showTest, setShowTest] = useState(Boolean(false));
  const [showResults, setShowResults] = useState(Boolean(false));
  const [isResultsValid, setIsResultsValid] = useState(Boolean(true));
  const handleTypewriterComplete = () => setShowTest(true);
  const handleSubmit = () => {
    setShowTest(false);
    setShowResults(true);
  }
  const onOptionChange = (option, question) => {
    const newResults = [...results];
    newResults[question] = option+1;
    setResults(newResults);
  }

  useEffect(() => {
    console.log(results);
    console.log(results.includes(0));
    setIsResultsValid(!results.includes(0))
  }, results)


  // Example usage:
  const questions: Question[] = [
    {
      "question": "I prefer working on tasks that require attention to detail and precision.",
    },
    {
      "question": "I enjoy leading and motivating a team to achieve common goals.",
    },
    {
      "question": "I am comfortable taking risks and making decisions in uncertain situations.",
    },
    {
      "question": "I enjoy analyzing data and using it to inform strategic decisions.",
    },
    {
      "question": "I find satisfaction in helping others and making a positive impact on their lives.",
    }
  ];



  return (
    <section className="section test">
      <Typewriter
        text="Unlock the future  you deserve..."
        delay={40}
        onComplete={handleTypewriterComplete}
      />

      {
        showTest &&
        <div className="questions">
          {questions.map((q, key) => (
            <div key={key} className="question">
              <p>{q.question}</p>
              <div>
                <Options handleOptionChange={(option) => onOptionChange(option, key)}/>
              </div>
            </div>
          ))}
          <button className="button is-info" disabled={!isResultsValid} onClick={handleSubmit}>Submit</button>
        </div>
      }

      {showResults && <div>these are the results</div>}
    </section>
  );
};

export default Test;
