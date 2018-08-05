import React from "react"
import Nav from "./Nav"
import EventList from "./EventList"
import HomeLanding from "./HomeLanding"

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	
	render() {
		return (
			<div className="container-fluid">
				<HomeLanding isLoggedIn={this.props.isLoggedIn}/>
				<div className="row">
					<div className="col events">	
					<br/>
						<EventList key={event.id} 
										events={this.props.events} 
										eventIndexUrl={this.props.eventIndexUrl}/>
					<br/>
					</div>
				</div>
				<div id="instructions" className="row">
					<div className="col">
						<h3>Hello World</h3>
					</div>
				</div>
			</div>
		)
	};
}

export default Home