import React from 'react';
import {Grid, Cell, SelectionControlGroup} from 'react-md';
import { withRouter } from 'react-router-dom';

class AddressCell extends React.Component {
  constructor(props) {
      super(props);
  };
  render() {
	  return (
	  	<div className="address-list">
	  		<h2> Your Addresses </h2>
	  		<SelectionControlGroup
			    id="selection-control-group-radios"
			    name="radio-example"
			    type="radio"
			    defaultValue="B"
			    controls={[{
			      label: 'What a Save!',
			      value: 'A',
			    }, {
			      label: 'No problem.',
			      value: 'B',
			    }, {
			      label: 'I got it!',
			      value: 'C',
			    }]}
			  />
	    </div>
	  );
  }
}
export default withRouter(AddressCell); 