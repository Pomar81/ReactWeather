import React from "react";
import Form from "./Form";


function Header(props) {
    return (
        <header className="header">
            <h2>Clever Title</h2>
            <Form className="headerForm" onSubmit={(city) => {
                props.history.push(window.encodeURI(`/forecast?city=${city}`));
            }}/>
        </header>
    );
}


export default Header;