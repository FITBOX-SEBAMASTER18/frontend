"use strict";

import React from 'react';
import Page from '../components/Page';
import { CardTitle, Media, MediaOverlay, Grid, Cell } from 'react-md';

export class MealView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page>
                <div className="md-grid">
                    <div className="md-cell md-cell--6">
                        <Media aspectRatio="4-3">
                            <img src="https://www.kitchentreaty.com/wp-content/uploads/2013/08/Brown-Butter-Parmesan-Spaghetti-2.jpg" />
                            <MediaOverlay>
                                <CardTitle title="Spaghetti Parmesan" />
                            </MediaOverlay>
                        </Media>
                    </div>
                    <div className="md-cell md-cell--6">
                        <div className="md-grid">
                            <div className="md-cell md-cell--6" >
                                <p>
                                    MEAL NAME
                                </p>
                            </div>
                            <div className="md-cell md-cell--6" align="right">
                                <p>
                                    ADD TO SHOPPING CART
                                </p>
                            </div>
                        </div>
                        <div className="md-grid">
                            <div className="md-cell md-cell--3" align="center">
                                <p>
                                    Energy:
                                </p>
                                <p>
                                    437 kcal
                                </p>
                            </div>
                            <div className="md-cell md-cell--3" align="center">
                                <p>
                                    Fat:
                                </p>
                                <p>
                                    11.5 gr
                                </p>
                            </div>
                            <div className="md-cell md-cell--3" align="center">
                                <p>
                                    Carb:
                                </p>
                                <p>
                                    120 gr
                                </p>
                            </div>
                            <div className="md-cell md-cell--3" align="center">
                                <p>
                                    Protein:
                                </p>
                                <p>
                                    7.5 gr
                                </p>
                            </div>
                        </div>
                        <div className="md-grid">
                            <div className="md-cell md-cell--12">
                                <p align="justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu lectus lobortis lacus tristique varius non ut tellus. Curabitur tincidunt feugiat convallis. Donec convallis mauris justo, vitae tristique dui mattis vel. Proin nec rutrum orci, id tempor ex. Nunc a risus id lorem faucibus fermentum. Aliquam tincidunt, felis et gravida condimentum, dui massa ornare diam, sit amet tempus nulla ex ut enim. Quisque nibh diam, sollicitudin vel vehicula et, malesuada sed ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ut pretium sem. Vestibulum non dignissim ligula, ut pharetra arcu. Sed efficitur massa in rutrum blandit.

                                    Donec maximus nulla a nunc facilisis pharetra. Aenean sit amet convallis elit. Proin sodales elementum finibus. Aliquam at eleifend elit. Sed posuere tellus et tortor porta, vitae iaculis augue accumsan. Curabitur auctor magna consectetur lacinia eleifend. Nam eleifend condimentum quam. Donec at luctus tortor. In in massa luctus, hendrerit magna eget, finibus metus. Suspendisse tempus pretium massa, ac mattis tellus congue in. Praesent fringilla at sem id porttitor. Praesent quis orci suscipit sapien commodo cursus sit amet at dolor. Morbi eget cursus sapien, et pharetra nisi. Praesent leo justo, volutpat eu est ac, porta tristique quam. Nunc rhoncus est magna, eu convallis dolor commodo non.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}