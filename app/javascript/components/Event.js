import React from "react"

class Event extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div key={this.props.events.id} className="row justify-content-start">
				<div className="col">
					<p>{this.props.events.name}</p>
				</div>
				<div className="col">
					<p>{this.props.events.location}</p>
				</div>
			</div>
		)
	};
}

export default Event