import React from 'react';
import {Grid, Cell, SelectionControlGroup} from 'react-md';
import { withRouter } from 'react-router-dom';

class AddressCell extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			addresses: this.props.addresses
		}
	};
	render() {
		if (this.props.addresses == "") {
			return null
		}
		else {
			return (
				<div className="address-list">
					<h2> Your Addresses </h2>
					{this.props.addresses.map((address, i) =>
						<SelectionControlGroup
							key={i}
							address={address}
							id="address-list-radio"
							name="address-radio"
							type="radio"
							defaultValue="1"
							controls={[{
								label: address.label,
								value: toString(i)
							}]}
						/>
					)}
					{/*<SelectionControlGroup
						id="address-list-radio"
						name="address-radio"
						type="radio"
						defaultValue="A"
						controls={[{
							label: this.props.addresses[0].label,
							value: 'A',
						}, {
							label: this.props.addresses[1].label,
							value: 'B',
						}]}
					/>*/}
				</div>
			);
		}
	}
}

export default withRouter(AddressCell); 