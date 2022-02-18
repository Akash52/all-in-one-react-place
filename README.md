# all-in-one-react-place

React Hooks 🔥😃

## Useful Resoursce 📗

    - [React Hooks](https://reactjs.org/docs/hooks-intro.html)

    UseEffect Application 😁
    - fetch
    - save it to localStorage/db
    - adjust the scroll position
    - focus on the input
    - useEffect(() => {}, [])
    - update the document title

    Eg:1

    ```JavaScript
    useEffect(() => {
        document.title = 'new title'
    }, [])
    
    ```
    Eg:2

  ```JavaScript
    const [text , setText] = useState('')

    useEffect(() => {
        fetchData()
    }, [text])

  const fetchData = async () => {
        const response = await fetch('https://api.github.com/users/facebook')
        const data = await response.json()
        setText(data.name)
}
```
