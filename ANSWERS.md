- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components can hold state, have lifecycle methods, can use refs which allow 'focus' of specific DOM elements. Class components can also use advanced performance optimization techniques like shouldComponentUpdate and PureComponent. shouldComponentUpdate is a special lifecycle method that skips re-rendering if props or state have changed. Another significant difference is that class components are object-oriented programming style while functional components are functional programming.

- [ ] Name three lifecycle methods and their purposes.

The three lifecycle methods are the Mounting Phase, Updating Phase, and the Un-mounting Phase. The Mounting Phase is where the initial data will be defined in the constructor. The render method is invoked and componentDidMount gets called. In the Updating Phase, the component data is being updated. The 'setState' can be used to change the current state of data which will cause a re-render. As mentioned in the first question, a 'shouldComponentUpdate' here will stop the component from re-rendering. The Unmounting Phase involves removing the component from the screen. The 'componentWillUnmount' is called and any cleanup can be performed in this phase.

- [ ] What is the purpose of a custom hook?

Custom hooks allow a developer to 'customize' a reusable hook that can handle API calls, controlled inputs in a form, and manage event listeners. Custom hooks can allow multiple components to reuse the same code allowing code to adhere to the concept of being 'DRY'.

- [ ] Why is it important to test our apps?

Ultimately, developers are responsible for their code being clean and free of errors as well as ensuring the functionality of the code is working correctly. Developers must test the code thoroughly to ensure error free code reaches the end user. Testing will improve the user experience as well as eliminate the need to spend countless hours and thousands of dollars later when bugs could be encountered.
