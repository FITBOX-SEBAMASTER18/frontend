"use strict";

import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { List, ListItem, DialogContainer, TextField, Button } from 'react-md';

import AdressList from './AdressList';


class MyAdress extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            l_delete: null,
            delete: null,
            l_add: "",
            add: "",
            d_visible: false,
            a_visible: false
        };
        this.setAddressID = this.setAddressID.bind(this);
        this.deleteAddress = this.deleteAddress.bind(this);
        this.addAddress = this.addAddress.bind(this);
        this.handleChangeNewAddressLabel = this.handleChangeNewAddressLabel.bind(this);
        this.handleChangeNewAddress = this.handleChangeNewAddress.bind(this);
        this.d_show = this.d_show.bind(this);
        this.a_show = this.a_show.bind(this);
        this.d_hide = this.d_hide.bind(this);
        this.a_hide = this.a_hide.bind(this);
    }

    d_show(){
        this.setState({ d_visible: true });
    };

    d_hide(){
        this.setState({ d_visible: false })
    }


    a_show(){
        this.setState({ a_visible: true });
    };

    a_hide(){
        this.setState({ a_visible: false })
    }

    setAddressID(id, label) {
        this.setState({
            delete: id,
            l_delete: label
        });
        console.log(id);
        console.log(label);
    }

    deleteAddress(){

        let address = {
            _id: this.state.delete,
            label: this.state.l_delete
        }
        this.props.addressDeleted(address)
    }

    addAddress(){
        let address = {
            address: this.state.add,
            label: this.state.l_add
        }
        this.props.addressAdded(address);
    }

    handleChangeNewAddressLabel(value){
        this.setState(Object.assign({}, this.state, {l_add: value}));
    }

    handleChangeNewAddress(value){
        this.setState(Object.assign({}, this.state, {add: value}));
    }

    render() {
        const d_actions = [];
        d_actions.push(<Button flat secondary onClick={()=>{this.deleteAddress();this.d_hide();}}>Confirm</Button>);
        d_actions.push(<Button flat primary onClick={()=>{this.d_hide()}}>Cancel</Button>);
        const a_actions = [];
        a_actions.push(<Button flat secondary onClick={()=>{this.addAddress();this.a_hide();}}>Confirm</Button>);
        a_actions.push(<Button flat primary onClick={()=>{this.a_hide()}}>Cancel</Button>);
        return (  
            <div className="address-container">  
            <h1> My Adresses </h1>
            <br/>
            <AdressList addresses={this.props.addresses} setAddressID={this.setAddressID}/>
            <br/>
            <Button raised secondary 
            onClick= {() => {this.a_show()}}>Add New</Button>
            <Button raised primary
            disabled= {!this.state.delete ? true: false}
            onClick= {() => {this.d_show()}}> Delete </Button>

            <DialogContainer
                id="delete-dialog"
                visible={this.state.d_visible}
                onHide={this.d_hide}
                actions={d_actions}
                title={"Delete "+this.state.l_delete+"?"}
            >
            </DialogContainer>

            <DialogContainer
                id="add-dialog"
                visible={this.state.a_visible}
                onHide={this.a_hide}
                actions={a_actions}
                title={"Add Address "}
            >

            <TextField
            id="new-address-label"
            label="Address Label"
            placeholder="Home etc."
            onChange={this.handleChangeNewAddressLabel}
            value={this.state.l_add}
            />
            <TextField
            id="new-address"
            label="Address"
            placeholder="Street Door City PLZ"
            onChange={this.handleChangeNewAddress}
            value={this.state.add}
            />
            </DialogContainer>
            </div>
        );
    }
}

export default withRouter(MyAdress);