import React from 'react'
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

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