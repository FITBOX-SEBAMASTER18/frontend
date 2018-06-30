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
                onRowToggle = {(id, checked) => this.props.filters[id-1].isSelected = checked} 
                defaultSelectedRows = {this.props.filters.map(filter => filter.isSelected)}>
                <TableBody>
                    {this.props.filters.map((filter, i) => <TableRow key={i}><TableColumn> {filter.text} </TableColumn></TableRow>)}
                </TableBody>
            </DataTable>
        );
    }
}