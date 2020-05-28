import React from "react";
class Butn extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.abc1}>Send</button>
            </div>
        )
    }
}
export default Butn;