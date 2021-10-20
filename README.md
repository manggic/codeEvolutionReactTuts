React shortcut snippet

1. rfce - react function component
2. rce - react class component
3. rconst - class constructor

## 1. To create react App

```
npx create-react-app <app-name>
```

## 2. Component Type

```
function Welcome({ name, age, heroName }){
return <h1>Hello, {name}</h1>
}
```

```
class Welcome extends React.Component{

// A special function that will get called whenever a new
// component is created
// initializing state
constructor() {
super();
this.state = {
message : 'welcome vistor',
name: 'manish',
age: 23
}
}

// Invoked immediately after a comp and all its children comp
// have been rendered to the DOM
componentDidMount(){
}

    //  Called after the render is finished in the re-render cycles
    componentDidUpdate(prevProps, prevState, snapshot){

}

//Method is invoked immediately before a comp
// is unmounted and destroyed
// do not called setState method
componentWillUnmount(){
}

// When there is an error either during Rendering
// in a lifeCycle method or in constructor of any child comp
componentDidCatch() {}

// only required method inside class
// Read props & state and return JSX
// Do not change state or interact with DOM or make ajax calls.
render(){
let {name} = this.props
const {message, name, age} = this.state
return (

<div>
<h1>Hello, {name}</h1>
<h1>this.state.message</h1>
<button onChange={()=> this.changeMessage()} >Subscribe</button>
</div>
)
 }
}
```

## 3. Import export

```
export default App
import App from './App.js' OR import <Any-name> from './App.js'

export const App =()=> <h1>Hello, {props.name}</h1>
import { App } from './App.js'
```

## 4. props

- props is immutable : children cannot change the value of the parent state

In FC

```
 let {name, age } = props
```

In CC

```
 let {name, age } = this.props
```

| props                             | state                                   |
| --------------------------------- | --------------------------------------- |
| props get passed to the component | state is managed within the component   |
| functions parameters              | Variables declared in the function body |
| props are immutable               | state can be changed                    |
| props - FC                        | useState hook - FC                      |
| this.props - CC                   | this.state - CC                         |

## 5. setState

call to setState is async.

Always make use of setState, never modify the state directly.
Code has to be executed after the state has been updated?Place that Code
in the callBack function which is the 2 args to the setState method.

```
this.setState( (prevState)=> {
return {
...prevState,
count : prevState.count+1
}
} , ()=> { console.log('callback' , this.state.count) } )
```

## 6. Event Binding ( use approach 3/4 )

In class Inside the function u may get the error this is undefined

(TypeError: Cannot read property 'setState' of undefined)

```
1.  <button onClick={this.clickHandler.bind(this)}  >click</button> // dont use
2.  <button onClick={()=> this.clickHandler()} >click</button> //arrow function inside render
3.  <button onClick={this.clickHandler}  ></button>
    constructor() {
    super();
    this.state = {
    count: 0,
    name: "manish",
    };
    this.clickHandler = this.clickHandler.bind(this)
    }

4.  clickHandler =()=> {}
    <button onClick={this.clickHandler}  ></button>
```

\*\* Method as props

## 7. Contional Rendering

1.  if- else
2.  ternary operator

```
render(){
    return (
    this.state.isLoggedIn? ():()
    )
    }
```

3.  short-circuit operator

```
render(){
    return this.state.isLoggedIn && <div>Logged In</div>
    }
```

## 8. List and Key

```

const names = ['ravi', 'santosh','mahesh']

names.map((name, index)=> <h2 key={index}>{name}</h2>)

```

when to use index as key?

1. The items in your list do not have a unique Id.
2. The list is a static list and will not change.
3. The list will never be reordered or filtered.

## 9. Styling

Inline

```

const heading = {
fontSize: '72px',
color: 'blue'
}

<h1 style={heading}>inline styling</h1>
```

## 10. Pure Component only for class based

if state changes is different from the previous state, then only re-render take place in PureComponent
if there is no diff, the component is not re-rendered: performance boost

React.memo(MemoComp): same as pure comp in function component

## 11. ref

It's return the reference of element in the DOM tree.

## 12. forwarding ref

It is useful when we want to pass ref to the child component

## 13. Portal

when we want to use Another DOM alike root in index.html
and render component in it using React.createPortal()

## 14. Error Boundary

class component that implement either one or both lifecycle method
getDerivedStateFromError or componentDidCatch become a error boundary.

The static method getDerivedStateFromError method is used to render
a fallback UI after an error is thrown and the componentDidCatch method
is used to log the error information

## 15. higher order component

Need to share a common functionality between component
Take component as args and return new component

## 16. Render Props

Technique for sharing code between React Component
using a props whose value is a function

## 17. Context

It provides a way to pass data through the component tree without having to pass props
down manually at every level.

1. Create The context
2. Provide a context value
3. Consume a context value

## 18. HTTP

- axios is used for this type of request to API
- method used

1. get

```
axios
      .get(URL)
      .then((res) => {
        console.log("res", res);

        this.setState((prev) => {
          return {
            ...prev,
            posts: res.data,
          };
        });
      })
      .catch((err) => {
        console.log("err", err);
        this.setState((prev) => {
          return {
            ...prev,
            errorMsg: "Error fetching the data",
          };
        });
      });

```

2. post

```
   axios
   .post(URL, this.state)
   .then((res) => {
   console.log("res", res);
   })
   .catch((err) => {
   console.log("err", err);
   });
```

# Hooks

## 1. What are Hooks?

Hooks are a new feature addition in React version 16.8 which allow you to
use React feature without having to write a class

- State of a component
- Hooks don't work inside class

## 2. Rules of Hook

- Only call Hooks at the top Level
  Don't call hooks inside loop, conditions, or nested functions
- Only call Hooks from the React functions
  Call them from within React functional components and not just any
  regular javascript function

## 3. useState

The useState hook lets you add state in functional Components
This function accept an argu which is initial value of state property and return current value
of state property and a method for updating the state property.

```
const [count, setCount] = useState(0);
```

- when updating a state based on prev state use

```
setCount((prev) => prev + 1)}
```
