import React ,{Component}from 'react';
import './App.css';
import Header from './Header/Header';
import {MemoryRouter as Router, Route,Switch} from 'react-router-dom'
import List from './Lists/List'
import Content from './content/Content';



class  App extends Component{
componentDidMount(){
  localStorage.setItem("key","5c73e280ffee643ce764c6df16a719b5")
  localStorage.setItem("token","374c221b4185e80027a402574dc071768d32336c175b07d821f47c7cdfbaecf2")
}
 render(){
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