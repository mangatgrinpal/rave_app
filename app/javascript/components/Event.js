import React from "react"

class Event extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{this.props.events.name}</h5>
					<p className="card-text">{this.props.events.location}</p>
				</div>
			</div>
		)
	};
}

export default Event