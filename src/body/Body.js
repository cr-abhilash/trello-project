import React, { Fragment ,useState} from 'react'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import Button from '@material-ui/core/Button'
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import {Link } from 'react-router-dom'
import './body.css'
import FormDialog from './Dialog'

class Body extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            token:"374c221b4185e80027a402574dc071768d32336c175b07d821f47c7cdfbaecf2",
             key:"5c73e280ffee643ce764c6df16a719b5",
             boardData:[]
        }
    }
     NavigateList= (event)=>{
       console.log(this.props)
       let id=event.target.getAttribute("value")
       this.props.history.push(`/boards/${id}`)
    }
    async componentDidMount(){
        console.log("component renderd")
       const res= await fetch(`https://api.trello.com/1/members/me/boards?key=${this.state.key}&token=${this.state.token}`)
        const data = await res.json();
        console.log(data)
        this.setState({
         boardData:[...data]
        })
    }
    handleSubmit = async (name1)=>{
         const res=await fetch('https://api.trello.com/1/boards?key=5c73e280ffee643ce764c6df16a719b5&token=374c221b4185e80027a402574dc071768d32336c175b07d821f47c7cdfbaecf2',{
            method : 'POST',
            headers: { 
            "Content-type": "application/json; charset=UTF-8"
            } ,
              body:JSON.stringify({name:name1})
            })
          const newdata=await res.json();
          this.setState({
              boardData:[...this.state.boardData,{name:newdata.name,id:newdata.id,prefs:newdata.prefs}]
          })
    }
    render(){
    return (
        <div className="body" >
        {/* <AccessTimeOutlinedIcon size="small"/>
        <strong>Personal Boards</strong> */}
        
        <div className="title">
        <PermIdentityOutlinedIcon size="small"/>
        <strong>Personal Boards</strong>
        </div>
        <div className="boards">
           <FormDialog Stylename="board1" title="Create New Board" submit={this.handleSubmit} label="Enter Board Name"></FormDialog>
           {this.state.boardData.map(({id,name,prefs})=>{
        return <div  onClick={this.NavigateList} value={id} key={id} className="board1"
        style={
            {backgroundImage:(prefs.backgroundImage)?`url(${prefs.backgroundImage})`:'none',
            backgroundColor:prefs.backgroundColor
        }}>
        {name}
       </div>
    })}
        </div>
        </div>
    )
}
}

export default Body
