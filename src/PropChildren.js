import React from 'react';

function PropChildren(props) {
    return (
        <>
            <h2>{props.type}</h2>
            <div>{props.children}</div>
        </>
    );
};

export default PropChildren;