import React, { Component } from 'react'
//import SimpleList from './Listitems'

class List extends Component{
    constructor(props) {
        super(props)
        
        this.state = {
            token:"374c221b4185e80027a402574dc071768d32336c175b07d821f47c7cdfbaecf2",
            key:"5c73e280ffee643ce764c6df16a719b5",
            id:props.match.params.boardid,
             lists:[],
             cards:[],
             listData:[]
        }
    }
    async componentDidMount(){
        console.log(this.state.id)
        const res= await fetch(`https://api.trello.com/1/boards/${this.state.id}/lists?key=${this.state.key}&token=${this.state.token}`)
       const dataList = await res.json();
       const res2= await fetch(`https://api.trello.com/1/boards/5eaefe609dc0505416efe976/cards?key=${this.state.key}&token=${this.state.token}`)
       const dataCards = await res2.json();
    }
       
    render(){
        return (
            <div style={{maxHeight:"91vh",display:"flex",overflow:"scroll",marginTop:5}}>
              {this.state.listData}
              
            </div>
        )
    }
    
}
export default List;