import React,{Component} from 'react';
export default class TodoItem extends Component {
static propTypes ={
item:React.PropTypes.string,
onDeleteTask:React.PropTypes.func
};
render(){
return ( 
    
    
    
<div className="backspring" >
<div className="backspring1" ></div>
<div className="todoItem">
{this.props.item}
<div className="hhh" onClick={this.props.onDeleteTask} title="remove?"></div>
</div>
</div>
);
}
}