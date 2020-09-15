import React, { Component } from 'react'
import SimpleList from './Listitems'
import FormDialog from '../body/Dialog'

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
       const data=dataList.map(({id:listId,name:listName})=>{
        let temp1=[]
        dataCards.map(({id:cardId,name:cardName,idChecklists,idList})=>{
             if(listId==idList){
                 let temp={}
                 temp["cardId"]=cardId;
                 temp["cardName"]=cardName;
                 temp["checkId"]=idChecklists;
                 temp1.push(temp);
             }
            
        })
        return <SimpleList key={listId} cardData={temp1} listData={{id:listId,name:listName}}/>;
       })
      this.setState({
     lists:dataList,
     cards:dataCards,
     listData:data
})
console.log(this.state.listData)
}
       
    render(){
        return (
            <div style={{maxHeight:"91vh",display:"flex",overflow:"scroll",marginTop:5}}>
              {this.state.listData}
              <FormDialog Stylename="ListStyle" title="Create New List" submit={this.handleSubmit} label="Enter List Name"></FormDialog>
            </div>
        )
    }
    
}
export default List;