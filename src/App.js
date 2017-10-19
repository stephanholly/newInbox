import React, {Component} from 'react'
import './App.css';
import Messages from './components/Messages.js'
import Toolbar from './components/Toolbar.js'
import Navbar from './components/Navbar.js'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';


const messages = [
  {
    "id": 1,
    "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
    "read": false,
    "starred": true,
    "labels": ["dev", "personal"]
  },
  {
    "id": 2,
    "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
    "read": false,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 3,
    "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    "read": false,
    "starred": true,
    "labels": ["dev"]
  },
  {
    "id": 4,
    "subject": "We need to program the primary TCP hard drive!",
    "read": true,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 5,
    "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    "read": false,
    "starred": false,
    "labels": ["personal"]
  },
  {
    "id": 6,
    "subject": "We need to back up the wireless GB driver!",
    "read": true,
    "starred": true,
    "labels": []
  },
  {
    "id": 7,
    "subject": "We need to index the mobile PCI bus!",
    "read": true,
    "starred": false,
    "labels": ["dev", "personal"]
  },
  {
    "id": 8,
    "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    "read": true,
    "starred": true,
    "labels": []
  }
]

class App extends Component {

  state = {
    messages
  }

  messageId = (id) => {
    return this.state.messages.filter(message => message.id === id)[0];
  }

  messageType = (id) => {
    if (this.messageId(id).read && this.messageId(id).selected) {
      return "row message read selected";
    } else if (!this.messageId(id).read && this.messageId(id).selected) {
      return "row message unread selected";
    } else if (this.messageId(id).read) {
      return "row message read";
    } else if (!this.messageId(id).read) {
      return "row message unread";
    }
  }

  readMessage = (id, e) => {
    if (e.target.type !== 'checkbox' && e.target.nodeName !== 'I' ) {
      this.messageId(id).read = true;
      this.setState({
        messages: messages
      })
    }
  }

  star = (id) => {
    this.messageId(id).starred = !this.messageId(id).starred;
    this.setState({
      messages: messages
    })
  }

  clicked = (id) => {
    this.messageId(id).selected = !this.messageId(id).selected;
    this.setState({
      messages: messages
    })
  }

  boxChange = () => {
      let all = this.state.messages.every(message => message.selected);
      let some = this.state.messages.some(message => message.selected);
      if (all) {
        return "fa fa-check-square-o";
      } else if (some) {
        return "fa fa-minus-square-o";
      } else {
        return "fa fa-square-o";
      }
    }

  boxClick = () => {
    let all = this.state.messages.every(message => message.selected);
    let some = this.state.messages.some(message => message.selected);
    for (let message of this.state.messages) {
      if (some || !all) message.selected = true;
      if (all) message.selected = false;
      this.setState({
        messages: messages
      })
    }
  }

  clickRead = () => {
    let selected = this.state.messages.filter(message => message.selected);
    for (let message of selected) {
      message.read = true;
    }
    this.setState({
      messages: messages
    })
  }

  clickUnread = () => {
    let selected = this.state.messages.filter(message => message.selected);
    for (let message of selected) {
      message.read = false;
    }
    this.setState({
      messages: messages
    })
  }

  labelAdd = (val) => {
    let selected = this.state.messages.filter(message => message.selected);
    for (let message of selected) {
      if (!message.labels.includes(val) && val !== "Apply label") message.labels = message.labels.concat(val);
      this.setState({
        messages: messages
      })
    }
  }

  labelDelete = (val) => {
    let selected = this.state.messages.filter(message => message.selected);
    for (let message of selected) {
      if (message.labels.includes(val)) {
      message.labels.splice(message.labels.indexOf(val), 1);
      message.labels = message.labels;
      }
      this.setState({
        messages: messages
      })
    }
  }

  messageDelete = () => {
    let selected = this.state.messages.filter(message => message.selected);
    for (let message of selected) {
      this.state.messages.splice(this.state.messages.indexOf(message), 1);
    }
    this.setState({
      messages: messages
    })
  }

  unreadCount = () => {
    return this.state.messages.reduce((acc, message) => {
      if (message.read === false) acc += 1;
      return acc;
    }, 0)
  }

  render() {
    return (
      <div>
        <Navbar />
        <Toolbar
          clickRead={ this.clickRead }
          clickUnread={ this.clickUnread }
          boxChange={ this.boxChange }
          boxClick={ this.boxClick }
          labelAdd={ this.labelAdd }
          labelDelete={ this.labelDelete }
          messageDelete={ this.messageDelete }
          unreadCount={ this.unreadCount }
        />
        <Messages
          messages={this.state.messages}
          messageType={this.messageType}
          readMessage={this.readMessage}
          star={this.star}
          clicked={this.clicked}
        />
      </div>
    );
  }
}

export default App;
