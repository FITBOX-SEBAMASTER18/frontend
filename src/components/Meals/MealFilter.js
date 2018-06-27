"use strict";

import React from 'react';
import { DataTable, TableBody, TableRow, TableColumn } from 'react-md';


export class MealFilter extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DataTable baseId="meal">
                <TableBody>
                    {this.props.filters.map((filter, i) => <TableRow key={i}><TableColumn> {filter} </TableColumn></TableRow>)}
                </TableBody>
            </DataTable>
        );
    }
}