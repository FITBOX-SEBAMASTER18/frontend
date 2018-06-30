"use strict";

import React from 'react';
import { DataTable, TableBody, TableRow, TableColumn, TableHeader } from 'react-md';


export class MealFilter extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DataTable 
                baseId='filter' 
                onRowToggle = {(i, checked) => this.props.handleFilter(this.props.filters[i], checked)}>
                <TableBody>
                    {this.props.filters.map((filter, i) => <TableRow key={i}><TableColumn> {filter.text} </TableColumn></TableRow>)}
                </TableBody>
            </DataTable>
        );
    }
}