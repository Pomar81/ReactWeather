import React from "react";
import SelectCity from "./SelectCity"

class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
        <React.Fragment>
          <div className="header">
            My header
          </div>
          <div className="main" >
            <SelectCity/>
          </div>
        </React.Fragment>
    );
  }
}

export default App;