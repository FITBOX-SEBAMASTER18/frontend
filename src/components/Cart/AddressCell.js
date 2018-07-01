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
			var addresses = [];
			{this.props.addresses.map(function(address, i){
				let temp = {
					label: address.label,
					value: i
				};
				addresses.push(temp);
			}
			)}
			console.log("Addresesss:")
			console.log(addresses);
			return (
				<div className="address-list">
					<h2> Your Addresses </h2>
						<SelectionControlGroup
							id="address-list-radio"
							name="address-radio"
							type="radio"
							defaultValue="1"
							controls={addresses}
						/>

				</div>
			);
		}
	}
}

export default withRouter(AddressCell); 