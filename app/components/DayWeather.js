import React from "react";
import PropTypes from "prop-types";

function DayWeather(props) {
    return (
        <div className="dayContainer" onClick={props.onClick}>
            <img src={`/app/images/weather-icons/${props.day.weather[0].icon}.svg`} className="weatherIcon"
                 alt={`${props.day.weather.description}`}/>
            <p>
                {
                    new Intl.DateTimeFormat("en-us", {weekday: "long", month: "short", day: "numeric"})
                        .format(Number(props.day.dt) * 1000)}
            </p>
        </div>
    );
}

DayWeather.proptypes = {
    onClick: PropTypes.func,
    day: PropTypes.object.isRequired
}

export default DayWeather;