import React from "react";
import Txt from "./Txt";
import Butn from "./Butn";
import Messages from "./Messages";
import ReactDOM from "react-dom";

class ChatInput extends React.Component{

    constructor(props){
        super(props);
        this.state={message:""}
    }
    handleChange=(e)=>{
        let a=e.target.value;
        this.setState({message:a});
    }

    handleClick=()=>{
        this.props.onSend(this.state.message);
    }

    render(){
        return(
            <div>
                
            
            <div className="row">
                <input onChange={this.handleChange} abc={this.props.inp}></input>
               <button onCabc1={this.props.btn} onClick={this.handleClick}></button>
            </div>
            </div>
        )
    }
}
export default ChatInput;