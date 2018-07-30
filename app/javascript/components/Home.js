import React from "react"
import Nav from "./Nav"
import EventList from "./EventList"

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	
	render() {
		

		return (
			<div>
				<div className="row">
					<div id="landing-background" className="container-fluid">
						<h2>Locate friendly groups at your favorite events.
						<br/>Sign up today!</h2>
						<a className="btn btn-primary" href="/users/sign_up">Sign Up</a>
					</div>
				</div>
				<div className="row">
					<div className="col events">
					<br/>
						<h2>Upcoming Events</h2>
						<EventList key={event.id} 
										events={this.props.events} 
										eventIndexUrl={this.props.eventIndexUrl}/>
					<br/>
					</div>
				</div>
				<div id="instructions" className="row">
					<div className="col">
						<h3> Wasssssup</h3>
					</div>
				</div>
			</div>
		)
	};
}

export default Home