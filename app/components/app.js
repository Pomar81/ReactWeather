import React from "react";
import MainContainer from "./MainContainer";
import Header from "./Header";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Forecast from "./Forecast";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route component={Header}/>
                    <Switch>
                        <Route exact path="/" component={MainContainer}/>
                        <Route path="/forecast" component={Forecast}/>
                        <Route render={()=><p>page is not found 404</p>}/>
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;