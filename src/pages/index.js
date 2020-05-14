import React from 'react';
import {Link} from "react-router-dom";

function MainPage(){

    return(
        <div>
        <h1> Welcome to </h1>
        <small> Main Page</small>
        <Link to="/users">Show List or Users</Link>
        </div>
    )
}
export default MainPage;