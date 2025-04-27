import './App.css';

function App() {

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-controls">
          <span className="control close"></span>
          <span className="control minimize"></span>
          <span className="control maximize"></span>
        </div>
        <div className="terminal-title">terminal</div>
      </div>
      <div>hello, this is a new project. there is no functionality deployed yet.</div>
      <div>started april 27, 2025</div>
      <div className="terminal-body">
        <div className="terminal-content">
          <div className="terminal-input-line">
            <span className="prompt">$</span>
            <input type="text" className="terminal-input"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;