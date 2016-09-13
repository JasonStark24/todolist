import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem'
class App extends Component {
  
  state = {
    input:"",
    lists:[
     ]
    }
  
  
  
  
  
  
  onChange=(e)=>{
this.setState({
input:e.target.value
})
};
  
  onKeyUp=(e)=>{
if(e.key==='Enter')
{
let tmp = this.state.lists;
tmp.unshift(this.state.input);
this.setState({
lists:tmp,
input:""
}); 
}
};
  
  
  
  deleteTask=(index)=>{
    return ()=>{
      var tmp = this.state.lists;
      tmp.splice(index,1);
      this.setState({
        
        lists:tmp
        
      })
      
    }
    
  }
  
  
  
  render() {
    const formStyle={
      
      textAlign:"center"
      
    }
    const inputStyle={
      
      
      width:"300px",
      height:"60px",
      fontSize: 'xx-large',
      fontfamily: "arial",
      borderColor: 'black',
      backgroundColor: "block",
      color:"#0000",
      textAlign:"center",
	  borderTopLeftRadius: "60px",
      borderTopRightRadius: "60px",
      
	  outline:"none",
       borderBottom:"solid",
  borderBottomColor:"#000000",
     
    }
    /*replace in button hhh----------------------------------------------*/
    
 var items = this.state.lists.map((item,i)=>{
return (


<TodoItem item={item} key= {i} onDeleteTask = {this.deleteTask(i)}/>




) 

}
)


;
    
    
    
    
    return (
      <div className="App">
       <div className = "todoAppHeader"> Memo List</div>
       
       <div style={formStyle}>
       
       <input style={inputStyle}
       onChange = {this.onChange} 
       value= {this.state.input}
       onKeyUp={this.onKeyUp}
type="text"
placeholder="Input here"


/>
      
       </div>
       {items}
      </div>
    );
  }
}

export default App;

