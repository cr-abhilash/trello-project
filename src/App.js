import React ,{Component}from 'react';
import './App.css';
import Header from './Header/Header';
import Body from './body/Body'
import Home from './body/Home'
import {MemoryRouter as Router, Route,Link,Switch} from 'react-router-dom'
import SideBar2 from './sidebar/sideBar2';
import List from './Lists/List'
import Content from './content/Content';
import CheckList from './Lists/Checklist'


class  App extends Component{
componentDidMount(){
  localStorage.setItem("key","5c73e280ffee643ce764c6df16a719b5")
  localStorage.setItem("token","374c221b4185e80027a402574dc071768d32336c175b07d821f47c7cdfbaecf2")
}
 render(){
    console.log("component rendered")
    return (
    <Router>
    <div className="App">
      <Header></Header>
      <Switch>
      <Route path="/boards/:boardid" render={props =>(<List {...props}/>)} />
      <Route path="/" render={ props => (<Content />)} />
      </Switch>
    </div>
    </Router>
  );
}

}

export default App;