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

Simfrom Mock Interview :

#### Q1 : Way of creating component in React
- Two way one is class based & Function based
##### Inner Question
- How to create class based component ?

![alt](https://cdn-media-1.freecodecamp.org/images/1*N2KU7pOcwZwKeOi3B-YBLQ.png) </br>

[read more](https://medium.com/swlh/class-based-components-in-react-440eb8ed85a0)

### Q2 : What are Hooks?

“Hooks are a new addition to React in version 16.8 that allows you use state and other React features, like lifecycle methods, without writing a class.”

[reade more](https://blog.bitsrc.io/why-we-switched-to-react-hooks-48798c42c7f)



### Q3 : Why we need hooks in react js 
- Hooks are functions that let you “hook into” React state and lifecycle features from function components. 

[react more](https://blog.bitsrc.io/6-reasons-to-use-react-hooks-instead-of-classes-7e3ee745fe04)

### Q4 : What are the different lifecycle methods in react

![alt](https://res.cloudinary.com/practicaldev/image/fetch/s--RrkCw0QH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/di74f0jivvxwhelmqhof.png)

#### Inner Question
- how these method implement in functional component

##### You can take advantage of the useEffect hook to achieve the same results as with the componentDidMount, componentDidUpdate and componentWillUnmount methods.

[read more class based component](https://dev.to/aditya278/react-components-lifecycle-methods-wth-are-they-2lh5)
[react more useEffect](https://tsh.io/blog/react-component-lifecycle-methods-vs-hooks/)

### Q5 : what is the use of useref in react 
- The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly

[read more](https://medium.com/trabe/react-useref-hook-b6c9d39e2022)
[](https://reactjs.org/docs/hooks-reference.html#useref)

### Q6 : Code splitting react (have you implimented code splitting in your code) 

![alt](https://res.cloudinary.com/practicaldev/image/fetch/s--17hGD7P6--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/rk2b95me6wfw9126ccr0.JPG)

[read more](https://blog.logrocket.com/code-splitting-in-react-an-overview/)

### Q7 : How does browser understand JSX?.

![alt](https://miro.medium.com/max/1024/1*cyPNglQ6rgC14YmllTwhDQ.png)

- [read more](https://alligator.io/react/jsx-introduction/#:~:text=JSX%20is%20language%20extension%20for,React%20developers%20really%20enjoy%20it.)
- [read more](https://www.telerik.com/blogs/how-jsx-react-works-under-hood)
- [jsx](https://kentcdodds.com/blog/what-is-jsx)

### Q8 : usereducer hook in react js


[usereducer hook](https://dmitripavlutin.com/react-usereducer/)
[read more](https://blog.logrocket.com/react-usereducer-hook-ultimate-guide/)

### Q9 : If I want pass ref in custom component ?

- React forwardRef is a method that allows parent components pass down (i.e., “forward”) refs to their children. Using forwardRef in React gives the child component a reference to a DOM element created by its parent component. This then allows the child to read and modify that element anywhere it is being used.

[read more](https://blog.logrocket.com/cleaning-up-the-dom-with-forwardref-in-react/)

### Q10: proptypes

[proptypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

### Q11: have you perform data fetching in react ?

[data fetching](https://blog.bitsrc.io/things-you-should-know-when-fetching-data-for-react-components-39d61602feda)

### Q12 : have you encountered infinite render (useEffect)

[infinite-loop-inside-useeffect](https://medium.com/@andrewmyint/infinite-loop-inside-useeffect-react-hooks-6748de62871)
[useeffect-infinite-loop-patterns](https://javascript.plainenglish.io/5-useeffect-infinite-loop-patterns-2dc9d45a253f)

### Q13 : Array Methods in JavaScript

![alt](https://www.tutsmake.com/wp-content/uploads/2019/03/JavaScript-Array-Methods.jpeg)

-  all methods with examples

### Q14 : HOC (Higher Order Component in React)

[higher-order-components](https://flexiple.com/react/introduction-to-higher-order-components-in-react-by-example/)

### Q15 : React hooks rules

- Only call hooks at the top level of your function.
- Don’t put them in loops, conditionals, or
nested functions.
- Only call hooks from React function components.
- The names of custom hooks must start with “use”.

### Q16 : difference between controlled and uncontrolled components or inputs

[controlled-vs-uncontrolled](https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/)

### Q17 : context API (imp 😄)

[context api](https://dmitripavlutin.com/react-context-and-usecontext/)

### Q18 : Javascript: call(), apply() and bind()

[Javascript: call(), apply() and bind()](https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb)

### [https://reactjs.org/](https://reactjs.org/)
### [https://beta.reactjs.org/](https://beta.reactjs.org/)

## JSX Is Compiled to JavaScript

- The JSX elements you write are actually compiled down to JavaScript by a tool called Babel.
- Babel is a compiler that transforms code into valid ES5 JavaScript that all browsers can understand, and it’s
bundled in with projects created by Create React App.

```js
// This JSX:
  function HelloWorld() {
   return (<Hello/> <World/>);
   }
```
```js
// Becomes this JS:
   function HelloWorld() {
    return (
     React.createElement(Hello, null) React.createElement(World, null)
     );
   }
 ```
 ### (Note) A component function must return a single element.
 
 ## “If” in JSX
 
 #### “How do I write a conditional if I can’t use ‘if’?” There
 
 ```js
      function ValidIndicator() {
        const isValid = true;
        return <span>{isValid ? 'valid' : 'not valid'}</span>;
      }
 ```
 
 ### are a few things you can do inside JSX expressions:
 
• Math, concatenation: {7 + 5} or {'Your' + 'Name'}
• Function calls: {this.getFullName(person)}
• Ternary (?) operator: {name === 'Dave' ? 'me' : 'not me'}
• Boolean expressions: {isEnabled && 'enabled'}

### Here are some things you cannot do:

• Define new variables with let, const, and var
• Use if, for, while, etc.
• Define functions with function

## How to Write PropTypes

```js
import PropTypes from 'prop-types';
      function Comment({ author, message, likes }) {
        return (
          <div>
            <div className='author'>{author}</div>
            <div className='message'>{message}</div>
            <div className='likes'>{likes > 0 ? likes : 'No'} likes</div>
          </div>
        );
      }
      Comment.propTypes = {
        message: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        likes: PropTypes.number,
      };
```
- notice that PropTypes must be explicitly imported from the ‘prop-types’ package.

### Cleaner Syntax for Class Components

```js
class CountingParent extends React.Component {
        // initialize state with a property initializer
        // you can access this.props if needed
        state = {
          actionCount: 0,
        };
        // writing the handler as an arrow function
        // means it will retain the proper value of
        // `this`, so we can avoid having to bind it
        handleAction = (action) => {
          console.log('Child says', action);
          // Replace actionCount with an incremented value
          this.setState({
            actionCount: this.state.actionCount + 1,
          });
        };
        render() {
          return (
            <div>
              <Child onAction={this.handleAction} />
              <p>Clicked {this.state.actionCount} times</p>
            </div>
          );
        }
      }
```





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

[writing-your-own-custom-hooks](https://blog.bitsrc.io/writing-your-own-custom-hooks-4fbcf77e112e)

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

#### [the-most-failed-javascript-interview-questions](https://intspirit.medium.com/the-most-failed-javascript-interview-questions-849664e5bee)


## Snooker table booking Application
### PINIA STORE
```js
import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'snooker-store',
  state: () => ({
    tables: [
      { id: 1, name: 'Table 1', isAvailable: true },
      { id: 2, name: 'Table 2', isAvailable: true },
      { id: 3, name: 'Table 3', isAvailable: true },
      { id: 4, name: 'Table 4', isAvailable: true },
      { id: 5, name: 'Table 5', isAvailable: true },
      { id: 6, name: 'Table 6', isAvailable: true },
    ],
    bookings: [],
  }),
  getters: {
    availableTables: state => state.tables.filter(table => table.isAvailable),
    bookedTables: state => state.tables.filter(table => !table.isAvailable),
    getTableById: state => id => state.tables.find(table => table.id === id),
  },
  actions: {
    bookTable(tableId, name, phone, date, startTime, endTime) {
      const table = this.getTableById(tableId);
      if (!table.isAvailable) {
        throw new Error('Table is already booked');
      }
      const booking = { id: Date.now(), tableId, name, phone, date, startTime, endTime };
      this.tables.splice(this.tables.indexOf(table), 1, { ...table, isAvailable: false });
      this.bookings.push(booking);
    },
    cancelBooking(id) {
      const booking = this.bookings.find(booking => booking.id === id);
      const table = this.getTableById(booking.tableId);
      this.tables.splice(this.tables.indexOf(table), 1, { ...table, isAvailable: true });
      this.bookings.splice(this.bookings.indexOf(booking), 1);
    },
  },
});

```

#### Table List
```vue
<template>
  <div class="bg-gray-100 p-6">
    <h2 class="text-2xl font-bold mb-4">Tables</h2>
    <h3 class="text-lg font-semibold mb-2">Available Tables</h3>
    <ul class="divide-y divide-gray-300">
      <li v-for="table in availableTables" :key="table.id" class="flex justify-between py-2">
        <span class="text-lg">{{ table.name }}</span>
        <button class="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded" @click="bookTable(table.id)">Book Table</button>
      </li>
    </ul>
    <h3 class="text-lg font-semibold my-4">Booked Tables</h3>
    <ul class="divide-y divide-gray-300">
      <li v-for="table in bookedTables" :key="table.id" class="flex justify-between py-2">
        <span class="text-lg">{{ table.name }}</span>
        <button class="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded" @click="cancelBooking(table.id)">Cancel Booking</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from '@/store';

export default {
  setup() {
    const store = useStore();

    return {
      availableTables: store.availableTables,
      bookedTables: store.bookedTables,
      bookTable: store.bookTable,
      cancelBooking: store.cancelBooking,
    };
  },
};
</script>

```

#### booking form
```vue
<template>
  <form @submit.prevent="submitForm" class="max-w-sm mx-auto mt-10">
    <h2 class="text-2xl font-bold mb-4">Book a Table</h2>
    <div class="mb-4">
      <label for="name" class="block font-medium text-gray-700 mb-2">Name:</label>
      <input id="name" v-model="name" type="text" required class="form-input rounded-md shadow-sm w-full"/>
    </div>
    <div class="mb-4">
      <label for="phone" class="block font-medium text-gray-700 mb-2">Phone:</label>
      <input id="phone" v-model="phone" type="tel" required class="form-input rounded-md shadow-sm w-full"/>
    </div>
    <div class="mb-4">
      <label for="date" class="block font-medium text-gray-700 mb-2">Date:</label>
      <input id="date" v-model="date" type="date" required class="form-input rounded-md shadow-sm w-full"/>
    </div>
    <div class="mb-4">
      <label for="startTime" class="block font-medium text-gray-700 mb-2">Start Time:</label>
      <input id="startTime" v-model="startTime" type="time" required class="form-input rounded-md shadow-sm w-full"/>
    </div>
    <div class="mb-4">
      <label for="endTime" class="block font-medium text-gray-700 mb-2">End Time:</label>
      <input id="endTime" v-model="endTime" type="time" required class="form-input rounded-md shadow-sm w-full"/>
    </div>
    <div class="mb-4">
      <label for="table" class="block font-medium text-gray-700 mb-2">Table:</label>
      <select id="table" v-model="tableId" required class="form-select rounded-md shadow-sm w-full">
        <option disabled value="">Select a table</option>
        <option v-for="table in availableTables" :key="table.id" :value="table.id">{{ table.name }}</option>
      </select>
    </div>
    <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Book Table</button>
  </form>
</template>

<script>
import { useStore } from '@/store';
import { ref, computed } from 'vue';

export default {
  setup() {
    const store = useStore();

    const name = ref('');
    const phone = ref('');
    const date = ref('');
    const startTime = ref('');
    const endTime = ref('');
    const tableId = ref('');

    const availableTables = computed(() => store.availableTables);

    const submitForm = () => {
      const booking = {
        name: name.value,
        phone: phone.value,
        date: date.value,
        startTime: startTime.value,
        endTime: endTime.value,
        tableId: tableId.value,
      };
      store.bookTable(booking);
      clearForm();
    };

    const clearForm = () => {
      name.value = '';
      phone.value = '';
      date.value = '';
      startTime.value = '';
      endTime.value = '';
      tableId.value = '';
    };

    return {
      name,
      phone,
      date,
      startTime,
      endTime,
      tableId,
      availableTables,
      submitForm
}
</script>
```
#### Booking Details
```vue
<template>
  <div class="max-w-lg mx-auto bg-white rounded-md shadow-md p-6">
    <h2 class="text-xl font-medium mb-4">Booking Details</h2>
    <p class="mb-2"><strong>Name:</strong> {{ booking.name }}</p>
    <p class="mb-2"><strong>Phone:</strong> {{ booking.phone }}</p>
    <p class="mb-2"><strong>Date:</strong> {{ booking.date }}</p>
    <p class="mb-2"><strong>Start Time:</strong> {{ booking.startTime }}</p>
    <p class="mb-2"><strong>End Time:</strong> {{ booking.endTime }}</p>
    <p class="mb-4"><strong>Table:</strong> {{ tableName }}</p>
    <button 
      class="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md"
      @click="cancelBooking"
    >
      Cancel Booking
    </button>
  </div>
</template>

<script>
import { useStore } from '@/store';

export default {
  props: {
    booking: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const tableName = computed(() => {
      const table = store.getTableById(props.booking.tableId);
      return table ? table.name : 'Unknown Table';
    });

    const cancelBooking = () => {
      store.cancelBooking(props.booking.id);
    };

    return {
      tableName,
      cancelBooking,
    };
  },
};
</script>

<style scoped>
  /* Add any custom CSS styles here */
</style>

```
```
const fieldSets = [
  { name: "commonData", fieldIds: [1, 2] },
  { name: "clientData", fieldIds: [3, 4, 5, 6] },
  { name: "teamData", fieldIds: [7, 8, 9] },
  { name: "practiceData", fieldIds: [10, 11, 12, 13, 14] },
  {
    name: "solutionData",
    fieldIds: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
  },
  { name: "testimonialData", fieldIds: [27, 28, 29] },
];

const filterByFieldIds = (fieldIds) =>
  project_values.filter((item) => fieldIds.includes(item.case_study_field_id));

const fieldData = {};

fieldSets.forEach((fieldSet) => {
  fieldData[fieldSet.name] = filterByFieldIds(fieldSet.fieldIds);
});
```

```
What is a Progressive Web App (PWA)?
You could start the blog post by explaining what a PWA is and why it is important for modern web development. You could discuss how PWAs combine the best features of native mobile apps and traditional websites, providing a fast, reliable, and engaging experience for users.


Benefits of PWAs
Next, you could discuss the benefits of PWAs. This could include things like:

Better performance: PWAs are designed to be fast and responsive, with quick load times and smooth animations.
Offline functionality: PWAs can work even when the user is offline, thanks to features like caching and service workers.
App-like experience: PWAs can be installed on the user's home screen and accessed with a single tap, just like a native app.
Improved engagement: PWAs can send push notifications and offer other interactive features that keep users coming back.

Nuxt 3 as a PWA Framework
After introducing PWAs, you could then introduce Nuxt 3 as a powerful framework for building them. You could highlight some of Nuxt 3's key features, such as:
Automatic code splitting and server-side rendering for fast load times and SEO.
Built-in support for progressive enhancement and accessibility.
Easy integration with popular frontend libraries and tools, such as Vue.js and Tailwind CSS.
Seamless PWA support, including automatic generation of the manifest file and service worker.

Getting Started with Nuxt 3 and PWA Development
Finally, you could wrap up the blog post by providing some practical tips for getting started with Nuxt 3 and PWA development. This could include things like:
Installing and setting up Nuxt 3
Configuring the manifest file and service worker
Building out the core features of your PWA, such as caching, push notifications, and offline functionality
Testing and deploying your PWA to production


---- Featuers 

Web App Manifest
Nuxt 3 provides built-in support for generating a Web App Manifest file. This file describes the metadata for your PWA, such as the name, icons, and colors. The Web App Manifest file is used by browsers to install the PWA on the user's home screen and to display it in the browser's app switcher.

Service Worker
Nuxt 3 also includes support for service workers. Service workers are scripts that run in the background and can intercept network requests, cache resources, and provide offline functionality. With Nuxt 3, you can configure and register a service worker for your PWA with just a few lines of code.

Offline Caching
Nuxt 3 includes built-in support for offline caching. This means that you can specify which resources to cache when the user is online, and then serve those resources from the cache when the user is offline. This makes your PWA feel more like a native app, even when the user doesn't have an internet connection.

Push Notifications
Nuxt 3 supports push notifications, which allow you to send messages to the user's device even when your PWA isn't open. This can be a powerful way to engage with users and keep them coming back to your PWA.

Add to Home Screen
Nuxt 3 includes support for prompting the user to add your PWA to their home screen. This makes it easy for users to access your PWA with a single tap, just like a native app.

Background Sync
Nuxt 3 also supports background sync, which allows your PWA to continue running tasks even when the user isn't actively using it. This can be useful for tasks like syncing data with a server, even when the user's device is offline.


```



