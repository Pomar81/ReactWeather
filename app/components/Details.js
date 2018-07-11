import React from "react";
import DayWeather from "./DayWeather"

function Details(props) {
    const day = props.location.state;
    const city = props.location.pathname.match(/[^/]+$/)[0];
    console.log(day);
    return (
        <div className="detailsContainer">
            <DayWeather day = {day}/>
            <p>{city}</p>
            <p>{day.weather[0].description}</p>
            <p>min temp: {day.temp.min} degrees</p>
            <p>max temp: {day.temp.max} degrees</p>
            <p>humidity: {day.humidity}%</p>
        </div>

    );

}

export default Details;