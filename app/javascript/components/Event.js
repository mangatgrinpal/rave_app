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
		return (
			<a onClick={this.goToEvent} href="javascript:void(0)" ><div className="card">
				<img className="card-img-top" style={{backgroundImage: "url(" + this.props.event.poster +")"}} />
				<div className="card-body">
					<h5 className="card-title">{this.props.event.name}</h5>
					<p className="card-text">{this.props.event.venue}</p>
				</div>
			</div></a>

		)
	};
}

export default Event