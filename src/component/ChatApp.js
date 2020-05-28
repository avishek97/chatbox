import React from 'react';
import ChatInput from './ChatInput';
class ChatApp extends React.Component{
    constructor(props){
        super(props);
        this.state={messages:[]}
    }
    mess=(inp)=>{
        const messageObject={
            username:this.props.username,
            messages:inp,
        }
    
    this.socket.emit(
        "client:message",messageObject
    );
    this.addMessage(messageObject);
    }
    addMessage=(messageObject)=>{
        const {messages} = this.state;
        messages.push(messageObject);
        this.setState({messages:messages})
    }
        
    
    render(){
        return(
            <div>
                <ChatInput onSend={this.mess}></ChatInput>
            </div>
        )
    }
}
export default ChatApp