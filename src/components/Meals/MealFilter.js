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
            <DataTable>
                <TableBody>
                    {this.props.filters.map((filter, i) => <TableRow><TableColumn> {filter} </TableColumn></TableRow>)}
                </TableBody>
            </DataTable>
        );
    }
}