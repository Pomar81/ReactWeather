import React from "react";
import queryString from "query-string";
import api from "../utils/api";


function DayWeather(props) {
    return (
        <div className="dayContainer" onClick={props.onClick}>
            <img src={`app/images/weather-icons/${props.day.weather[0].icon}.svg` } className="weatherIcon" alt={`${props.day.weather.description}`}/>
            <p>
                {
                    new Intl.DateTimeFormat("en-us", {weekday: "long", month: "short", day: "numeric"})
                        .format(Number(props.day.dt)*1000)}</p>
        </div>
    );
}

class Forecast extends React.Component {
    state = {
        loading: true,
        error: false,
        weather: null,
    }
    getForecast = () => {
        const city = queryString.parse(this.props.location.search).city;
        this.setState({
            loading: true,
            weather: null,
        });

        api.getForecast(city)
            .then((data) => {
                this.setState({
                    loading: false,
                    error: false,
                    weather: data,
                });
                console.log(data);
            })
            .catch((err) => {
                console.dir(err)
                this.setState({
                    error: true,
                });
            })
            .finally(() => {
                this.setState({
                    loading: false,
                });
            });
    }

    handleClick = (day) => {
        const city = this.state.weather.city.name;
        return ((evt) => {
            console.log(city);
            this.props.history.push(`details/${city}`);
        });
    }

    componentDidMount() {
        this.getForecast();
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
            this.getForecast();
        }
    }

    render() {
        if (this.state.loading)
            return (<h1 className="forecastTitle">Loading</h1>);
        else if (this.state.error) {
            {console.log("err")}
            return (<h1 className="forecastTitle">There is an error</h1>);
        }
        return (
            <main className="mainForecast">
                <h1 className="complete forecastTitle">{this.state.weather.city.name}</h1>
                <div className="forecastContainer">{
                    this.state.weather.list.map((day) => {
                        return <DayWeather key={day.dt} day={day} onClick = {this.handleClick(day)}/>;
                    })
                }</div>
            </main>
        );
    }
}

export default Forecast;