import React from 'react';
import Button from './Button';

function MyProps(props) {
    function handleClick() {
        alert('😝');
    };
    if (props.showLink == false) {
        return (
            <>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <Button onClick={handleClick}/>
            </>
        );
    } else {
        return (
            <>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href="#">{props.linkText}</a>
                <Button onClick={handleClick}/>
            </>
        );
    };
};

export default MyProps;