"use strict";

import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { List, ListItem, TextField, Button, DialogContainer, Grid, Cell, Media, MediaOverlay, CardTitle } from 'react-md';
import './vote-modal.scss';

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
              id="voting-dialog"
              visible={visible}
              title="Vote Next Week's Meals"
              onHide={this.hide}
              focusOnMount={false}
              height="70%"
              width="70%"
            >
                <Grid className="vote-meal-grid">
                    <Cell size = {4}>
                        <Media><img src={this.props.meals[0].image} />

                        </Media>
                        <p className="meal-name"> {this.props.meals[0].name} </p>
                        <p> Calories: {this.props.meals[0].calories} </p>
                        <p> Fat: {this.props.meals[0].calories} </p>
                        <p> Carbs: {this.props.meals[0].carbohydrates} </p>
                        <p> Proteins: {this.props.meals[0].protein} </p>
                        <Grid>
                            <Button className="vote-button"raised primary iconClassName="fa fa-thumbs-up">Vote</Button>
                        </Grid>
                    </Cell>
                    <Cell size = {4}>
                        <Media><img src={this.props.meals[1].image} />

                        </Media>
                        <p className="meal-name"> {this.props.meals[1].name} </p>
                        <p> Calories: {this.props.meals[1].calories} </p>
                        <p> Fat: {this.props.meals[1].calories} </p>
                        <p> Carbs: {this.props.meals[1].carbohydrates} </p>
                        <p> Proteins: {this.props.meals[1].protein} </p>
                        <Grid>
                            <Button className="vote-button" raised primary iconClassName="fa fa-thumbs-up">Vote</Button>
                        </Grid>
                    </Cell>
                    <Cell size = {4}>
                        <Media><img src={this.props.meals[2].image} />

                        </Media>
                        <p className="meal-name"> {this.props.meals[2].name} </p>
                        <p> Calories: {this.props.meals[2].calories} </p>
                        <p> Fat: {this.props.meals[2].calories} </p>
                        <p> Carbs: {this.props.meals[2].carbohydrates} </p>
                        <p> Proteins: {this.props.meals[2].protein} </p>
                        <Grid>
                            <Button className="vote-button" raised primary iconClassName="fa fa-thumbs-up">Vote</Button>
                        </Grid>
                    </Cell>
                </Grid>
            </DialogContainer>
        );
    }
}

export default withRouter(VoteModal);