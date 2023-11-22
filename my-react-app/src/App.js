import logo from './logo.svg';
import './App.css';
import Heading from  './Heading.js'
import Main from './Main.js'
import Sidebar from './Sidebar.js'

function Header(props){
  console.log(props)
  return <h1>Hello world, {props.name}, {props.color} </h1>;
}

function App() {
return (<div>
  <Heading firstName='Rohan' />
 <Heading firstName='Mohan' />
 <Header name="Rohan" color="purple"/>
  <Main greet="Hoody"/>
  <Sidebar greet="Howdy"/>
  </div>)

}


export default App;
