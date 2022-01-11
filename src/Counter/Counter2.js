import React from "react";
import {ClickedContext} from "../App";

export const Counter2 = props => {
    return (
        <div style={{
            border: '1px solid black',
            width: 150,
            margin: '0 auto'
        }}>
            <h3>Counter 2</h3>
            <ClickedContext.Consumer>
                {clicked => clicked ?<p>Clicked</p> : null}
            </ClickedContext.Consumer>
        </div>
    )
}