React shortcut snippet

1. rfce - react function component
2. rce - react class component
3. rconst - class constructor

To create react App

1. npx create-react-app <app-name>

Component Type 2) function Welcome({ name, age, heroName }){
return <h1>Hello, {name}</h1>
}

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

Import export 3) export default App  
 import App from './App.js' OR import <Any-name> from './App.js'

export const App =()=> <h1>Hello, {props.name}</h1>
import { App } from './App.js'

props 4) props is immutable : children cannot change the value of the parent state
In FC let {name, age } = props
In CC let {name, age } = this.props

         props                                                       state

1. props get passed to the component state is managed within the component
2. functions parameters Variables declared in the function body
3. props are immutable state can be changed
4. props - FC useState hook - FC  
   this.props - CC this.state - CC

setState 5) call to setState is async.
Always make use of setState, never modify the state directly.
Code has to be executed after the state has been updated?Place that Code
in the callBack function which is the 2 args to the setState method.

this.setState( (prevState)=> {
return {
...prevState,
count : prevState.count+1
}
} , ()=> { console.log('callback' , this.state.count) } )

Event Binding ( use approach 3/4 )
6)In class Inside the function u may get the error this is undefined  
 (TypeError: Cannot read property 'setState' of undefined)

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

\*\* Method as props

7)Contional Rendering

1.  if- else
2.  ternary operator
    render(){
    return (
    this.state.isLoggedIn? ():()
    )
    }
3.  short-circuit operator
    render(){
    return this.state.isLoggedIn && <div>Logged In</div>
    }

List and Key  
8) const names = ['ravi', 'santosh','mahesh']  
 names.map((name, index)=> <h2 key={index}>{name}</h2>)

when to use index as key?

1. The items in your list do not have a unique Id.
2. The list is a static list and will not change.
3. The list will never be reordered or filtered.

Styling 9) Inline

const heading = {
fontSize: '72px',
color: 'blue'
}

  <h1 style={heading}>inline styling</h1>

10. Pure Component only for class based

if state changes is different from the previous state, then only re-render take place in PureComponent
if there is no diff, the component is not re-rendered: performance boost

React.memo(MemoComp): same as pure comp in function component

11. ref : It's return the reference of element in the DOM tree.

12. forwarding ref : It is useful when we want to pass ref to the child component

13. Portal : when we want to use Another DOM alike root in index.html
    and render component in it using React.createPortal()

14. Error Boundary
    class component that implement either one or both lifecycle method
    getDerivedStateFromError or componentDidCatch become a error boundary.

The static method getDerivedStateFromError method is used to render
a fallback UI after an error is thrown and the componentDidCatch method
is used to log the error information

15. higher order component
    Need to share a common functionality between component
    Take component as args and return new component

16. Render Props
    Technique for sharing code between React Component
    using a props whose value is a function

17.
