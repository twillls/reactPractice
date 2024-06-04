# React Forms
In regular HTML, the state of the form is managed by browser and doesn't update the server until the user hits submit.

In React, the state of the form can be managed by the component, and updates are triggered by the onChange event. When the user interacts with an input, such as entering or deleting any characters, the onChange event fires and updates the component state.
This allows to component to immediately reflect any changes made by the user and update the view accordingly.

## Controlled vs Uncontrolled
An Uncontrolled Component is a component that maintains its own internal state.
A Controlled Component is a component that does not maintain any internal state. Since it has not state, it must be *controlled* by someone else.

As an example, think of a typicaly `<input type="text">` element. It appears on screen as a text box. If you need to know what text is in the text box, you can ask the input element with code that uses a query selector. THe input element keeps track of it's own text. You can access the text at any time. This makes it an *uncontrolled component*. It maintains it's own state.

A controlled component has no memory. If you query it for information about itself, it would get that information through `props`. Most React components are *controlled*.

In React, when you give an `input` element a `value` attribute, it then becomes *controlled*. It no longer uses it's internal storage, and relies on props and state hooks to fetch the data.

## Uncontrolled Components in React
Rather tha nusinga  component's state value to maintain ane element's input value and updating it on every change, we can use a `ref` to retrieve the value directly from the DOM only when we need it.

> Refs provide a way to access DOM nodes or React elements created in the render method

To create an uncontrolled component, start by creating a ref using the `useRef()` method. This returns an object with a `/current` property that refers to the DOm node it is bound to. The ref object is bound to a form element using the `ref` attribute. Whenever the value of that form element needs to be retrieved, refer back to the ref object's `.current` property.

Example: the `numberRef` object is created then bound to the `<input>` form element
```react
const numberRef = React.useRef();

// ...

<input type="text" ref={numberRef} />
```

In `handleSubmit`, the value of the form element can be retrieved from ther DOM node stored in `numberRef.current`:
```react
const number = numberRef.current.value;
```
*Note: <input> DOM nodes are instances of HTMLInputElement, so their values can be retrieved using the .value property. Other form elements may use different properties to access their input values.*


One situation in which uncontrolled components must always be used is when `<input>` from elements with `type="file"` attributes exist. THe value for this type of `<input>` form element can only be set by a user, not programmatically, so the only way to retrieve this value is through a ref.