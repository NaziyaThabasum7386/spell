import { useState } from 'react';
import './App.css';

function App() {
  // Define a custom dictionary of words and their corrections
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};
  const [input, setInput] = useState("");
  const [state, setState] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInput(text);

    // Implement a basic spelling check and correction
    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    const correctedText = correctedWords.join(" ");

    // Set the suggested text (first corrected word)
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setState( firstCorrection || "" );
  };

    return (
      <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
        {state && (
          <p>
            Did you mean: <strong>{state}</strong>?
          </p>
        )}
      </div>
    );
  }


export default App;
