"use strict";
import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './views/Home';
import { LoginView } from './views/LoginView';
import { MealListView } from './views/MealListView';
import { RegisterView } from './views/RegisterView';
import { MealView } from './views/MealView';
import AboutView from './views/AboutView';
import AccountView from './views/AccountView';
import FAQView from './views/FAQView';
import { OrderView } from './views/OrderView';
import CartView from './views/CartView';
import { Chat } from './components/Chat';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        title: 'FitBox',
        routes: [
            { component: Home, path: '/', exact: true},
            { component: LoginView, path: '/login'},
            { component: RegisterView, path: '/register'},
            { component: MealListView, path: '/meals'},
            { component: MealView, path: '/meal'},
            { component: AboutView, path: '/about'},
            { component: FAQView, path: '/faq'},
            { component: AccountView, path: '/account'},
            { component: OrderView, path: '/order'},
            { component: CartView, path: '/cart'}
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
                    <div>
                        {this.state.routes.map((route, i) => (<Route key={i} {...route}/>) )}
                        <Chat/>
                    </div>
                </Switch>
            </Router>
        </div>
    );
  }
}
