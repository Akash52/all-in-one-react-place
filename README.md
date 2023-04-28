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

## Basic Rental Application

```js

React Form

import { useState } from "react";

function RentalForm({ onSubmit, onCancel, rental = {} }) {
  const [newRental, setNewRental] = useState({
    property_type: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    rental_price: 0,
    available_date: "",
    is_furnished: false,
    square_feet: 0,
    bedrooms: 0,
    bathrooms: 0,
    pets_allowed: false,
    contact_name: "",
    contact_email: "",
    contact_phone: "",
    ...rental,
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setNewRental({ ...newRental, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newRental);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{rental.id ? "Update" : "Create"} Rental:</h2>
      <p>
        Property Type:
        <input
          type="text"
          name="property_type"
          value={newRental.property_type}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        Address:
        <input
          type="text"
          name="address"
          value={newRental.address}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        City:
        <input
          type="text"
          name="city"
          value={newRental.city}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        State:
        <input
          type="text"
          name="state"
          value={newRental.state}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        Zip Code:
        <input
          type="text"
          name="zip_code"
          value={newRental.zip_code}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        Rental Price:
        <input
          type="number"
          name="rental_price"
          value={newRental.rental_price}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        Available Date:
        <input
          type="date"
          name="available_date"
          value={newRental.available_date}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        Furnished:
        <input
          type="checkbox"
          name="is_furnished"
          checked={newRental.is_furnished}
          onChange={handleInputChange}
        />
      </p>
      <p>
        Square Feet:
        <input
          type="number"
          name="square_feet"
          value={newRental.square_feet}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        Bedrooms:
        <input
          type="number"
          name="bedrooms"
          value={newRental.bedrooms}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        Bathrooms:
        <input
          type="number"
          name="bathrooms"
          value={newRental.bathrooms}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        Pets Allowed:
        <input
          type="checkbox"
          name="pets_allowed"
          checked={newRental.pets_allowed}
          onChange={handleInputChange}
        />
      </p>
      <p>
        Contact Name:
        <input
          type="text"
          name="contact_name"
          value={newRental.contact_name}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        Contact Email:
        <input
          type="email"
          name="contact_email"
          value={newRental.contact_email}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        Contact Phone:
        <input
          type="tel"
          name="contact_phone"
          value={newRental.contact_phone}
          onChange={handleInputChange}
          required
        />
      </p>
      <button type="submit">{rental.id ? "Update" : "Create"} Rental</button>
      {onCancel && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default RentalForm;


Rental LIST

import { useState } from "react";

function RentalForm({ onSubmit, onCancel, rental = {} }) {
  const [newRental, setNewRental] = useState({
    property_type: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    rental_price: 0,
    available_date: "",
    is_furnished: false,
    square_feet: 0,
    bedrooms: 0,
    bathrooms: 0,
    pets_allowed: false,
    contact_name: "",
    contact_email: "",
    contact_phone: "",
    ...rental,
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setNewRental({ ...newRental, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newRental);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{rental.id ? "Update" : "Create"} Rental:</h2>
      <p>
        Property Type:
        <input
          type="text"
          name="property_type"
          value={newRental.property_type}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        Address:
        <input
          type="text"
          name="address"
          value={newRental.address}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        City:
        <input
          type="text"
          name="city"
          value={newRental.city}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        State:
        <input
          type="text"
          name="state"
          value={newRental.state}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        Zip Code:
        <input
          type="text"
          name="zip_code"
          value={newRental.zip_code}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        Rental Price:
        <input
          type="number"
          name="rental_price"
          value={newRental.rental_price}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        Available Date:
        <input
          type="date"
          name="available_date"
          value={newRental.available_date}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        Furnished:
        <input
          type="checkbox"
          name="is_furnished"
          checked={newRental.is_furnished}
          onChange={handleInputChange}
        />
      </p>
      <p>
        Square Feet:
        <input
          type="number"
          name="square_feet"
          value={newRental.square_feet}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        Bedrooms:
        <input
          type="number"
          name="bedrooms"
          value={newRental.bedrooms}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        Bathrooms:
        <input
          type="number"
          name="bathrooms"
          value={newRental.bathrooms}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        Pets Allowed:
        <input
          type="checkbox"
          name="pets_allowed"
          checked={newRental.pets_allowed}
          onChange={handleInputChange}
        />
      </p>
      <p>
        Contact Name:
        <input
          type="text"
          name="contact_name"
          value={newRental.contact_name}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        Contact Email:
        <input
          type="email"
          name="contact_email"
          value={newRental.contact_email}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        Contact Phone:
        <input
          type="tel"
          name="contact_phone"
          value={newRental.contact_phone}
          onChange={handleInputChange}
          required
        />
      </p>
      <button type="submit">{rental.id ? "Update" : "Create"} Rental</button>
      {onCancel && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default RentalForm;


What is a Progressive Web App?
A Progressive Web App is a web application that provides users with an app-like experience through modern web technologies. PWAs are designed to work on any device or platform that supports the web, including desktops, tablets, and smartphones. They can be installed on the user's device like a native app, accessed through the home screen or app drawer, and loaded quickly even when offline.

PWAs are built using a collection of web APIs, including Service Workers, Web App Manifest, and Push Notifications. These APIs allow developers to add features such as caching, offline support, app icons, splash screens, and push notifications to their web applications, giving users an app-like experience without the need to download a separate app from an app store.

```
Building a PWA in ReactJS
ReactJS is a popular frontend library used for building web applications. To add PWA features to our ReactJS app, we'll need to follow these steps:

