import React from 'react';
import api from "../utils/api";
import PropTypes from "prop-types";

class Form extends React.Component {
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
       // api.getForecast(this.state.city);
        this.props.onSubmit(this.state.city);
    }

    render() {
        return (
            <form className={this.props.className}>
                <input className="cityInput" type="text" placeholder="Vinnytsia" onChange={this.handleInput} value={this.state.city}/>
                <button className="citySubmit" type="submit" onClick={this.handleSubmit}>Get Weather</button>
            </form>
        );
    }
}

Form.prototypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Form;