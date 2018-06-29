"use strict";

import React from 'react';
import Styled from 'styled-components';
import {Grid, Cell, Button} from 'react-md';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './footer.css';
import logo from '../../public/FitBox-Orange.png'

class PlainFooter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <Grid>
                    <Cell size={8} position='center' align='middle' className="links">
                        <Grid>
                            <Cell size={3}>
                            <img src={logo} className="logo"/>
                            </Cell>                        
                            <Cell size={3}>
                                <h4> Contact Us </h4>
                                <p> Arcisstraße 21 <br/> D-80333 <br/> 
                                Munich Germany <br/> Tel.: +49 89 289 01 
                                </p>
                            </Cell>
                            <Cell size={3}>
                                <h4> Links </h4>
                                <Link to="/faq">F.A.Q.</Link><br/>
                                <Link to="/">Blog</Link><br/>
                                <Link to="/">Careers</Link>
                            </Cell>
                            <Cell size={3}>
                                <h4> Connect to us </h4>
                                <Button icon iconClassName="fa fa-facebook" />
                                <Button icon iconClassName="fa fa-instagram" />
                                <Button icon iconClassName="fa fa-twitter" />
                            </Cell>
                        </Grid>
                        <p>© {new Date().getFullYear()} FitBox. All rights reserved.</p>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export const Footer = Styled(PlainFooter)`
    max-height: 35px;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    > p {
        text-align: center;
        margin-top: 4px;
    }
`;