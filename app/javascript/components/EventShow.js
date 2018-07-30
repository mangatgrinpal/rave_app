import React from "react"
import EventMap from "./EventMap"

class EventShow extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		console.log(this.props)

		return (
			<div className="container event">
				<br/>
				<br/>
				<div className="row">
					<div className="col show">
						<div className="card">
							<div className="card-body">
								<div className="card-title date">
									<h5>{this.props.monthDate}</h5>
									<h5>{this.props.year}</h5>
								</div>
							</div>
						</div>
					</div>
					<div className="col details">
						<h5>{this.props.event.name}</h5>
						<p>{this.props.event.venue}</p>
						<p>{this.props.event.location}</p>
					</div>
				</div>
				<EventMap />
				
			</div>
		)
	};
}

export default EventShow