import React from 'react'
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import './chat.scss';
import io from "socket.io-client";
import UserService from '../services/UserService';
const socket = io('localhost:6678');

export class Chat extends React.Component {

  constructor() {
    super();
    this.state = {
        messageList: [],
        user: {},
      };
    socket.on('RECEIVE_MESSAGE', function(data){
      console.log("RECEIVE_MESSAGE");
      addMessage(data);
    });

    const addMessage = data => {
        console.log(data);
        this.handleReceiveMessage(data);
        console.log(this.state.messages);
    };

    this.handleNewUserMessage = this.handleNewUserMessage.bind(this);
    this.handleReceiveMessage = this.handleReceiveMessage.bind(this);
  }

  handleReceiveMessage(data) {
    console.log('Handle Receive Message');
    console.log(data);
    console.log(this.state.messages);
  }

  componentDidMount() {
    this.setState({ user: UserService.getCurrentUser()});
    console.log(UserService.getCurrentUser());
    addResponseMessage("Welcome to FitBox!")
  }

  handleNewUserMessage(message) {
    console.log(`New message incomig! ${message}`);
    socket.emit('SEND_MESSAGE', {
        author: this.state.user._id,
        message: message
    });
    this.setState({message: ''});
    console.log('Sent message');

    // Now send the message throught the backend API
  }

  render() {

    return (<div>
        <Widget 
        handleNewUserMessage={this.handleNewUserMessage}
        title = {"Hello " + this.state.user.name}
        subtitle = {"Write your inquiries."}/>
    </div>)
  }
}