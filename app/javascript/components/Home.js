import React from "react"
import Nav from "./Nav"
import EventList from "./EventList"
import HomeLanding from "./HomeLanding"

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	fadeDescription(){
	
	}
	

	
	render() {
		
		return (
			<div className="container-fluid">
				<HomeLanding isLoggedIn={this.props.isLoggedIn}/>
				<div className="row no-gutters">
					<div className="col events">	
					<br/>
						<EventList key={event.id} 
										events={this.props.events} 
										eventIndexUrl={this.props.eventIndexUrl}/>
					<br/>
					</div>
				</div>
				<div id="instructions" className="row center-text">
					<div className="col-10 what-is-ravemeet">
						<h3>What is RaveMeet?</h3>
						<p>RaveMeet allows you to explore popular events in the San Francisco and Los Angeles areas
						and organize meetups.</p>
						<i className="fa fa-3x fa-users"/>
					</div>
				</div>
				<div className="row center-text ravemeet-description">
					<div className="col-10">
						<h3>How does it work?</h3>
						<p>Anyone can organize a meetup, then other users can choose to join instantly.</p>
						<i className="fa fa-4x fa-street-view"/>
					</div>
				</div>
			</div>
		)
	};
}

export default Home