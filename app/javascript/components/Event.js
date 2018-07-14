import React from "react"

class Event extends React.Component {
	constructor(props) {
		super(props);
		this.goToEvent = this.goToEvent.bind(this)
	}

	goToEvent() {
		window.location.href = (this.props.eventIndexUrl + "/" + this.props.event.id);
	}

	render () {
		console.log(this.props.event.id)

		return (
			<div className="card">
				<a onClick={this.goToEvent} href="javascript:void(0)" ><div className="card-body">
					<h5 className="card-title">{this.props.event.name}</h5>
					<p className="card-text">{this.props.event.location}</p>
				</div></a>
			</div>

		)
	};
}

export default Event