import React, { useState } from 'react';

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState<string>('');

  const [includeUppercase, setIncludeUppercase] = useState<boolean>(false);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);

  // Function to generate a random character from a given set
  const getRandomCharacter = (set: string): string => {
    const randomIndex = Math.floor(Math.random() * set.length);
    return set.charAt(randomIndex);
  };

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let validChars = '';

    if (includeUppercase) validChars += uppercaseChars;
    if (includeLowercase) validChars += lowercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += symbolChars;

    if (validChars === '') {
      setPassword('Please select at least one option.');
      return;
    }

    let newPassword = '';
    const passwordLength = 12; // You can adjust the length as needed

    for (let i = 0; i < passwordLength; i++) {
      newPassword += getRandomCharacter(validChars);
    }

    setPassword(newPassword);
  };

  return (
    <div>
      <h1>Password Generator</h1>
      <label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />
        Include Uppercase Letters
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={() => setIncludeLowercase(!includeLowercase)}
        />
        Include Lowercase Letters
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
        Include Numbers
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
        />
        Include Symbols
      </label>
      <br />
      <button onClick={generatePassword}>Generate Password</button>
      <br />
      <h2>{password}</h2>
    </div>
  );
};

export default PasswordGenerator;