* Create a new ReactJS app using create-react-app.
- Add a Service Worker to the app.
- Add a Web App Manifest to the app.
- Implement caching for static assets.
- Implement offline support using the cached assets.
- Add app icons and splash screens.
- Enable push notifications.
- Let's get started!


Manifest :

Let's go over each field in detail:

name: The name of the app. This will be displayed on the splash screen and in the app switcher.
short_name: A shorter version of the app name that may be used when there is limited space available, such as in the home screen icon label.
icons: An array of images to be used as icons for the app. Different sizes are provided for various devices and contexts.
start_url: The URL that should be loaded when the app is launched from the home screen or app switcher.
scope: The scope of the app, which defines the pages that are considered part of the app. This is used by the service worker.
display: Defines how the app should be displayed. Options include fullscreen, standalone, minimal-ui, and browser.
orientation: Defines the default orientation of the app. Options include any, natural, landscape, and portrait.
background_color: The background color of the app.
theme_color: The color used for the browser toolbar, status bar, task switcher, and other UI elements.

To make sure your PWA is supported on all devices, you should ensure that:

Your icons are available in various sizes to support different devices and contexts.
You've set a start_url that makes sense for your app and provides a good starting point for users.
Your scope is set correctly to ensure that all pages that should be part of the app are included.
Your display mode is set appropriately based on the type of app you're building and the user experience you're aiming for.
You've specified orientation to ensure that your app works in both portrait and landscape modes.



```
const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;

//install SW

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened Cache");
      return cache.addAll(urlsToCache);
    })
  );
});

//Listen for response
// fetch event
self.addEventListener("fetch", (evt) => {
  const { url } = evt.request;
  if (!(url.startsWith("http") || url.startsWith("https"))) return;

  evt.respondWith(
    caches.match(evt.request).then(
      (cacheRes) =>
        cacheRes ||
        fetch(evt.request)
          .then((fetchRes) => {
            if (!fetchRes || fetchRes.status !== 200) return fetchRes;
            const cloneRes = fetchRes.clone();
            caches.open(dynamicNames).then((cache) => {
              cache.put(evt.request.url, cloneRes);
              limitCacheSize(dynamicNames, 75);
            });
            return fetchRes;
          })
          .catch(() => caches.match("/fallback"))
    )
  );
});

// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

//Activate teh SW
self.addEventListener("activate", (event) => {
  const cachesWhitelist = [];
  cachesWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheNames) => {
          if (!cachesWhitelist.includes(cacheNames)) {
            return caches.delete(cacheNames);
          }
        })
      )
    )
  );
});

```


