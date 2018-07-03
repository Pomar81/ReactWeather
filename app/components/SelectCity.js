import React from 'react';

class SelectCity extends React.Component {
  render() {
    return (
        <form className="cityForm">
          <h1>Enter a City and State</h1>
          <input type="text" placeholder="Vinnytsia"/>
          <button type="submit">Get Weather</button>
        </form>
    );
  }
}

export default SelectCity;