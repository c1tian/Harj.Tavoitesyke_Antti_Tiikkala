import './App.css';
import {useState} from 'react';

function App() {
const [Age, setAge] = useState('')
const [Upper, setUpper] = useState(0)
const [Lower, setLower] = useState(0)




function laske(e) {
  e.preventDefault() //Estää refreshauksen
  const Upper = (220 - Age) * 0.85
  const Lower = (220 - Age) * 0.65
  setUpper(Upper)
  setLower(Lower)
}

  return (
    <div id="content">
      <h3>Heart rate limits calculator</h3>
      <form onSubmit={laske}>
        <div>
          <label>Age</label>
          <div>
          <input value={Age} onChange={e => setAge(e.target.value)}/>
        </div>
        </div>
        <div>
          <label>Heart rate limits</label>
          <div>
          <output>{Lower.toFixed(0)}-{Upper.toFixed(0)}</output>
        </div>
        </div>
        <button>Calculate</button>
      </form>
    </div>

  );
}

export default App;