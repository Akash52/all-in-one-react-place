# all-in-one-react-place
The repository goal was to explore React as much as possible 🔥😃

## Useful Resoursce 📗 

### YouTube Channels 

- [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)
- [JavaScript Mastery](https://www.youtube.com/c/JavaScriptMastery)
- [The NetNinja](https://www.youtube.com/c/TheNetNinja)
- [Lama Dev](https://www.youtube.com/c/LamaDev)
- [ILW Yennefer](https://www.youtube.com/channel/UC5XDHSUoBC11Kj-iIpx7QkA)
- [Overreacted](https://www.youtube.com/c/OverreactedDev)
- [Codevolution](https://www.youtube.com/c/Codevolution)


## What does meaning of these two import statement !?

```JavaScript
import React from 'react;
import ReactDom from 'reactDom'
```
 ### import React from 'react;
 - React Does't know how to render an element 😧
 - React Describe only UI 🙂

### import ReactDom  from 'reactDom;
- Way to actually render It (element)
 
 ```Javascript
 <!---  Our React element -->
 const reactElement = <div>Hello World!</div>
<!--- Our DOM element where we render UI. -->
const domElement = document.getElementById("root")

<!--- Now we put together these two element! -->
ReactDOM.render(reactElement,domElement)

 ```

## How React Render Element in UI !?

![img](https://i.ibb.co/Hn5Qv4x/how-React-Render.png)

## React is Just JavaScript! 

```javaScript
const text = "as a variable";
const reactElement= React.createElement(
 "div",
 null,
 (()=>{
  return text + 42
 })();
)
```
- Callbacks are functions that return after an event is executed.

## React components
- A component in React is a single independent unit of a user interface.

[understanding-react-components by @andela-way](https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb)


## “Kinds” of Components

Architecturally, you can segment components into two kinds: Presentational (a.k.a “Dumb”) and Container (a.k.a. “Smart”).

[smart and dumb components by @dan_abramov](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

## Input Controls

Input controls in React come in two flavors: controlled and uncontrolled.

- Controlled components in React are those in which form data is handled by the component’s state.

#### Example 
```JavaScript
import React, {useState} from 'react';
const InputExample = () => {
    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
    };
    return <input type="text" value={text} onChange={handleChange} />;
};

```
- Uncontrolled components are those for which the form data is handled by the DOM itself.

#### Example 
```JavaScript
import React, {useRef} from 'react';
const RefInput = () => {
    const input = useRef();
    const showValue = () => {
        alert(`Input contains: ${input.current.value}`);
    };
    return (
        <div>
            <input type="text" ref={input} />
            <button onClick={showValue}>Alert the Value!</button>
        </div>
    );
};
```

[Read More](https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/)

## Hooks ⚓

### useState
 ```javascript
 import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const UseState01 = () => {
  const [count, setCount] = React.useState(5);
  const [error, setError] = React.useState(null);

  const increment = () => {
    setCount(count + 1);
    setError(null);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setError("Greater than 0 plz 😡");
    }
  };

  return (
    <div className="minutes ">
      <div className="minutes-icon">
        <FaMinus className="icons" onClick={decrement} />
        <div className="minutes-text">
          <h1>{count}</h1>
        </div>
        <h1>Minutes 😃</h1>
        <FaPlus className="icons" onClick={increment} />
      </div>
      <p className="error">
        {error && (
          <>
            <p>{error}</p>
            <button
              onClick={() => {
                setError(null);
              }}
            >
              Dismiss
            </button>
          </>
        )}
      </p>
      <LoginForm />
    </div>
  );
};

function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="login-form">
      <form className="form">
        <label>
          Username: 🙍‍♂️
          <input type="text" />
        </label>
        <label>
          Password: 🔒
          <input type={showPassword ? "text" : "password"} />
        </label>
        <label>
          <input
            type="checkbox"
            defaultChecked={showPassword}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            value="Submit"
          />
          Show Password 👁️
        </label>
        <button>Login</button>
      </form>
    </div>
  );
}

 ```
 
 ### useEffect
 
 “If the blogPostId prop changes, then download that blog post and
 display it”:
 ```javascript
 useEffect(() => {
    fetch(`/posts/${blogPostId}`).then((content) => setContent(content));
}, [blogPostId]);

 ```
  This one says, “If the username changes, then save it to localStorage”:
 ```javascript
 useEffect(() => {
    localStorage.setItem('username', username);
}, [username]);

 ```
   This one says, “As soon as the user enters the right passcode, then show the secret”:
 ```javascript
 useEffect(() => {
    if (passcode === '1234') {
        setShowSecret(true);
    }
}, [passcode]);
 ```
 Focusing an Input Automatically
 ```javascript
import React, {useEffect, useState, useRef} from 'react';
import ReactDOM from 'react-dom';
function App() {
    // Store a reference to the input's DOM node
    const inputRef = useRef();
    // Store the input's value in state
    const [value, setValue] = useState('');
    useEffect(
        () => {
            // This runs AFTER the first render,
            // so the ref is already set.
            console.log('render');
            inputRef.current.focus();
        },
        // The effect "depends on" inputRef
        [inputRef],
    );
    return (
        <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}
 ```
 ### Only Run on Mount and Unmount
 
The empty array says “this effect depends on nothing,” and so it will only run once, after the first render.
  ```javascript
useEffect(() => {
    console.log('mounted');
    return () => console.log('unmounting...');
}, []); // <-- add this empty array here
 ```
 
 ### Unmount and Cleanup
 
   ```javascript
useEffect(() => {
    // on mount, and every time the blogPostId
    // changes, set up a subscription
    subscribeToNewComments(blogPostId);
    // on unmount, and every time *before*
    // subscribing anew, unsubscribe from
    // the last blogPostId
    return () => unsubscribeFromComments(blogPostId);
}, [blogPostId]);
 ```
This is a nice clean way of keeping subscriptions in sync with a certain piece of data.

### Fetch Data With useEffect

```javascript
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
function Reddit() {
    // Initialize state to hold the posts
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // Fetch the data when the component mounts
        fetch('https://www.reddit.com/r/reactjs.json')
            .then((res) => res.json())
            .then((json) =>
                // Save the posts into state
                setPosts(json.data.children.map((c) => c.data)),
            );
    }); // <-- we didn't pass the 2nd arg. what will happen?
    // Render as usual
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}
ReactDOM.render(<Reddit />, document.querySelector('#root'));

```
 
 
 ## What to Put in State
 
 ### How do you decide what should go into state?
 
- User-entered input (values of text boxes and other form fields)
- Current or selected item (the current tab, the selected row)
- Data from the server (a list of products, the number of “likes” on a page)
- Open/closed state (modal open/closed, sidebar expanded/hidden)
 
## Adavance Hooks

- A “reducer” is a fancy word for a function that takes 2 values and returns 1 value.
- 

- useMemo is for memoizing variable values.
- useMemo does something similar. Let’s say you have computation heavy methods, and only want to run them when their parameters change, 
not every time the component updates. useMemo returns a memoized result, 
and executes the callback function only when parameters change.
- useReducer is for creating and using custom reducers.
- useRef is for defining refs to components in the DOM.

## Popular Custom Hooks ✳️

### FetchAPI custom hooks
```
```

## Rules of Hooks 📝
- Only call hooks at the top level of your function.
- Don’t put them in loops, conditionals, or
nested functions.
- Only call hooks from React function components.
- The names of custom hooks must start with “use”.

## Redux Terms 😃

### Action 🔨
```
An action is nothing more than a plain JavaScript object that bundles data together.
In Redux, actions can be dispatched from the user interface or from a middleware.

• Command actions
  - command action as an API call to the server.
• Event actions
  - An event is an action that notifies the system about the beginning,progress, or ending of a procedure.
• Document actions
- A document action will always result in a state change.
```

### Thinking in Actions 💭
```
1. Fetch a list of books from a remote server.
2. Show a loader until you get a response.
3. If the call was successful, hide the loader and put the books collection in the state.
4. If an error occurred, hide the loader and put a notification message in the state.
```
### Middleware 🚀
```
- The middleware does any necessary processing of the action and passes it to a reducer.
- middleware. Every action in the system passes through the middleware before hitting the reducer.

1. Core middleware : reusable functions, process “generic” actions such as API_REQUEST
2. Feature middleware : process feature-specific actions such as SELECT_BOOK
```
### Reducer
```
- reducers are pure functions that accept a document action and pass its payload
to the state.
```

### Blogs

[Typescript-React](https://fettblog.eu/typescript-react)

[React Typescript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)



### How do I correctly fetch data inside useEffect? What is []?

[/react-hooks-fetch-data](https://www.robinwieruch.de/react-hooks-fetch-data/)

[/usereducer-hook-examples](https://daveceddia.com/usereducer-hook-examples/)

[React Redux](https://css-tricks.com/learning-react-redux/)

[Redux YT](https://www.youtube.com/watch?v=jZTxPlUpe3o&ab_channel=SanjeevThiyagarajan)

[Chrome Debugger](https://www.youtube.com/watch?v=-q1z8BPFItw&ab_channel=youwebdev)

[Chrome Dev ](https://www.youtube.com/watch?v=oYvtsHu6GmY&ab_channel=ThatJSDude)




