import React from 'react'
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import './chat.scss';

export class Chat extends React.Component {

  constructor() {
    super();
    this.state = {
        messageList: []
      };
  }

  componentDidMount() {
    addResponseMessage("Welcome to FitBox!")
  }

  handleNewUserMessage(message) {
    console.log(`New message incomig! ${message}`);
    // Now send the message throught the backend API
  }

  render() {
    return (<div>
        <Widget 
        handleNewUserMessage={this.handleNewUserMessage}
        title = {"FitBox"}
        subtitle = {"Write your inquiries."}/>
    </div>)
  }
}