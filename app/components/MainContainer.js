import React from "react";
import Form from "./Form";

function MainContainer (props) {
    return (
        <main className="mainContainer">
            <h1>Enter a City and State</h1>
            <Form className = "mainForm" onSubmit={(city) => {
                props.history.push(window.encodeURI(`/forecast?city=${city}`));
            }}/>
        </main>
    );
}

export default MainContainer;