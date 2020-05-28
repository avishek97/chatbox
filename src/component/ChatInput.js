import React from 'react';
class ChatInput extends React.Component{
    constructor(props){
        super(props);
        this.state={input:""}
    }
    handleChange=(event)=>{
        var a=event.target.value;
        this.setState({input:a})
    }
    handleClick=()=>{
        this.props.onSend(this.state.input)
    }
    render(props){
        return(
            <div>
                <input type="text" onChange=
                {this.handleChange}></input>
                <button onClick={this.handleClick}>Send</button>
            </div>
        )
    }
}
export default ChatInput;