import React, {useState, useMemo, useEffect} from "react" ;
import Result from "./Result";

const synth = window.speechSynthesis;

const App = () => {
  const voices = useMemo(() => synth.getVoices(), []);
  const [voiceSelected, setVoiceSelected] = useState("Google US Englısh");
  return (
        <div className="container">
          <h1>Englısh Dictionaray</h1>
          <form>
            <div className="row">
              <textarea name="" id="" cols="30" rows="4" 
              placeholder='Enter Text' />

                <div className="voices-icons">
                  <div className="select-voices">
                    <select value={voiceSelected} 
                    onChange={(e) => setVoiceSelected(e.target.value)}>
                      {
                        voices.map((voice) => (
                          <option key={voice.name} value={voice.name}>{voice.name}</option>
                        ))
                      }
                    </select>
                  </div>
                  <i class="fa-solid fa-volume-high"></i>
                </div>
            </div>
          </form>
          <Result/>
        </div>
  );
};

export default App;
