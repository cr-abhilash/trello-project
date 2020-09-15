import React ,{Component}from 'react';
import './App.css';
import Header from './Header/Header';
import Body from './body/Body'
import Home from './body/Home'
import {MemoryRouter as Router, Route,Link,Switch} from 'react-router-dom'
import SideBar2 from './sidebar/sideBar2';
import List from './Lists/List'
import Content from './content/Content';
//import CheckList from './Lists/Checklist'


class  App extends Component{
  constructor(props){
    super(props)
  
    this.state = {
      token:"374c221b4185e80027a402574dc071768d32336c175b07d821f47c7cdfbaecf2",
      key:"5c73e280ffee643ce764c6df16a719b5",
       boards:[],
       updateState:""
    }
  }
  async componentDidMount(){
    console.log("component mounted")
    console.log(this.state.key)
    const res= await fetch(`https://api.trello.com/1/members/me/boards?key=${this.state.key}&token=${this.state.token}`)
    const data = await res.json();
    console.log(data)
    this.setState({
      boards:data
    })
}

  
 UpdateState= (data)=>{
      this.setState({
        updateState:data
      },()=> console.log(this.state.updateState))
 }
   render(){
    console.log("component rendered")
  return (
    <Router>
    <div className="App">
      <Header></Header>
      <Switch>
      <Route path="/boards/:boardid" render={props =>(<List {...props}/>)} />
      {/* <Route path="/check" render={props =>(<CheckList prop={props}/>)} /> */}
      <Route path="/" render={ props => (<Content  boards={this.state.boards}/>)} />
      </Switch>
    </div>
    </Router>
  );
}

}

export default App;