import React from "react"

class EventMap extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		if (this.props.event.venue_map === null) {

			return (
				<div/>
			)
		}

		else {
			return (
				<div className="container">
					<br/>
					<div className="row">
						<div className="col">
							<h3>Venue Map</h3>
							<p>To the right is a map of {this.props.event.venue}, it may be a good idea to check it out.</p>
						</div>
						<div className="col-8 venue-map">
							<img src={this.props.event.venue_map}/>
						</div>
					</div>
					<br/>
					<br/>
				</div>
			)
		}
	}
}

export default EventMap