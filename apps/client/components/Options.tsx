import { useState, useEffect } from "react";

export interface Option {
  option: string;
  score: number;
}

const OPTIONS = {
  options: [
    { option: 'Strongly Disagree', score: 1 },
    { option: 'Disagree', score: 2 },
    { option: 'Neutral', score: 3 },
    { option: 'Agree', score: 4 },
    { option: 'Strongly Agree', score: 5 },
  ],
};
const Options = ({handleOptionChange}) => {

  const [isSelected, setIsSelected] = useState<number>();

  const handleSelected = (key) => {
    setIsSelected(key);
    handleOptionChange(key);
  }

  return (
    <div className="options">
      Strongly <br/>disagree
      {OPTIONS.options.map((o, key) => (
        <div onClick={() => handleSelected(key)} key={key} className={`option option_color-rate-${key} ${isSelected === key ? 'option_is-selected' : ''}`}>
          {/*{o.option}*/}
        </div>
      ))}
      Strongly <br/>agree
    </div>
  );
};

export default Options;
