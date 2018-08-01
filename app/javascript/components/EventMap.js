import React from "react"

class EventMap extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		

		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<h3>Venue Map</h3>
					<div className="col venue-map">
						<img src={this.props.event.venue_map}/>
					</div>
					</div>
				</div>
			</div>
		)
	}
}

export default EventMap