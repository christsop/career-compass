import React, { useState, useEffect } from 'react'
import Typewriter from '../components/Typewriter'
import Options from '../components/Options'
import { Question } from '../../shared-types/src'

const Test = () => {
    const [questions, setQuestions] = useState<Question[]>(null)
    const [results, setResults] = useState(new Array(5).fill(0))
    const [showTest, setShowTest] = useState(Boolean(false))
    const [showResults, setShowResults] = useState(Boolean(false))
    const [isResultsValid, setIsResultsValid] = useState(Boolean(true))
    const handleTypewriterComplete = () => setShowTest(true)
    const handleSubmit = () => {
        setShowTest(false)
        setShowResults(true)
    }
    const onOptionChange = (option, question) => {
        const newResults = [...results]
        newResults[question] = option + 1
        setResults(newResults)
    }

    useEffect(() => {
        setIsResultsValid(!results.includes(0))
    }, results)

    useEffect(() => {
        fetch(`http://localhost:3000/api/questions`)
            .then((resp) => resp.json())
            .then((data) => setQuestions(data))
    }, [])

    return (
        <section className="section test">
            <Typewriter
                text="Unlock the future  you deserve..."
                delay={40}
                onComplete={handleTypewriterComplete}
            />

            {showTest && (
                <div className="questions">
                    {questions.map((q, key) => (
                        <div key={key} className="question">
                            <p>{q.question}</p>
                            <div>
                                <Options
                                    handleOptionChange={(option) =>
                                        onOptionChange(option, key)
                                    }
                                />
                            </div>
                        </div>
                    ))}
                    <button
                        className="button is-info"
                        disabled={!isResultsValid}
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            )}

            {showResults && <div>these are the results</div>}
        </section>
    )
}

export default Test
