"use strict";

import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { List, ListItem, DialogContainer, TextField, Button } from 'react-md';



class MyOrders extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        let orders = this.props.orders.map((order, i ) => {
            let new_order = order;
            new_order.date = new Date(order.date);
            return new_order;
         });
         console.log(orders);
        return (  
            <div className="order-container">  
            <h1> My Orders </h1>
            <br/>
                <List>
                    {orders.map((order, i) =>        
                        <ListItem
                            primaryText={order.date.toLocaleString("en-us", {month: "long"}) + " " + order.date.getUTCDate() + ", " + order.date.getFullYear()}
                            secondaryText={order.price + " " + "Euro"}
                            threeLines
                        />
                    )}
                </List>
            <br/>
            </div>
        );
    }
}

export default withRouter(MyOrders);