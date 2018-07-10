import React from "react";
import queryString from "query-string";
import api from "../utils/api";

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
            return (<h1 className="forecastTitle">There is an error</h1>);
        }
        return <h1 className="complete forecastTitle">{this.state.weather.city.name}</h1>;
    }
}

export default Forecast;