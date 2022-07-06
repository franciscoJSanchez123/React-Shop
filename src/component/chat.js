import React from 'react';
import io from 'socket.io-client';



class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state={
            messages:[] 
        }
    }
    componentDidMount(){
        this.socket=io('http://localhost:3000')
        this.socket.on('message private',mess=>{
            this.setState({messages:[mess,...this.state.messages]})
        })
    }

    HandleSubmit=(event)=>{
        const message=event.target.value
        console.log(message)
        if (event.keyCode===13 && message){
            console.log('se cumplio el if')
            const messages={
                message,
                from:'tu'
            }
            this.socket.emit('message',messages)
            event.target.value=""
        }
    }


    render(){
        const messages=this.state.messages.map(messages=>{
            return(
                <li>
                    {messages.from}: {messages.message}
                </li>
            )
        })
        return(
            <div>
                    <input type="text" name="message" onKeyUp={this.HandleSubmit}/>
                    <ul>
                        {messages}
                    </ul>
            </div>
        )
    }
}
export default Chat