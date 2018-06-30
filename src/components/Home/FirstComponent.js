import React from "react";
import { Grid, Cell, Media, CardTitle, MediaOverlay, Button} from 'react-md';
import image1 from './home-meal.jpg';
import logo from '../../../public/FitBox-Orange.png'
import { withRouter } from 'react-router-dom'

class FirstComponent extends React.Component {
    render(){
        return (
        	<Grid size={12}  className="home-image">
        		<div className="home-image-box">
        			<img src={logo}/>
        			<h2> Healthy meals delivered to your door</h2>
        			<p> FitBox brings you heat-and-eat meal boxes with best ingredients.</p>
        			<div className="motto">
        				Healthy
        				<span className="bullet"></span>
        				Convenient
    						<span className="bullet"></span>    				
        				Delicious
        			</div>
        			<Grid>
    	    			<Cell size={6}>
    							<Button raised onClick={() => this.props.history.push('/register')} 
                                style={{ float: "right"}} flat secondary swapTheming> Get Started </Button>
    						</Cell>
    	    			<Cell size={6}>					
    							<Button raised onClick={() => this.props.history.push('/login')}  
                                flat secondary swapTheming> Login </Button>
    						</Cell> 
    					</Grid> 
        		</div>
    	  		<img src={image1} className="cover-img"/>
    	  	</Grid>
        )
    }
}

export default withRouter(FirstComponent);