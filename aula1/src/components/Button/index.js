import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.press}>{props.children}</button>
    );
}

export default Button;