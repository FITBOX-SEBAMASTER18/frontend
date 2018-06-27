"use strict";

import React from 'react';
import Page from '../components/Page';
import {
    Avatar,
    Cell,
    Divider,
    FontIcon,
    Grid,
    List,
    ListItem,
    Subheader,
    Media,
    SelectionControlGroup
  } from 'react-md';

export class OrderView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page>
                <div className="md-grid">
                    <div className="md-cell md-cell--9">
                        <List>
                            <Subheader primaryText="YOUR ORDER" primary />
                            <ListItem
                                leftIcon={<FontIcon key="local_dining">local_dining</FontIcon>}
                                rightIcon={<FontIcon key="delete">delete</FontIcon>}
                                primaryText="Spaghetti Parmesan"
                                secondaryText={'x3'}
                            />
                            <ListItem
                                leftIcon={<FontIcon key="local_dining">local_dining</FontIcon>}
                                rightIcon={<FontIcon key="delete">delete</FontIcon>}
                                primaryText="Spaghetti Parmesan"
                                secondaryText={'x3'}
                            />
                            <ListItem
                                leftIcon={<FontIcon key="local_dining">local_dining</FontIcon>}
                                rightIcon={<FontIcon key="delete">delete</FontIcon>}
                                primaryText="Spaghetti Parmesan"
                                secondaryText={'x3'}
                            />
                        </List>
                    </div>
                    <div className="md-cell md-cell--3">
                        <SelectionControlGroup
                            id="address-radios"
                            name="addressRadio"
                            type="radio"
                            label="Address"
                            defaultValue="A"
                            controls={[{
                                label: 'Home',
                                value: 'Stunzstr. 19 München',
                            }, {
                                label: 'Work',
                                value: 'Arcisstr. 3 München',
                            }]}
                        />
                    </div>
                </div>
            </Page>
        );
    }
}