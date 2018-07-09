import React from "react";
import MainForm from "./MainForm";
import Header from "./Header";

class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
        <React.Fragment>
          <header className="header">
              <Header/>
          </header>
          <main className="main" >
            <MainForm/>
          </main>
        </React.Fragment>
    );
  }
}

export default App;