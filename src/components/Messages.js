import React, {Component} from 'react'
import Message from './Message.js';

class Messages extends Component {

  render() {
    const messageInfo = this.props.messages.map((message, idx) => <Message
      key={idx}
      message={message}
      messageType={ this.props.messageType }
      readMessage={ this.props.readMessage }
      star={ this.props.star }
      clicked={ this.props.clicked }
    />)
    return (
      <div className="message-container">
        <div className="messages">
           {messageInfo}
        </div>
      </div>
    );
  }
}



export default Messages
