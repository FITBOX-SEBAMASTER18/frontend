"use strict";
import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { MainView } from './views/MainView';
import { LoginView } from './views/LoginView';
import { SignupView } from './views/SignupView';
import { MenuView } from './views/MenuView';
import { RegisterView } from './views/RegisterView';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        title: 'FitBox',
        routes: [
            { component: MainView , path: '/', exact: true},
            { component: LoginView, path: '/login'},
            { component: SignupView, path: '/register'},
            { component: MenuView, path: '/menu'},
            { component: RegisterView, path: '/register'}
        ]
    };
    document.title = this.state.title;
  }

  componentDidMount(){
    document.title = this.state.title;
  }

  render() {
      return(
          <div>
              <Router>
                  <Switch>
                      {this.state.routes.map((route, i) => (<Route key={i} {...route}/>) )}
                  </Switch>
              </Router>
          </div>
      );
  }
}
