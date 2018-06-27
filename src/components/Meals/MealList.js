"use strict";

import React from 'react';
import { withRouter } from 'react-router-dom';

import Page from '../Page';
import { MealFilter } from './MealFilter';


class MealList extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (    
            <Page activeTab={0}>
                <div className="md-grid">
                    <div className = "md-cell md-cell--3">
                        <MealFilter filters={this.props.filters}/>
                    </div>
                </div>
            </Page>
        );
    }
}

export default withRouter(MealList);