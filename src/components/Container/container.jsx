import "./container.css";
import { useEffect, useState } from "react";

const data = [
  "Include Uppercase Letters",
  "Include Lowercase Letters",
  "Include Numbers",
  "Include Symbols",
];
const info = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];
const Container = ({ setPassword }) => {
  const [rangeValue, setRangeValue] = useState(10);
  const [strength, setStrength] = useState(0);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const getRandomCharacter = (set) => {
    const randomIndex = Math.floor(Math.random() * set.length);
    return set.charAt(randomIndex);
  };
  const generatePassword = () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let validChars = "";

    if (includeUppercase) validChars += uppercaseChars;
    if (includeLowercase) validChars += lowercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += symbolChars;

    if (validChars === "") {
      setPassword("Please select at least one option.");
      return;
    }
    let newPassword = "";
    const passwordLength = parseInt(rangeValue);

    for (let i = 0; i < passwordLength; i++) {
      newPassword += getRandomCharacter(validChars);
    }
    setPassword(newPassword);
  };

  const rangeHandler = (e) => {
    setRangeValue(e.target.value);
  };

  function handleChange(e, clickedCheckBoxName) {
    if (e.target.checked) {
      setStrength((prev) => prev + 1);
    } else {
      setStrength((prev) => prev - 1);
    }
    console.log(clickedCheckBoxName);
    if (clickedCheckBoxName === "Include Uppercase Letters") {
      setIncludeUppercase(!includeUppercase);
    } else if (clickedCheckBoxName === "Include Lowercase Letters") {
      setIncludeLowercase(!includeLowercase);
    } else if (clickedCheckBoxName === "Include Numbers") {
      setIncludeNumbers(!includeNumbers);
    } else {
      setIncludeSymbols(!includeSymbols);
    }
  }



  return (
    <div className="main">
      <div className="text-number">
        <h2 className="character-length">Character Length</h2>
        <h1 className="numbers">{rangeValue}</h1>
      </div>
      <input
       style={{backgroundSize: `${(5*rangeValue)}%`}}
        className="range"
        type="range"
        max={20}
        onChange={rangeHandler}
        value={rangeValue}
      />
      <div className="boxes">
        {data.map((item, index) => {
          return (
            <div className="container-box" key={index}>
              <input
                type="checkbox"
                className="checkbox"
                onChange={(e) => handleChange(e, item)}
              />
              <div className="custom-checkbox"></div>
              <h2 className="text">{item}</h2>
            </div>
          );
        })}
      </div>
      <div className="dark-box">
        <h2 className="strength">STRENGTH</h2>
        <div className="text-and-scale">
          <div className="scale">{info[strength - 1]}</div>
          <div
            className={`colored-boxes ${
              strength === 1
                ? "a"
                : strength === 2
                ? "b"
                : strength === 3
                ? "c"
                : strength === 4
                ? "d"
                : null
            }`}
          ></div>
          <div
            className={`colored-boxes ${
              strength === 2
                ? "b"
                : strength === 3
                ? "c"
                : strength === 4
                ? "d"
                : null
            }`}
          ></div>
          <div
            className={`colored-boxes ${
              strength === 3 ? "c" : strength === 4 ? "d" : null
            }`}
          ></div>
          <div className={`colored-boxes ${strength === 4 ? "d" : null}`}></div>
        </div>
      </div>
      <button className="generate-part" onClick={generatePassword}>
        GENERATE
        <svg
          className="icon-arrow"
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#24232C"
            d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
          />
        </svg>
      </button>
    </div>
  );
};
export default Container;
