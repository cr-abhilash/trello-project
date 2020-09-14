import React ,{Component}from 'react';
import './App.css';
import Header from './Header/Header';
import Body from './body/Body'
import Home from './body/Home'
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom'
import SideBar2 from './sidebar/sideBar2';

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
      <div className="content">
       <SideBar2></SideBar2>
       <Home></Home>
       </div>
    </div>
    </Router>
  );
}

}

export default App;