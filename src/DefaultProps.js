import React from 'react';

function DefaultProps(props) {
    return <h2>{props.text}</h2>
};

//// Adding Default Props
//// Method One:
//// Adding a defaultProps static property to the component
DefaultProps.defaultProps = {
    text: 'This is default text',
};

//// Method Two:
//// Specify the default value directly in the function definition:
// function DefaultExampleTwo({text='This is default text'}) {
//     return <h2>{text}</h2>
// }

//// Method Three:
//// Set the default value in the function body:
// function DefaultExampleThree(props) {
//     const {text = 'This is default text'} = props;
//     return <h2>{text}</h2>
// }

export default DefaultProps;