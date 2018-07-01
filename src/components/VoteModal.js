"use strict";

import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { List, ListItem, TextField, Button, DialogContainer, Grid, Cell, Media, MediaOverlay, CardTitle } from 'react-md';


class VoteModal extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            visible:true,
        };
        this.hide=this.hide.bind(this);
    }
    hide(){
        this.setState({ visible: false });
    };
    render() {
        const { visible } = this.state;
        console.log(this.props.meals);
        if(this.props.meals.length == 0) return null;
        console.log("didnt return")
        return (  
            <DialogContainer
              id="simple-list-dialog"
              visible={visible}
              title="Simple List Dialog"
              onHide={this.hide}
              focusOnMount={false}
              height="50%"
              width="70%"
            >
            <Grid>
                <Cell size = {12} className="vote-title">
                <p> Vote Next Week's Meals </p>
            </Cell>
                    <Cell size = {4}>
                        <Media><img src={this.props.meals[0].image} />

                        </Media>
                        <p> {this.props.meals[0].name} </p>
                        <Button raised primary iconClassName="fa fa-hand-spock-o">Spock</Button>
                    </Cell>
                    <Cell size = {4}>
                        <Media><img src={this.props.meals[1].image} />

                        </Media>
                        <p> {this.props.meals[1].name} </p>
                        <Button> Vote </Button>
                    </Cell>
                    <Cell size = {4}>
                        <Media><img src={this.props.meals[2].image} />

                        </Media>
                        <p> {this.props.meals[2].name} </p>
                        <Button> Vote </Button>
                    </Cell>
                </Grid>
            </DialogContainer>
        );
    }
}

export default withRouter(VoteModal);