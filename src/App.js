import React ,{Component}from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import SideBar2 from './sidebar/sideBar2';
import Body from './body/Body'
import Home from './body/Home'
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom'
class  App extends Component{
  constructor(props){
    super(props)
  
    this.state = {
       boards:[]
    }
  }
  
  
  render(){
  return (
    <Router>
    <div className="App">
      <Header></Header>
    </div>
    </Router>
  );
}

}

export default App;