```vue
<template>
  <form
    @submit.prevent="handleSubmit"
    class="px-4 py-6 bg-gray-100 rounded-lg shadow-md dark:bg-gray-800"
  >
    <h2 class="text-xl font-bold mb-4 text-gray-700 dark:text-white">
      {{ formTitle }}
    </h2>
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8"
    >
      <div class="flex flex-col">
        <label
          htmlFor="property_type"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Property Type<span class="text-red-500">*</span>:
        </label>
        <input
          type="text"
          id="property_type"
          v-model="rental.property_type"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="address"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Address<span class="text-red-500">*</span>:
        </label>
        <input
          type="text"
          id="address"
          v-model="rental.address"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="city"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          City<span class="text-red-500">*</span>:
        </label>
        <input
          type="text"
          id="city"
          v-model="rental.city"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="state"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          State<span class="text-red-500">*</span>:
        </label>
        <input
          type="text"
          id="state"
          v-model="rental.state"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="zip_code"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Zip Code<span class="text-red-500">*</span>:
        </label>
        <input
          type="text"
          id="zip_code"
          v-model="rental.zip_code"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="rental_price"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Rental Price<span class="text-red-500">*</span>:
        </label>
        <input
          type="number"
          id="rental_price"
          v-model="rental.rental_price"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="available_date"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Available Date<span class="text-red-500"></span>:
        </label>
        <input
          type="date"
          id="available_date"
          v-model="rental.available_date"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="square_feet"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Image URL<span class="text-red-500"></span>:
        </label>
        <input
          type="url"
          id="image"
          v-model="rental.image"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="square_feet"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Square Feet<span class="text-red-500"></span>:
        </label>
        <input
          type="number"
          id="square_feet"
          v-model="rental.square_feet"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="bedrooms"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Bedrooms<span class="text-red-500"></span>:
        </label>
        <input
          type="number"
          id="bedrooms"
          v-model="rental.bedrooms"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="bathrooms"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Bathrooms<span class="text-red-500"></span>:
        </label>
        <input
          type="number"
          id="bathrooms"
          v-model="rental.bathrooms"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="contact_name"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Contact Name<span class="text-red-500"></span>:
        </label>
        <input
          type="text"
          id="contact_name"
          v-model="rental.contact_name"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="contact_email"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Contact Email<span class="text-red-500"></span>:
        </label>
        <input
          type="email"
          id="contact_email"
          v-model="rental.contact_email"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="contact_phone"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Contact Phone<span class="text-red-500"></span>:
        </label>
        <input
          type="tel"
          id="contact_phone"
          v-model="rental.contact_phone"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex">
        <div>
          <label
            htmlFor="is_furnished"
            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Furnished:
            <input
              type="checkbox"
              id="is_furnished"
              v-model="rental.is_furnished"
              :checked="rental.is_furnished"
              class="rounded-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 ml-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
          </label>
        </div>
        <div class="ml-4">
          <label
            htmlFor="pets_allowed"
            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Pets Allowed:
            <input
              type="checkbox"
              id="pets_allowed"
              v-model="rental.pets_allowed"
              :checked="rental.pets_allowed"
              class="rounded-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 ml-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
          </label>
        </div>
      </div>
    </div>
    <div class="flex justify-end mt-6">
      <button
        type="button"
        class="inline-flex justify-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:hover:bg-gray-600 dark:focus:ring-indigo-400 dark:focus:ring-offset-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
        @click="cancel"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:hover:bg-indigo-600 dark:focus:ring-indigo-400 dark:focus:ring-offset-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
      >
        {{ submitButtonTitle }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    rental: {
      type: Object,
      required: true,
    },
    formTitle: {
      type: String,
      required: true,
    },
    submitButtonTitle: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", this.rental);
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style scoped>
/* add your styles here */
</style>

```
```vue
<template>
  <div class="bg-gray-100 dark:bg-gray-900 min-h-screen">
    <div class="px-4 py-6 bg-white dark:bg-gray-800 shadow-md sm:px-6 lg:px-8">
      <div class="container mx-auto flex justify-between flex-wrap mb-4">
        <h1 class="text-2xl font-bold dark:text-gray-300 ml-2">
          Rentals Application
        </h1>
        <button
          @click="selectedRental = {}"
          class="bg-green-500 hover:bg-green-600 text-white inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Create Rental
        </button>
      </div>

      <div className="relative z-30" v-if="selectedRental !== null">
        <div
          className="py-4 px-6 container mx-auto absolute inset-0 z-20 bg-opacity-75"
        >
          <RentalForm
            :rental="selectedRental"
            :formTitle="selectedRental.id ? 'Edit Rental' : 'Create Rental'"
            :submitButtonTitle="selectedRental.id ? 'Update' : 'Create'"
            @submit="handleCreateOrUpdateRental"
            @cancel="selectedRental = null"
          />
        </div>
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          @click="selectedRental = null"
        />
      </div>

      <div v-if="isLoading">
        <div
          role="status"
          class="flex justify-center items-center min-h-screen"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      <div v-else>
        <div
          className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 container mx-auto
      dark:bg-gray-800 dark:text-gray-200
      "
        >
          <div
            v-for="rental in rentals"
            :key="rental.id"
            class="border rounded-lg overflow-hidden shadow-md"
          >
            <img
              :src="rental.image"
              alt="Rental Property"
              class="w-full h-40 object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-medium">{{ rental.property_type }}</h3>
              <p
                class="text-gray-600 mb-2 font-normal text-base dark:text-gray-400"
              >
                {{ rental.address }}, {{ rental.city }}, {{ rental.state }}
                {{ rental.zip_code }}
              </p>
              <p
                class="text-green-500 font-bold text-lg mb-2 dark:text-green-400"
              >
                ${{ rental.rental_price }}/month
              </p>
              <p
                class="text-gray-600 font-medium text-base pb-1 dark:text-gray-400"
              >
                Available Date:
                <span class="text-gray-500 font-normal ml-1 dark:text-gray-300">
                  {{ rental.available_date }}
                </span>
              </p>
              <p class="text-base font-medium pb-1 dark:text-gray-400">
                <span
                  :style="{
                    textDecoration: rental.is_furnished
                      ? 'none'
                      : 'line-through',
                  }"
                >
                  {{ rental.is_furnished ? "Furnished" : "Not Furnished" }}
                </span>
              </p>
              <p
                class="pb-1 text-base text-gray-600 font-medium dark:text-gray-400"
              >
                Square Feet:
                <span class="text-gray-500 font-normal ml-1 dark:text-gray-300">
                  {{ rental.square_feet }}
                </span>
              </p>
              <p
                class="pb-1 text-base text-gray-600 font-medium dark:text-gray-400"
              >
                Bedrooms:
                <span class="text-gray-500 font-normal ml-1 dark:text-gray-300">
                  {{ rental.bedrooms }}
                </span>
              </p>
              <p
                class="pb-1 text-base text-gray-600 font-medium dark:text-gray-400"
              >
                Bathrooms:
                <span class="text-gray-500 font-normal ml-1 dark:text-gray-300">
                  {{ rental.bathrooms }}
                </span>
              </p>
              <p
                class="pb-1 text-base dark:text-gray-400"
                :style="{
                  textDecoration: rental.pets_allowed ? 'none' : 'line-through',
                }"
              >
                {{ rental.pets_allowed ? "Pets Allowed" : "No Pets Allowed" }}
              </p>

              <div class="flex justify-between items-center mt-4">
                <button @click="selectedRental = rental">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-blue-600 dark:text-blue-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </button>
                <button @click="handleDeleteRental(rental.id)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6 text-red-500 hover:text-red-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive, onMounted, watch, computed } from "vue";
import RentalForm from "./RentalForm.vue";
import {
  getRentals,
  createRental,
  updateRental,
  deleteRental,
} from "../services/ApiService.js";
import Search from "./Search.vue";

export default {
  components: {
    RentalForm,
    Search,
  },

  setup() {
    const rentals = ref([]);
    const selectedRental = ref(null);
    const isLoading = ref(true);

    const fetchRentals = async () => {
      try {
        const data = await getRentals();
        rentals.value = data;
        isLoading.value = false;
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      fetchRentals();
    });

    const handleCreateOrUpdateRental = async (rental) => {
      console.log("handleCreateOrUpdateRental", rental);
      if (rental.id) {
        await handleUpdateRental(rental);
      } else {
        await handleCreateRental(rental);
      }
    };

    const handleCreateRental = async (rental) => {
      console.log("create rental", rental);
      try {
        const newRental = await createRental(rental);

        if (newRental) {
          rentals.value.push(newRental);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const handleUpdateRental = async (rental) => {
      console.log("update rental", rental.id);
      try {
        await updateRental(rental);
        const index = rentals.value.findIndex((r) => r.id === rental.id);
        if (index !== -1) {
          rentals.value.splice(index, 1, rental);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const handleDeleteRental = async (id) => {
      try {
        await deleteRental(id);
        const index = rentals.value.findIndex((r) => r.id === id);
        if (index !== -1) {
          rentals.value.splice(index, 1);
        }
      } catch (error) {
        console.error(error);
      }
    };

    return {
      rentals,
      selectedRental,
      isLoading,
      handleCreateOrUpdateRental,
      handleDeleteRental,
    };
  },
};
</script>

```






