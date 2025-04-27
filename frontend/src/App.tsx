import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus the input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const command = input.trim();
      if (command) {
        setHistory(prev => [...prev, `$ ${command}`]);
        // Here you can add command processing logic
        setHistory(prev => [...prev, `Command not found: ${command}`]);
        setInput('');
      }
    }
  };

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-controls">
          <span className="control close"></span>
          <span className="control minimize"></span>
          <span className="control maximize"></span>
        </div>
        <div className="terminal-title">Terminal</div>
      </div>
      <div className="terminal-body">
        <div className="terminal-content">
          {history.map((line, index) => (
            <div key={index} className="terminal-line">{line}</div>
          ))}
          <div className="terminal-input-line">
            <span className="prompt">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
            />
            <span className="cursor"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;