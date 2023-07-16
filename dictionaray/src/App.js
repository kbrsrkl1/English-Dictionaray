import React from "react" ;
import Result from "./Result";

const App = () => {
  return (
        <div className="container">
          <h1>Englısh Dictionaray</h1>

          <form>
            <div className="row">
              <textarea name="" id="" cols="30" rows="4" placeholder='Enter Text'/>
                <div className="voices-icons">
                  <div className="select-voices">
                    <select name="" id="">
                      <option value="">Englısh</option>
                      <option value="">Englısh</option>
                      <option value="">Englısh</option>
                    </select>
                  </div>
                  <i class="fa-solid fa-volume-high"></i>
                </div>
            </div>
          </form>

          <Result/>
        </div>
  );
}

export default App;
