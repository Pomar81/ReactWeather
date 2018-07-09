import React from 'react';
import api from "../utils/api";

class MainForm extends React.Component {
    state = {
        city: ""
    }

    handleInput = (evt) => {
        this.setState(
            {city: evt.target.value}
        );
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        api.getForecast(this.state.city);
    }

    render() {
        return (
            <form className="mainForm">
                <h1>Enter a City and State</h1>
                <input className="cityInput" type="text" placeholder="Vinnytsia" onChange={this.handleInput} value={this.state.city}/>
                <button className="citySubmit" type="submit" onClick={this.handleSubmit}>Get Weather</button>
            </form>
        );
    }
}

export default MainForm;