import React from "react";
import api from "../utils/api";

class Header extends React.Component {
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
        api.getCurrentWeather(this.state.city);
    }

    render() {
        return (
            <form action="" className="headerForm">
                <h2>Clever Title</h2>
                <input className="cityInput" placeholder="Vinnytsia" value={this.state.city}
                       onChange={this.handleInput}/>
                <button className="citySubmit" onClick={this.handleSubmit}>Weather</button>
            </form>
        );
    }
}

export default Header